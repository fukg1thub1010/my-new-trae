#!/usr/bin/env python3
"""Test script for ProgrammaticInteractionTool."""

import asyncio
import os
import sys

# Add current directory to path
sys.path.insert(0, '.')

async def test_programmatic_interaction_tool():
    """Test the ProgrammaticInteractionTool functionality."""
    print("🧪 Testing ProgrammaticInteractionTool...")
    
    try:
        from trae_agent.tools.programmatic_interaction_tool import ProgrammaticInteractionTool
        
        # Create tool instance
        tool = ProgrammaticInteractionTool()
        print("✅ ProgrammaticInteractionTool imported successfully")
        
        # Test basic properties
        print(f"✅ Tool name: {tool.get_name()}")
        print(f"✅ Tool description: {tool.get_description()[:100]}...")
        
        # Test parameters
        params = tool.get_parameters()
        print(f"✅ Parameters: {len(params)} parameters defined")
        param_names = [p.name for p in params]
        print(f"   - Available parameters: {param_names}")
        
        # Test MCP server URL
        print(f"✅ MCP Server URL: {tool.mcp_server_url}")
        
        # Test send_mcp_command (mock test)
        print("\n🔍 Testing MCP command structure...")
        result = await tool.execute(
            action="send_mcp_command",
            mcp_command="test_command",
            command_payload={"test": "data"}
        )
        print(f"   - Result: {'✅ Success' if result.success else '❌ Failed'}")
        if not result.success:
            print(f"   - Error: {result.error}")
        
        print("\n🎉 ProgrammaticInteractionTool is ready for use!")
        print("\n📋 Available actions:")
        print("   - click_element: Click on UI elements")
        print("   - set_text: Type text into fields")
        print("   - send_keystrokes: Send keyboard shortcuts")
        print("   - drag_and_drop: Perform drag operations")
        print("   - send_mcp_command: Send commands to Ghidra MCP server")
        
    except Exception as e:
        print(f"❌ Error testing ProgrammaticInteractionTool: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    asyncio.run(test_programmatic_interaction_tool())
