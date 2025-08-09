#!/usr/bin/env python3
"""
Comprehensive test script to validate the complete Agent Zero tools integration.
"""

import asyncio
import sys
from trae_agent.tools import tools_registry

async def test_all_tools():
    """Test all registered tools to ensure they work properly."""
    
    print("🔧 TRAE AGENT - AGENT ZERO TOOLS INTEGRATION TEST")
    print("=" * 60)
    
    # Get all registered tools
    all_tools = tools_registry.list_tools()
    print(f"📊 Total registered tools: {len(all_tools)}")
    print()
    
    # Categorize tools
    agent_zero_tools = [
        'code_execution', 'input', 'search_engine', 'memory_save', 'memory_load',
        'memory_delete', 'memory_forget', 'response', 'progress', 'behaviour_adjustment',
        'document_query', 'logger', 'short_term_memory', 'call_subordinate', 
        'scheduler', 'unknown', 'vision_load', 'browser_agent', 'browser_do', 'browser_open'
    ]
    
    core_tools = ['ProgrammaticInteractionTool', 'CommandInterpreterMapper']
    
    print("🤖 AGENT ZERO TOOLS:")
    for tool_name in agent_zero_tools:
        if tool_name in all_tools:
            try:
                tool = tools_registry.get_tool(tool_name)
                desc = tool.get_description()[:60] + "..." if len(tool.get_description()) > 60 else tool.get_description()
                print(f"  ✅ {tool_name}: {desc}")
            except Exception as e:
                print(f"  ❌ {tool_name}: ERROR - {e}")
        else:
            print(f"  ❌ {tool_name}: NOT REGISTERED")
    
    print()
    print("🔧 CORE TRAE AGENT TOOLS:")
    for tool_name in core_tools:
        if tool_name in all_tools:
            try:
                tool = tools_registry.get_tool(tool_name)
                desc = tool.get_description()[:60] + "..." if len(tool.get_description()) > 60 else tool.get_description()
                print(f"  ✅ {tool_name}: {desc}")
            except Exception as e:
                print(f"  ❌ {tool_name}: ERROR - {e}")
        else:
            print(f"  ❌ {tool_name}: NOT REGISTERED")
    
    print()
    print("🧪 FUNCTIONAL TESTS:")
    
    # Test key tools with sample executions
    test_cases = [
        {
            'tool': 'memory_save',
            'params': {'text': 'Test memory content', 'area': 'test'},
            'description': 'Save content to memory'
        },
        {
            'tool': 'memory_load',
            'params': {'query': 'test'},
            'description': 'Load content from memory'
        },
        {
            'tool': 'progress',
            'params': {
                'status': 'in_progress',
                'completed_tasks': ['Task 1', 'Task 2'],
                'current_task': 'Task 3',
                'next_steps': ['Task 4', 'Task 5'],
                'findings': 'Integration working well',
                'challenges': 'Minor import issues resolved',
                'estimated_completion': '95%'
            },
            'description': 'Report progress update'
        },
        {
            'tool': 'response',
            'params': {'message': 'Integration test completed successfully!'},
            'description': 'Send response message'
        },
        {
            'tool': 'search_engine',
            'params': {'query': 'test search', 'max_results': 3},
            'description': 'Perform web search'
        }
    ]
    
    for test_case in test_cases:
        tool_name = test_case['tool']
        params = test_case['params']
        description = test_case['description']
        
        try:
            tool = tools_registry.get_tool(tool_name)
            result = await tool.execute(**params)
            
            if result.success:
                print(f"  ✅ {tool_name}: {description} - SUCCESS")
                if hasattr(result, 'result') and result.result:
                    preview = str(result.result)[:100] + "..." if len(str(result.result)) > 100 else str(result.result)
                    print(f"     Result: {preview}")
            else:
                print(f"  ⚠️  {tool_name}: {description} - FAILED")
                print(f"     Error: {result.error}")
                
        except Exception as e:
            print(f"  ❌ {tool_name}: {description} - EXCEPTION: {e}")
    
    print()
    print("📈 INTEGRATION SUMMARY:")
    agent_zero_registered = len([t for t in agent_zero_tools if t in all_tools])
    core_registered = len([t for t in core_tools if t in all_tools])
    
    print(f"  • Agent Zero Tools: {agent_zero_registered}/{len(agent_zero_tools)} registered")
    print(f"  • Core Tools: {core_registered}/{len(core_tools)} registered")
    print(f"  • Total Tools: {len(all_tools)} registered")
    
    success_rate = (agent_zero_registered + core_registered) / (len(agent_zero_tools) + len(core_tools)) * 100
    print(f"  • Success Rate: {success_rate:.1f}%")
    
    if success_rate >= 90:
        print("  🎉 INTEGRATION STATUS: EXCELLENT")
    elif success_rate >= 75:
        print("  ✅ INTEGRATION STATUS: GOOD")
    elif success_rate >= 50:
        print("  ⚠️  INTEGRATION STATUS: PARTIAL")
    else:
        print("  ❌ INTEGRATION STATUS: NEEDS WORK")
    
    print()
    print("=" * 60)
    print("✨ Agent Zero tools integration test completed!")
    
    return success_rate >= 75

if __name__ == "__main__":
    try:
        success = asyncio.run(test_all_tools())
        sys.exit(0 if success else 1)
    except Exception as e:
        print(f"❌ Test failed with exception: {e}")
        sys.exit(1)
