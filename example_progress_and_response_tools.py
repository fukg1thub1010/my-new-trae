#!/usr/bin/env python3
# Copyright (c) 2025 ByteDance Ltd. and/or its affiliates
# SPDX-License-Identifier: MIT

"""
Example demonstrating the use of ProgressTool and ResponseTool together.

This example shows how to use the ProgressTool for ongoing autonomous updates
and the ResponseTool for final completion or when user interaction is needed.
"""

import asyncio
from trae_agent.tools.base import ToolCallArguments
from trae_agent.tools.agent_zero_tools.progress_tool import ProgressTool
from trae_agent.tools.agent_zero_tools.response_tool import ResponseTool


async def demonstrate_autonomous_workflow():
    """Demonstrate how ProgressTool and ResponseTool work together."""
    
    progress_tool = ProgressTool()
    response_tool = ResponseTool()
    
    print("=== AUTONOMOUS PROJECT EXECUTION DEMO ===\n")
    
    # Initial progress update
    print("1. Initial progress update:")
    result1 = await progress_tool.execute(ToolCallArguments({
        "status": "Project Setup",
        "current_task": "Setting up project structure",
        "details": "Initializing new Python project with proper directory structure"
    }))
    print(result1.output)
    print("-" * 60)
    
    # Progress after completing setup
    print("2. Progress after setup completion:")
    result2 = await progress_tool.execute(ToolCallArguments({
        "status": "Implementation Phase",
        "completed_tasks": [
            "Set up project structure",
            "Initialize git repository",
            "Create virtual environment"
        ],
        "current_task": "Implementing core functionality",
        "next_steps": [
            "Write unit tests",
            "Create documentation",
            "Set up CI/CD pipeline"
        ],
        "findings": [
            "Project structure follows best practices",
            "Dependencies are properly managed"
        ],
        "estimated_completion": "4-6 hours"
    }))
    print(result2.output)
    print("-" * 60)
    
    # Progress during testing
    print("3. Progress during testing phase:")
    result3 = await progress_tool.execute(ToolCallArguments({
        "status": "Testing Phase",
        "completed_tasks": [
            "Implemented core functionality",
            "Created unit tests",
            "Set up integration tests"
        ],
        "current_task": "Running comprehensive test suite",
        "findings": [
            "All unit tests pass successfully",
            "Integration tests reveal no issues",
            "Performance benchmarks meet requirements"
        ],
        "challenges": [
            "One edge case in error handling needs refinement"
        ],
        "estimated_completion": "30 minutes"
    }))
    print(result3.output)
    print("-" * 60)
    
    # Final completion using ResponseTool
    print("4. Final completion using ResponseTool:")
    result4 = await response_tool.execute(ToolCallArguments({
        "text": """🎉 PROJECT COMPLETED SUCCESSFULLY!

Project Summary:
- Successfully implemented all required functionality
- All tests pass (100% coverage)
- Documentation is complete
- Performance meets or exceeds requirements
- Code follows best practices and is production-ready

The autonomous agent has completed the project without requiring user intervention. All deliverables are ready for deployment."""
    }))
    print(result4.output)


async def demonstrate_problem_scenario():
    """Demonstrate when ResponseTool is used for user interaction."""
    
    progress_tool = ProgressTool()
    response_tool = ResponseTool()
    
    print("\n=== PROBLEM SCENARIO DEMO ===\n")
    
    # Initial progress
    result1 = await progress_tool.execute(ToolCallArguments({
        "status": "Implementation",
        "current_task": "Integrating with external API",
        "details": "Working on API integration"
    }))
    print(result1.output)
    
    # Progress when encountering an issue
    print("\nProgress when encountering an issue:")
    result2 = await response_tool.execute(ToolCallArguments({
        "text": """⚠️ EXTERNAL DEPENDENCY ISSUE IDENTIFIED

Issue: The external API requires authentication credentials that are not available in the current environment.

Required Action: User needs to provide API credentials or configure authentication settings.

Next Steps:
1. User provides API credentials
2. Agent will resume autonomous execution
3. Continue with API integration

The agent cannot proceed autonomously and requires user interaction to resolve this blocker."""
    }))
    print(result2.output)


async def main():
    """Run all demonstrations."""
    print("DEMONSTRATING PROGRESS TOOL AND RESPONSE TOOL USAGE")
    print("=" * 60)
    
    await demonstrate_autonomous_workflow()
    await demonstrate_problem_scenario()
    
    print("\n" + "=" * 60)
    print("SUMMARY:")
    print("- ProgressTool: Use for ongoing autonomous updates")
    print("- ResponseTool: Use for final completion or when user interaction needed")
    print("- Both tools work together to provide clear communication during autonomous execution")


if __name__ == "__main__":
    asyncio.run(main())
