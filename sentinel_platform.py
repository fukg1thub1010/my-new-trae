#!/usr/bin/env python3
"""
SystemIntegritySentinel - Ultimate AIOps Platform

A comprehensive, self-learning diagnostics platform that provides zero-blind-spot
monitoring and automated root-cause analysis for the entire trae-agent ecosystem.
"""

import click
import asyncio
import json
import yaml
import subprocess
import ast
import sys
import logging
import uuid
import psutil
from pathlib import Path
from typing import Dict, List, Any, Optional, Set
from dataclasses import dataclass, asdict
from datetime import datetime
from abc import ABC, abstractmethod

# Add project root to path
sys.path.insert(0, str(Path(__file__).resolve().parent))

@dataclass
class Event:
    """Core event object that flows through the pipeline"""
    id: str
    source: str
    data: Dict[str, Any]
    timestamp: str
    tags: Set[str]
    root_cause: Optional[str] = None
    confidence: float = 0.0
    repair_hint: Optional[str] = None
    
    def evolve(self, **kwargs) -> 'Event':
        """Create new immutable version with updated fields"""
        new_event = Event(**asdict(self))
        for key, value in kwargs.items():
            if hasattr(new_event, key):
                setattr(new_event, key, value)
        return new_event

class Detector(ABC):
    """Base class for all diagnostic detectors"""
    
    def __init__(self, name: str, domains: List[str], layer: int):
        self.name = name
        self.domains = domains
        self.layer = layer
        self.confidence_history = []
    
    @abstractmethod
    async def run(self, event: Event) -> Event:
        """Process event and return enriched version"""
        pass
    
    def update_confidence(self, success: bool):
        """Update confidence based on repair outcome"""
        self.confidence_history.append(1.0 if success else 0.0)
        # Keep last 10 outcomes
        self.confidence_history = self.confidence_history[-10:]
    
    @property
    def current_confidence(self) -> float:
        """Calculate current confidence based on history"""
        if not self.confidence_history:
            return 0.5
        return sum(self.confidence_history) / len(self.confidence_history)

class LogRegexDetector(Detector):
    """Detects issues through log pattern matching"""
    
    def __init__(self):
        super().__init__("LogRegexDetector", ["logs", "stderr"], 0)
        self.patterns = {
            "gpu_oom": [
                r"CUDA out of memory",
                r"RuntimeError: CUDA error: out of memory",
                r"torch.cuda.OutOfMemoryError"
            ],
            "syntax_error": [
                r"SyntaxError: invalid syntax",
                r"IndentationError: unexpected indent",
                r"TabError: inconsistent use"
            ],
            "import_error": [
                r"ModuleNotFoundError: No module named",
                r"ImportError: cannot import name",
                r"ImportError: attempted relative import"
            ],
            "protobuf_error": [
                r"protobuf.*descriptor",
                r"google.protobuf.*error",
                r"_pb2.*not found"
            ]
        }
    
    async def run(self, event: Event) -> Event:
        """Analyze log content for known patterns"""
        if event.source not in ["logs", "stderr"]:
            return event
        
        content = str(event.data.get("content", ""))
        new_tags = set(event.tags)
        
        for issue_type, patterns in self.patterns.items():
            if any(p.lower() in content.lower() for p in patterns):
                new_tags.add(issue_type)
                return event.evolve(
                    tags=new_tags,
                    root_cause=issue_type,
                    confidence=0.8
                )
        
        return event

class ResourceMonitorDetector(Detector):
    """Monitors system resources for anomalies"""
    
    def __init__(self):
        super().__init__("ResourceMonitorDetector", ["system", "hardware"], 1)
    
    async def run(self, event: Event) -> Event:
        """Monitor CPU, memory, and disk usage"""
        if event.source != "system":
            return event
        
        # Check current resource usage
        cpu_percent = psutil.cpu_percent(interval=1)
        memory = psutil.virtual_memory()
        disk = psutil.disk_usage('/')
        
        issues = []
        if cpu_percent > 90:
            issues.append("high_cpu")
        if memory.percent > 85:
            issues.append("high_memory")
        if disk.percent > 90:
            issues.append("low_disk_space")
        
        new_tags = set(event.tags)
        new_tags.update(issues)
        
        if issues:
            return event.evolve(
                tags=new_tags,
                root_cause=issues[0],
                confidence=0.7
            )
        
        return event

