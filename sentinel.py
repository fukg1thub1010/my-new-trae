#!/usr/bin/env python3
"""
SystemIntegritySentinel - Standalone recovery tool for trae-agent

A standalone command-line utility for diagnosing and repairing the trae-agent
application when it is unable to start or run its tests.

Usage:
    python sentinel.py diagnose
    python sentinel.py check-syntax
    python sentinel.py fix-imports
    python sentinel.py regenerate-stubs
    python sentinel.py run-tests
"""

import ast
import os
import sys
import json
import click
import subprocess
import traceback
from pathlib import Path
from typing import List, Dict, Any, Tuple


class Sentinel:
    """Main sentinel class for system integrity checks"""
    
    def __init__(self, project_root: Path):
        self.project_root = project_root
        self.trae_agent_path = project_root / "trae_agent"
        self.pyproject_path = project_root / "pyproject.toml"
        
    def validate_syntax(self) -> List[Dict[str, Any]]:
        """Validate syntax of all Python files in trae-agent"""
        errors = []
        
        for py_file in self.trae_agent_path.rglob("*.py"):
            try:
                with open(py_file, 'r', encoding='utf-8') as f:
                    content = f.read()
                ast.parse(content)
            except SyntaxError as e:
                errors.append({
                    'file': str(py_file),
                    'line': e.lineno,
                    'column': e.offset,
                    'message': str(e),
                    'type': 'syntax'
                })
            except IndentationError as e:
                errors.append({
                    'file': str(py_file),
                    'line': e.lineno,
                    'column': e.offset,
                    'message': str(e),
                    'type': 'indentation'
                })
                
        return errors
    
    def check_imports(self) -> Dict[str, Any]:
        """Check if project imports are working"""
        result = subprocess.run(
            [sys.executable, "-m", "pytest", "--collect-only", "-q"],
            cwd=self.project_root,
            capture_output=True,
            text=True
        )
        
        import_errors = []
        for line in result.stderr.split('\n'):
            if 'ModuleNotFoundError' in line:
                import_errors.append(line.strip())
        
        return {
            'has_import_errors': len(import_errors) > 0,
            'import_errors': import_errors,
            'exit_code': result.returncode
        }
    
    def find_proto_files(self) -> List[Path]:
        """Find all .proto files in the project"""
        return list(self.trae_agent_path.rglob("*.proto"))
    
    def regenerate_protobuf_stubs(self) -> List[Dict[str, Any]]:
        """Regenerate protobuf stubs from .proto files"""
        proto_files = self.find_proto_files()
        results = []
        
        for proto_file in proto_files:
            proto_dir = proto_file.parent
            proto_name = proto_file.name
            
            # Build regeneration command
            cmd = [
                sys.executable, "-m", "grpc_tools.protoc",
                f"-I{proto_dir}",
                f"--python_out={proto_dir}",
                f"--grpc_python_out={proto_dir}",
                str(proto_file)
            ]
            
            try:
                result = subprocess.run(
                    cmd,
                    cwd=self.project_root,
                    capture_output=True,
                    text=True,
                    check=True
                )
                results.append({
                    'file': str(proto_file),
                    'status': 'success',
                    'output': result.stdout
                })
            except subprocess.CalledProcessError as e:
                results.append({
                    'file': str(proto_file),
                    'status': 'error',
                    'error': str(e),
                    'stderr': e.stderr
                })
        
        return results
    
    def run_tests(self) -> Dict[str, Any]:
        """Run the test suite"""
        result = subprocess.run(
            [sys.executable, "-m", "pytest", "-v"],
            cwd=self.project_root,
            capture_output=True,
            text=True
        )
        
        return {
            'exit_code': result.returncode,
            'stdout': result.stdout,
            'stderr': result.stderr,
            'passed': result.returncode == 0
        }
    
    def check_environment(self) -> Dict[str, Any]:
        """Check if the environment is properly set up"""
        issues = []
        
        # Check for pyproject.toml
        if not self.pyproject_path.exists():
            issues.append("pyproject.toml not found")
        
        # Check if project is installed in editable mode
        try:
            import trae_agent
            import_path = Path(trae_agent.__file__).parent
            if not str(self.trae_agent_path) in str(import_path):
                issues.append("Project not installed in editable mode")
        except ImportError:
            issues.append("trae_agent package not importable")
        
        return {
            'issues': issues,
            'recommendations': [
                "Run: pip install -e .",
                "Ensure you're in the correct virtual environment"
            ]
        }


