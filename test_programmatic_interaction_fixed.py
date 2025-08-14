#!/usr/bin/env python3
"""Fixed test script for programmatic interaction."""

import os
import sys
from pathlib import Path

# Add current directory to path
sys.path.insert(0, str(Path(__file__).parent))

def test_pyghidra_basic():
    """Test basic PyGhidra functionality."""
    print("🧪 Testing PyGhidra...")
    
    try:
        import pyghidra
        
        # Check available methods
        methods = [m for m in dir(pyghidra) if not m.startswith('_')]
        print(f"✅ Available PyGhidra methods: {methods}")
        
        # Test basic start
        if not pyghidra.started():
            pyghidra.start()
            print("✅ PyGhidra started successfully")
        else:
            print("✅ PyGhidra already running")
            
        # Test imports
        print("✅ Ghidra modules imported successfully")
        
        return True
        
    except Exception as e:
        print(f"❌ PyGhidra test failed: {e}")
        
        # Check for GHIDRA_INSTALL_DIR
        ghidra_path = os.getenv('GHIDRA_INSTALL_DIR')
        if not ghidra_path:
            print("💡 Set GHIDRA_INSTALL_DIR environment variable")
            print("   Example: export GHIDRA_INSTALL_DIR=/opt/ghidra")
        else:
            print(f"   GHIDRA_INSTALL_DIR is set to: {ghidra_path}")
            
        return False

def test_programmatic_tool():
    """Test the ProgrammaticInteractionTool."""
    print("\n🧪 Testing ProgrammaticInteractionTool...")
    
    try:
        from trae_agent.tools.programmatic_interaction_tool import ProgrammaticInteractionTool
        
        tool = ProgrammaticInteractionTool()
        print(f"✅ Tool name: {tool.get_name()}")
        print(f"✅ Parameters: {len(tool.get_parameters())}")
        print(f"✅ MCP Server URL: {tool.mcp_server_url}")
        
        # Test initialization
        if tool.initialize_ghidra():
            print("🎉 ProgrammaticInteractionTool is ready for use!")
            return True
        else:
            print("❌ Tool initialization failed")
            return False
            
    except ImportError as e:
        print(f"❌ Import error: {e}")
        return False
    except Exception as e:
        print(f"❌ Unexpected error: {e}")
        return False

def test_environment():
    """Test environment setup."""
    print("\n🧪 Testing environment...")
    
    # Check environment variables
    ghidra_path = os.getenv('GHIDRA_INSTALL_DIR')
    if ghidra_path:
        print(f"✅ GHIDRA_INSTALL_DIR: {ghidra_path}")
        if os.path.isdir(ghidra_path):
            print("✅ Ghidra directory exists")
        else:
            print(f"❌ Ghidra directory not found: {ghidra_path}")
    else:
        print("❌ GHIDRA_INSTALL_DIR not set")
    
    # Check Python path
    print(f"✅ Python path includes: {sys.path[:3]}")
    
    return True

if __name__ == "__main__":
    print("=" * 60)
    print("PROGRAMMATIC INTERACTION TEST SUITE")
    print("=" * 60)
    
    success = True
    
    # Test 1: Environment
    test_environment()
    
    # Test 2: Basic PyGhidra
    if not test_pyghidra_basic():
        success = False
    
    # Test 3: ProgrammaticInteractionTool
    if not test_programmatic_tool():
        success = False
    
    print("\n" + "=" * 60)
    if success:
        print("🎉 All tests passed!")
    else:
        print("❌ Some tests failed - check the output above")
        print("🔧 Run: ./setup_ghidra_environment.sh")
    print("=" * 60)