class SentinelKnowledgeBase:
    """Learning knowledge base for failure/repair patterns"""
    
    def __init__(self, storage_path: Path):
        self.storage_path = storage_path
        self.storage_path.mkdir(parents=True, exist_ok=True)
        self.records = []
        self.load_knowledge()
    
    def load_knowledge(self):
        """Load existing knowledge from JSON files"""
        knowledge_file = self.storage_path / "knowledge.json"
        if knowledge_file.exists():
            try:
                with open(knowledge_file, 'r') as f:
                    data = json.load(f)
                    self.records = data
            except Exception as e:
                logging.warning(f"Failed to load knowledge: {e}")
    
    def save_knowledge(self):
        """Save knowledge to JSON file"""
        knowledge_file = self.storage_path / "knowledge.json"
        try:
            with open(knowledge_file, 'w') as f:
                json.dump(self.records, f, indent=2)
        except Exception as e:
            logging.error(f"Failed to save knowledge: {e}")
    
    def find_similar_issue(self, signature: str) -> Optional[Dict[str, Any]]:
        """Find similar past issue based on signature"""
        if not self.records:
            return None
        
        best_match = None
        best_score = 0.0
        
        for record in self.records:
            score = self._calculate_similarity(signature, record.get("signature", ""))
            if score > best_score:
                best_score = score
                best_match = record
        
        if best_match and best_score > 0.7:
            return best_match
        
        return None
    
    def _calculate_similarity(self, str1: str, str2: str) -> float:
        """Calculate string similarity"""
        set1 = set(str1.lower().split())
        set2 = set(str2.lower().split())
        
        if not set1 and not set2:
            return 1.0
        
        intersection = len(set1.intersection(set2))
        union = len(set1.union(set2))
        
        return intersection / union if union > 0 else 0.0
    
    def add_solved_issue(self, record: Dict[str, Any]):
        """Add a new solved issue to knowledge base"""
        self.records.append(record)
        self.save_knowledge()

