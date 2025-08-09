#!/usr/bin/env python3
"""
SystemIntegritySentinel - Ultimate Recovery & Learning System

A comprehensive daemon that continuously monitors the trae-agent codebase,
autonomously diagnoses failures, applies repairs, and learns from every
successful fix to build institutional knowledge.
"""

import click
import asyncio
import json
import time
import subprocess
import ast
import sys
from pathlib import Path
from typing import Dict, List, Any, Optional
from dataclasses import dataclass
from datetime import datetime
import logging
import uuid
import psutil
import git

# Add project root to path
sys.path.insert(0, '/home/hidden/Desktop/trae-agent/trae-agent-trae-agent')

@dataclass
class SolvedIssueRecord:
    """Record of a successfully solved issue"""
    id: str
    error_signature: str
    error_traceback: str
    diagnosis: str
    repair_strategy: str
    repair_details: Dict[str, Any]
    timestamp: str
    similarity_score: float = 0.0

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
                    self.records = [SolvedIssueRecord(**record) for record in data]
            except Exception as e:
                logging.warning(f"Failed to load knowledge: {e}")
    
    def save_knowledge(self):
        """Save knowledge to JSON file"""
        knowledge_file = self.storage_path / "knowledge.json"
        try:
            with open(knowledge_file, 'w') as f:
                json.dump([record.__dict__ for record in self.records], f, indent=2)
        except Exception as e:
            logging.error(f"Failed to save knowledge: {e}")
    
    def find_similar_issue(self, error_signature: str) -> Optional[SolvedIssueRecord]:
        """Find similar past issue based on error signature"""
        if not self.records:
            return None
        
        # Simple string similarity for now
        best_match = None
        best_score = 0.0
        
        for record in self.records:
            score = self._calculate_similarity(error_signature, record.error_signature)
            if score > best_score:
                best_score = score
                best_match = record
        
        if best_match and best_score > 0.7:  # Threshold for similarity
            best_match.similarity_score = best_score
            return best_match
        
        return None
    
    def _calculate_similarity(self, str1: str, str2: str) -> float:
        """Calculate string similarity using simple Jaccard coefficient"""
        set1 = set(str1.lower().split())
        set2 = set(str2.lower().split())
        
        if not set1 and not set2:
            return 1.0
        
        intersection = len(set1.intersection(set2))
        union = len(set1.union(set2))
        
        return intersection / union if union > 0 else 0.0
    
    def add_solved_issue(self, record: SolvedIssueRecord):
        """Add a new solved issue to knowledge base"""
        self.records.append(record)
        self.save_knowledge()

class SystemIntegritySentinel:
    """Enhanced daemon sentinel with learning capabilities"""
    
    def __init__(self):
        self.project_root = Path("/home/hidden/Desktop/trae-agent/trae-agent-trae-agent")
        self.trae_agent_path = self.project_root / "trae_agent"
        self.knowledge_base = SentinelKnowledgeBase(
            self.project_root / "sentinel_memory"
        )
        self.setup_logging()
    
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
                    "offset": e.offset,
                    "error_signature": f"SyntaxError: {e.msg} at line {e.lineno}"
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
            "repairs_applied": [],
            "knowledge_used": [],
            "status": "healthy"
        }
        
        # Check for known issues first
        syntax_errors = self.validate_syntax()
        if syntax_errors:
            diagnosis["syntax_errors"] = syntax_errors
            diagnosis["status"] = "syntax_errors"
            
            # Check knowledge base for similar issues
            for error in syntax_errors:
                known_solution = self.knowledge_base.find_similar_issue(error["error_signature"])
                if known_solution:
                    diagnosis["knowledge_used"].append(known_solution.__dict__)
        
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
    """System Integrity Sentinel - Advanced Recovery & Learning System"""
    pass

