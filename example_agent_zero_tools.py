#!/usr/bin/env python3

"""Example script demonstrating the use of agent-zero tools integrated into Trae Agent."""

import asyncio
from trae_agent.tools.agent_zero_tools.code_execution_tool import CodeExecutionTool
from trae_agent.tools.agent_zero_tools.input_tool import InputTool
from trae_agent.tools.agent_zero_tools.search_engine_tool import SearchEngineTool

async def main():
    """Demonstrate the usage of agent-zero tools."""
    print("=" * 60)
    print("Example usage of agent-zero tools in Trae Agent")
    print("=" * 60)
    
    # Example 1: Using the Search Engine Tool
    print("\n1. Using the Search Engine Tool:")
    search_tool = SearchEngineTool()
    search_result = await search_tool.execute({"query": "Python programming best practices"})
    print(f"Search result: {search_result.output}")
    
    # Example 2: Using the Code Execution Tool
    print("\n2. Using the Code Execution Tool:")
    code_tool = CodeExecutionTool()
    
    # Execute Python code
    python_result = await code_tool.execute({
        "runtime": "python",
        "code": """
# Calculate factorial
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(f"Factorial of 5 is {factorial(5)}")
"""
    })
    print(f"Python execution result: {python_result.output}")
    
    # Execute terminal command
    terminal_result = await code_tool.execute({
        "runtime": "terminal",
        "code": "ls -la"
    })
    print(f"Terminal execution result: {terminal_result.output}")
    
    # Example 3: Using the Input Tool
    print("\n3. Using the Input Tool:")
    input_tool = InputTool()
    input_result = await input_tool.execute({
        "keyboard": "echo 'Hello from the input tool!'"
    })
    print(f"Input tool result: {input_result.output}")
    
    # Example 4: Using sessions with Code Execution Tool
    print("\n4. Using sessions with Code Execution Tool:")
    
    # Execute a command in session 1
    await code_tool.execute({
        "runtime": "terminal",
        "code": "echo 'This is session 1' > session1.txt",
        "session": 1
    })
    
    # Get the output from session 1
    session_result = await code_tool.execute({
        "runtime": "output",
        "session": 1
    })
    print(f"Session 1 output: {session_result.output}")
    
    # Reset session 1
    reset_result = await code_tool.execute({
        "runtime": "reset",
        "session": 1
    })
    print(f"Session 1 reset result: {reset_result.output}")
    
    print("\n" + "=" * 60)
    print("Example completed successfully!")
    print("=" * 60)

if __name__ == "__main__":
    asyncio.run(main())