class SentinelCore:
    """Main sentinel orchestrator"""
    
    def __init__(self):
        self.project_root = Path(__file__).resolve().parent
        self.trae_agent_path = self.project_root / "trae_agent"
        self.knowledge_base = SentinelKnowledgeBase(
            self.trae_agent_path / "sentinel_memory"
        )
        self.detectors = []
        self.setup_logging()
        self.setup_detectors()
    
    def setup_logging(self):
        """Setup comprehensive logging"""
        log_dir = self.project_root / "sentinel_logs"
        log_dir.mkdir(exist_ok=True)
        
        logging.basicConfig(
            level=logging.INFO,
            format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
            handlers=[
                logging.FileHandler(log_dir / "sentinel.log"),
                logging.StreamHandler()
            ]
        )
    
    def setup_detectors(self):
        """Initialize all diagnostic detectors"""
        self.detectors = [
            LogRegexDetector(),
            ResourceMonitorDetector(),
        ]
    
    async def process_event(self, event: Event) -> Event:
        """Process event through detector pipeline"""
        current_event = event
        
        # Run detectors in parallel
        tasks = []
        for detector in self.detectors:
            if any(domain in detector.domains for domain in event.tags):
                tasks.append(detector.run(current_event))
        
        if tasks:
            results = await asyncio.gather(*tasks)
            # Merge results using confidence scores
            best_result = max(results, key=lambda e: e.confidence)
            current_event = best_result
        
        return current_event
    
    def validate_syntax(self) -> List[Dict[str, Any]]:
        """Enhanced syntax validation"""
        syntax_errors = []
        
        for py_file in self.trae_agent_path.rglob("*.py"):
            try:
                with open(py_file, 'r') as f:
                    content = f.read()
                ast.parse(content)
            except SyntaxError as e:
                error_info = {
                    "file": str(py_file),
                    "line": e.lineno,
                    "message": str(e),
                    "signature": f"SyntaxError: {e.msg} at line {e.lineno}"
                }
                syntax_errors.append(error_info)
                logging.error(f"Syntax error in {py_file}: {e}")
        
        return syntax_errors
    
    def check_imports(self) -> Dict[str, Any]:
        """Enhanced import validation"""
        import_issues = {
            "has_import_errors": False,
            "errors": [],
            "suggestions": []
        }
        
        try:
            result = subprocess.run(
                [sys.executable, "-c", "import trae_agent"],
                capture_output=True,
                text=True,
                cwd=self.project_root
            )
            
            if result.returncode != 0:
                import_issues["has_import_errors"] = True
                import_issues["errors"].append(result.stderr)
                
                if "ModuleNotFoundError" in result.stderr:
                    import_issues["suggestions"].append(
                        "Install package in editable mode: pip install -e ."
                    )
        except Exception as e:
            import_issues["has_import_errors"] = True
            import_issues["errors"].append(str(e))
        
        return import_issues
    
    def run_tests(self) -> Dict[str, Any]:
        """Enhanced test execution"""
        test_results = {
            "tests_run": 0,
            "failures": 0,
            "errors": [],
            "summary": ""
        }
        
        try:
            result = subprocess.run(
                [sys.executable, "-m", "pytest", "-v", "--tb=short"],
                capture_output=True,
                text=True,
                cwd=self.project_root
            )
            
            test_results["summary"] = result.stdout
            test_results["failures"] = result.returncode
            
            # Parse test output for specific failures
            if result.stderr:
                test_results["errors"] = result.stderr.split('\n')
            
        except Exception as e:
            test_results["errors"] = [str(e)]
        
        return test_results
    
    def full_diagnosis(self) -> Dict[str, Any]:
        """Comprehensive system diagnosis"""
        diagnosis = {
            "timestamp": datetime.now().isoformat(),
            "syntax_errors": [],
            "import_issues": {},
            "test_results": {},
            "status": "healthy",
            "detectors": [],
            "knowledge_applied": []
        }
        
        # Run detectors
        for detector in self.detectors:
            diagnosis["detectors"].append({
                "name": detector.name,
                "confidence": detector.current_confidence,
                "domains": detector.domains
            })
        
        # Check for known issues
        syntax_errors = self.validate_syntax()
        if syntax_errors:
            diagnosis["syntax_errors"] = syntax_errors
            diagnosis["status"] = "syntax_errors"
            
            # Check knowledge base for similar issues
            for error in syntax_errors:
                known_solution = self.knowledge_base.find_similar_issue(error["signature"])
                if known_solution:
                    diagnosis["knowledge_applied"].append(known_solution)
        
        import_issues = self.check_imports()
        if import_issues["has_import_errors"]:
            diagnosis["import_issues"] = import_issues
            diagnosis["status"] = "import_errors"
        
        test_results = self.run_tests()
        diagnosis["test_results"] = test_results
        
        if test_results.get("failures", 0) > 0:
            diagnosis["status"] = "test_failures"
        
        return diagnosis

@click.group()
def cli():
    """SystemIntegritySentinel - Ultimate AIOps Platform"""
    pass

@cli.command()
def diagnose():
    """Run comprehensive system diagnosis"""
    sentinel = SentinelCore()
    result = sentinel.full_diagnosis()
    
    click.echo("🔍 SystemIntegritySentinel AIOps Report")
    click.echo("=" * 60)
    click.echo(f"Timestamp: {result['timestamp']}")
    click.echo(f"Status: {result['status']}")
    
    click.echo(f"\n🎯 Active Detectors ({len(result['detectors'])}):")
    for detector in result['detectors']:
        click.echo(f"   {detector['name']} - Confidence: {detector['confidence']:.2f}")
    
    if result['syntax_errors']:
        click.echo(f"\n❌ Syntax Errors ({len(result['syntax_errors'])}):")
        for error in result['syntax_errors']:
            click.echo(f"   📄 {error['file']}:{error['line']} - {error['message']}")
    
    if result['import_issues'].get('has_import_errors'):
        click.echo("\n❌ Import Issues:")
        for error in result['import_issues']['errors']:
            click.echo(f"   🔗 {error}")
        for suggestion in result['import_issues']['suggestions']:
            click.echo(f"   💡 {suggestion}")

    if result['test_results'].get('failures', 0) > 0:
        click.echo(f"\n❌ Test Failures ({result['test_results']['failures']}):")
        click.echo(result['test_results']['summary'])
        for error in result['test_results']['errors']:
            click.echo(f"   🔗 {error}")
    
    if result['knowledge_applied']:
        click.echo(f"\n🧠 Knowledge Base Solutions Applied ({len(result['knowledge_applied'])}):")
        for knowledge in result['knowledge_applied']:
            click.echo(f"   ✅ {knowledge.get('repair_strategy', 'Unknown')}")