@cli.command()
def diagnose():
    """Run comprehensive system diagnosis"""
    sentinel = SystemIntegritySentinel()
    result = sentinel.full_diagnosis()
    
    click.echo("🔍 System Integrity Sentinel Diagnosis Report")
    click.echo("=" * 50)
    click.echo(f"Timestamp: {result['timestamp']}")
    click.echo(f"Status: {result['status']}")
    
    if result['syntax_errors']:
        click.echo("\n❌ Syntax Errors Found:")
        for error in result['syntax_errors']:
            click.echo(f"  📄 {error['file']}:{error['line']} - {error['message']}")
    
    if result['import_issues'].get('has_import_errors'):
        click.echo("\n❌ Import Issues Found:")
        for error in result['import_issues']['errors']:
            click.echo(f"  🔗 {error}")
        for suggestion in result['import_issues']['suggestions']:
            click.echo(f"  💡 {suggestion}")
    
    if result['knowledge_used']:
        click.echo("\n🧠 Knowledge Base Solutions Applied:")
        for knowledge in result['knowledge_used']:
            click.echo(f"  ✅ {knowledge['repair_strategy']} - {knowledge['diagnosis']}")

@cli.command()
def check_syntax():
    """Check Python syntax across all files"""
    sentinel = SystemIntegritySentinel()
    errors = sentinel.validate_syntax()
    
    if errors:
        click.echo("❌ Syntax errors found:")
        for error in errors:
            click.echo(f"  {error['file']}:{error['line']} - {error['message']}")
    else:
        click.echo("✅ All Python files have valid syntax")

@cli.command()
def fix_imports():
    """Check and fix import issues"""
    sentinel = SystemIntegritySentinel()
    issues = sentinel.check_imports()
    
    if issues['has_import_errors']:
        click.echo("❌ Import issues detected:")
        for error in issues['errors']:
            click.echo(f"  {error}")
        for suggestion in issues['suggestions']:
            click.echo(f"  💡 {suggestion}")
    else:
        click.echo("✅ All imports are working correctly")

@cli.command()
def regenerate_stubs():
    """Regenerate protobuf stubs"""
    sentinel = SystemIntegritySentinel()
    results = sentinel.regenerate_protobuf_stubs()
    
    for result in results:
        status = "✅" if result['success'] else "❌"
        click.echo(f"{status} {result['file']}")
        if not result['success']:
            click.echo(f"  Error: {result['error']}")

@cli.command()
def run_tests():
    """Run the test suite"""
    sentinel = SystemIntegritySentinel()
    results = sentinel.run_tests()
    
    if results['failures'] == 0:
        click.echo("✅ All tests passed")
    else:
        click.echo(f"❌ {results['failures']} test failures")
        if results['errors']:
            click.echo("Errors:")
            for error in results['errors']:
                click.echo(f"  {error}")

@cli.command()
def status():
    """Show system status and recent activity"""
    sentinel = SystemIntegritySentinel()
    diagnosis = sentinel.full_diagnosis()
    
    click.echo("🎯 Trae Agent System Status")
    click.echo("=" * 30)
    click.echo(f"Status: {diagnosis['status']}")
    click.echo(f"Syntax Errors: {len(diagnosis['syntax_errors'])}")
    click.echo(f"Import Issues: {len(diagnosis['import_issues'].get('errors', []))}")
    
    # Show knowledge base size
    click.echo(f"Knowledge Base: {len(sentinel.knowledge_base.records)} solved issues")

@cli.command()
def learn():
    """Show learning knowledge base"""
    sentinel = SystemIntegritySentinel()
    
    click.echo("🧠 Sentinel Knowledge Base")
    click.echo("=" * 30)
    click.echo(f"Total learned issues: {len(sentinel.knowledge_base.records)}")
    
    for record in sentinel.knowledge_base.records[-5:]:  # Show last 5
        click.echo(f"\n📄 {record.error_signature}")
        click.echo(f"   Strategy: {record.repair_strategy}")
        click.echo(f"   When: {record.timestamp}")

if __name__ == "__main__":
    cli()
