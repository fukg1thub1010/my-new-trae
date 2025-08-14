#!/usr/bin/env python3

"""Test script to verify that the agent-zero tools are properly integrated into Trae Agent."""

import asyncio
from trae_agent.tools.agent_zero_tools.code_execution_tool import CodeExecutionTool
from trae_agent.tools.agent_zero_tools.input_tool import InputTool
from trae_agent.tools.agent_zero_tools.search_engine_tool import SearchEngineTool
from trae_agent.tools import tools_registry

async def test_tool_registration():
    """Test that all agent-zero tools are properly registered."""
    print("Testing tool registration...")
    
    # Check that all agent-zero tools are in the registry
    expected_tools = ["code_execution", "input", "search_engine"]
    registered_tools = tools_registry.list_tools()
    for tool_name in expected_tools:
        assert tool_name in registered_tools, f"Tool {tool_name} not found in registry"
        print(f"  ✓ {tool_name} is registered")
    
    print("All tools are properly registered!\n")

async def test_tool_creation():
    """Test that all agent-zero tools can be instantiated."""
    print("Testing tool creation...")
    
    # Test creating each tool
    code_exec_tool = CodeExecutionTool()
    assert code_exec_tool is not None
    print(f"  ✓ {code_exec_tool.get_name()} created successfully")
    
    input_tool = InputTool()
    assert input_tool is not None
    print(f"  ✓ {input_tool.get_name()} created successfully")
    
    search_tool = SearchEngineTool()
    assert search_tool is not None
    print(f"  ✓ {search_tool.get_name()} created successfully")
    
    print("All tools can be created successfully!\n")

async def test_tool_functionality():
    """Test basic functionality of the agent-zero tools."""
    print("Testing tool functionality...")
    
    # Test search engine tool
    search_tool = SearchEngineTool()
    search_result = await search_tool.execute(query="test query")
    assert search_result is not None
    print(f"  ✓ {search_tool.get_name()} works correctly")
    
    # Test code execution tool with Python
    code_exec_tool = CodeExecutionTool()
    python_result = await code_exec_tool.execute(
        runtime="python",
        code="print('Hello from Python')"
    )
    assert python_result is not None
    assert "Hello from Python" in python_result["output"]
    print(f"  ✓ {code_exec_tool.get_name()} Python execution works correctly")
    
    # Test code execution tool with terminal
    terminal_result = await code_exec_tool.execute(
        runtime="terminal",
        code="echo 'Hello from terminal'"
    )
    assert terminal_result is not None
    assert "Hello from terminal" in terminal_result["output"]
    print(f"  ✓ {code_exec_tool.get_name()} terminal execution works correctly")
    
    # Test session functionality
    session_result = await code_exec_tool.execute(runtime="output")
    assert session_result is not None
    print(f"  ✓ {code_exec_tool.get_name()} session functionality works correctly")
    
    # Test input tool
    input_tool = InputTool()
    input_result = await input_tool.execute(
        command="echo 'Hello from input tool'"
    )
    assert input_result is not None
    assert "Hello from input tool" in input_result["output"]
    print(f"  ✓ {input_tool.get_name()} works correctly")
    
    print("All tools function correctly!\n")

async def main():
    """Main test function."""
    print("=" * 60)
    print("Testing agent-zero tools integration with Trae Agent")
    print("=" * 60)
    
    try:
        await test_tool_registration()
        await test_tool_creation()
        await test_tool_functionality()
        
        print("=" * 60)
        print("All tests passed! The agent-zero tools are successfully integrated into Trae Agent.")
        print("=" * 60)
    except Exception as e:
        print(f"Error during testing: {e}")
        raise

if __name__ == "__main__":
    asyncio.run(main())