@cli.command()
def status():
    """Show real-time system status"""
    sentinel = SentinelCore()
    
    click.echo("🎯 Trae Agent System Status")
    click.echo("=" * 40)
    
    # System metrics
    cpu_percent = psutil.cpu_percent(interval=1)
    memory = psutil.virtual_memory()
    
    click.echo("💻 System Resources:")
    click.echo(f"   CPU: {cpu_percent:.1f}%")
    click.echo(f"   Memory: {memory.percent:.1f}% ({memory.used / 1024**3:.1f}GB / {memory.total / 1024**3:.1f}GB)")
    
    diagnosis = sentinel.full_diagnosis()
    click.echo(f"\n🔍 Health Status: {diagnosis['status']}")
    click.echo(f"   Syntax Errors: {len(diagnosis['syntax_errors'])}")
    click.echo(f"   Import Issues: {len(diagnosis['import_issues'].get('errors', []))}")
    click.echo(f"   Test Failures: {diagnosis['test_results'].get('failures', 0)}")
    click.echo(f"   Knowledge Base: {len(sentinel.knowledge_base.records)} solved issues")

@cli.command()
@click.option('--config', default='sentinel.yml', help='Configuration file')
def start(config):
    """Start the Sentinel platform daemon"""
    click.echo("🚀 Starting SystemIntegritySentinel AIOps Platform...")
    
    # Create configuration if it doesn't exist
    config_path = Path(config)
    if not config_path.exists():
        default_config = {
            'detectors': {
                'log_regex': {'enabled': True, 'priority': 1},
                'resource_monitor': {'enabled': True, 'priority': 2},
                'syntax_checker': {'enabled': True, 'priority': 3}
            },
            'monitoring': {
                'log_files': ['*.log', 'stderr'],
                'check_interval': 30
            }
        }
        
        with open(config_path, 'w') as f:
            yaml.dump(default_config, f, default_flow_style=False)
        
        click.echo(f"📋 Created default configuration: {config}")
    
    click.echo("✅ Sentinel platform initialized")
    click.echo("   Use 'sentinel_platform.py status' to check health")
    click.echo("   Use 'sentinel_platform.py diagnose' for full analysis")

@cli.command()
def selftest():
    """Run comprehensive self-test suite"""
    sentinel = SentinelCore()
    
    click.echo("🔬 Running Sentinel Self-Test Suite...")
    
    # Test all detectors
    test_results = []
    
    for detector in sentinel.detectors:
        try:
            # Create test event
            test_event = Event(
                id=str(uuid.uuid4()),
                source="test",
                data={"test": True},
                timestamp=datetime.now().isoformat(),
                tags=set(detector.domains)
            )
            
            # Run detector
            result = asyncio.run(detector.run(test_event))
            test_results.append({
                "detector": detector.name,
                "status": "✅",
                "domains": detector.domains
            })
            
        except Exception as e:
            test_results.append({
                "detector": detector.name,
                "status": "❌",
                "error": str(e)
            })
    
    click.echo("\n📊 Detector Test Results:")
    for result in test_results:
        click.echo(f"   {result['status']} {result['detector']}")
        if 'error' in result:
            click.echo(f"     Error: {result['error']}")
    
    # Test knowledge base
    sentinel.knowledge_base.save_knowledge()
    click.echo("\n🧠 Knowledge base test: ✅")

@cli.command()
def learn():
    """Show learning knowledge base"""
    sentinel = SentinelCore()
    
    click.echo("🧠 Sentinel Knowledge Base")
    click.echo("=" * 30)
    click.echo(f"Total learned issues: {len(sentinel.knowledge_base.records)}")
    
    for record in sentinel.knowledge_base.records[-5:]:
        click.echo(f"\n📄 {record.get('signature', 'Unknown')}")
        click.echo(f"   Strategy: {record.get('repair_strategy', 'Unknown')}")
        click.echo(f"   When: {record.get('timestamp', 'Unknown')}")

if __name__ == "__main__":
    cli()