@click.group()
@click.pass_context
def cli(ctx):
    """SystemIntegritySentinel - Recovery tool for trae-agent"""
    ctx.ensure_object(dict)
    ctx.obj['sentinel'] = Sentinel(Path.cwd())


@cli.command()
@click.pass_context
def diagnose(ctx):
    """Comprehensive diagnosis of trae-agent issues"""
    sentinel = ctx.obj['sentinel']
    
    click.echo("🔍 Starting System Integrity Sentinel diagnosis...")
    
    # Step 1: Syntax Validation
    click.echo("\n📋 Step 1: Syntax Validation")
    syntax_errors = sentinel.validate_syntax()
    
    if syntax_errors:
        click.echo("❌ Syntax errors found:")
        for error in syntax_errors:
            click.echo(f"  {error['file']}:{error['line']} - {error['message']}")
            
        # Check if these are protobuf stub errors
        proto_errors = [e for e in syntax_errors if '_pb2.py' in e['file']]
        if proto_errors:
            click.echo("\n🔄 Detected protobuf stub corruption. Attempting regeneration...")
            ctx.invoke(regenerate_stubs)
    else:
        click.echo("✅ All Python files have valid syntax")
    
    # Step 2: Environment & Import Validation
    click.echo("\n📋 Step 2: Environment & Import Validation")
    env_check = sentinel.check_environment()
    import_check = sentinel.check_imports()
    
    if env_check['issues']:
        click.echo("❌ Environment issues found:")
        for issue in env_check['issues']:
            click.echo(f"  - {issue}")
        for rec in env_check['recommendations']:
            click.echo(f"  💡 {rec}")
    
    if import_check['has_import_errors']:
        click.echo("❌ Import errors found:")
        for error in import_check['import_errors']:
            click.echo(f"  - {error}")
        click.echo("\n🔄 Attempting to fix imports...")
        ctx.invoke(fix_imports)
    else:
        click.echo("✅ All imports are working")
    
    # Step 3: Test Execution
    click.echo("\n📋 Step 3: Test Execution")
    test_result = sentinel.run_tests()
    
    if test_result['passed']:
        click.echo("✅ All tests are passing!")
    else:
        click.echo("❌ Some tests are failing:")
        click.echo(test_result['stderr'])
    
    click.echo("\n🎯 Diagnosis complete!")


@cli.command()
@click.pass_context
def check_syntax(ctx):
    """Check syntax of all Python files"""
    sentinel = ctx.obj['sentinel']
    
    click.echo("🔍 Checking syntax...")
    errors = sentinel.validate_syntax()
    
    if errors:
        click.echo("❌ Syntax errors found:")
        for error in errors:
            click.echo(f"  {error['file']}:{error['line']} - {error['message']}")
        sys.exit(1)
    else:
        click.echo("✅ All Python files have valid syntax")


@cli.command()
@click.pass_context
def fix_imports(ctx):
    """Fix import and environment issues"""
    sentinel = ctx.obj['sentinel']
    
    click.echo("🔧 Checking environment and imports...")
    env_check = sentinel.check_environment()
    
    if env_check['issues']:
        click.echo("❌ Issues found:")
        for issue in env_check['issues']:
            click.echo(f"  - {issue}")
        
        click.echo("\n💡 To fix these issues:")
        for rec in env_check['recommendations']:
            click.echo(f"  {rec}")
    else:
        click.echo("✅ Environment appears to be correctly configured")


@cli.command()
@click.pass_context
def regenerate_stubs(ctx):
    """Regenerate protobuf stubs from .proto files"""
    sentinel = ctx.obj['sentinel']
    
    click.echo("🔧 Regenerating protobuf stubs...")
    proto_files = sentinel.find_proto_files()
    
    if not proto_files:
        click.echo("⚠️  No .proto files found")
        return
    
    click.echo(f"Found {len(proto_files)} .proto files")
    results = sentinel.regenerate_protobuf_stubs()
    
    for result in results:
        if result['status'] == 'success':
            click.echo(f"✅ Regenerated: {result['file']}")
        else:
            click.echo(f"❌ Failed to regenerate: {result['file']}")
            click.echo(f"   Error: {result['error']}")


@cli.command()
@click.pass_context
def run_tests(ctx):
    """Run the test suite"""
    sentinel = ctx.obj['sentinel']
    
    click.echo("🧪 Running test suite...")
    test_result = sentinel.run_tests()
    
    if test_result['passed']:
        click.echo("✅ All tests passed!")
    else:
        click.echo("❌ Tests failed:")
        click.echo(test_result['stdout'])
        click.echo(test_result['stderr'])
        sys.exit(test_result['exit_code'])


if __name__ == '__main__':
    cli()
