#!/usr/bin/env python3
"""Simple test for ProgrammaticScreenVisualizer without tree-sitter dependency."""

import asyncio
import sys
import os

# Add current directory to path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

async def main():
    """Test ProgrammaticScreenVisualizer functionality."""
    try:
        from trae_agent.tools.programmatic_screen_visualizer import ProgrammaticScreenVisualizer
        
        print("🔍 Testing ProgrammaticScreenVisualizer...")
        
        # Create tool instance
        tool = ProgrammaticScreenVisualizer()
        print("✅ Tool created successfully")
        
        # Test basic properties
        print(f"✅ Tool name: {tool.get_name()}")
        print(f"✅ Parameters: {[p.name for p in tool.get_parameters()]}")
        
        # Test code analysis functionality
        sample_code = '''
def hello_world():
    print("Hello, World!")

class Calculator:
    def add(self, a, b):
        return a + b

import os
import sys
'''
        
        print("\n📊 Testing code analysis...")
        result = await tool.execute(
            action="analyze_code_structure",
            code_text=sample_code,
            language="python"
        )
        
        if result.success:
            print("✅ Code analysis successful")
            print("✅ Result preview:", result.result[:200] + "...")
        else:
            print("❌ Code analysis failed:", result.error)
        
        # Test window listing (may fail without pywinauto, but should handle gracefully)
        print("\n🪟 Testing window listing...")
        result = await tool.execute(action="list_windows")
        
        if result.success:
            print("✅ Window listing successful")
        else:
            print("⚠️ Window listing failed (expected without pywinauto):", result.error)
        
        # Test UI tree analysis
        print("\n🌳 Testing UI tree analysis...")
        result = await tool.execute(
            action="get_ui_tree",
            window_title="Test",
            depth=2
        )
        
        if result.success:
            print("✅ UI tree analysis successful")
        else:
            print("⚠️ UI tree analysis failed (expected without pywinauto):", result.error)
        
        print("\n🎉 ProgrammaticScreenVisualizer test completed!")
        
    except Exception as e:
        print(f"❌ Error during testing: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    asyncio.run(main())
