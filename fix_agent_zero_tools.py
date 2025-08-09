#!/usr/bin/env python3
"""
Script to fix all agent-zero tools to work with Trae Agent's base classes.
"""

import os
import re
from pathlib import Path

def fix_tool_file(file_path):
    """Fix a single tool file to work with the correct Trae Agent base classes."""
    print(f"Fixing {file_path}")

    with open(file_path, 'r') as f:
        content = f.read()

    # Fix imports - ensure correct imports from base
    content = re.sub(
        r'from trae_agent\.tools\.base import Tool, ToolCallArguments, ToolExecResult, ToolParameter',
        'from trae_agent.tools.base import Tool, ToolExecResult, ToolParameter, ToolCallArguments',
        content
    )

    content = re.sub(
        r'from trae_agent\.tools\.base import Tool, ToolExecResult, ToolParameter',
        'from trae_agent.tools.base import Tool, ToolExecResult, ToolParameter, ToolCallArguments',
        content
    )

    # Fix broken import lines with stray commas
    content = re.sub(r'\n\s*,\s*([A-Za-z_][A-Za-z0-9_]*)\s*\n', r'\nfrom typing import \1\n', content)

    # Fix typing imports
    content = re.sub(r'from typing import List', '', content)
    content = re.sub(r'from typing import override', '', content)
    content = re.sub(r'from typing import ([^,\n]*), override', r'from typing import \1', content)
    content = re.sub(r'from typing import ([^,\n]*), List', r'from typing import \1', content)

    # Add proper typing import if needed
    if 'list[ToolParameter]' in content and 'from typing import' not in content:
        content = re.sub(
            r'(from trae_agent\.tools\.base import.*\n)',
            r'\1from typing import List\n',
            content
        )

    # Fix class constructor to match original Trae Agent pattern
    content = re.sub(
        r'def __init__\(self\) -> None:\s*pass',
        'def __init__(self, model_provider: str | None = None) -> None:\n        super().__init__(model_provider)',
        content
    )

    content = re.sub(
        r'def __init__\(self\) -> None:\s*\n\s*(self\.[^\n]+)',
        r'def __init__(self, model_provider: str | None = None) -> None:\n        super().__init__(model_provider)\n        \1',
        content
    )

    # Remove @override decorators
    content = re.sub(r'\s*@override\s*\n', '\n', content)

    # Fix method signatures to match original Trae Agent
    content = re.sub(
        r'def get_parameters\(self\) -> List\[ToolParameter\]:',
        'def get_parameters(self) -> list[ToolParameter]:',
        content
    )

    # Fix execute method signature - keep original ToolCallArguments
    content = re.sub(
        r'async def execute\(self, \*\*kwargs\) -> ToolExecResult:',
        'async def execute(self, arguments: ToolCallArguments) -> ToolExecResult:',
        content
    )

    # Fix argument access
    content = re.sub(r'kwargs\.get\(', 'arguments.get(', content)

    # Fix ToolExecResult calls to match original format (output, error, error_code)
    content = re.sub(
        r'ToolExecResult\(success=True, result=([^)]+)\)',
        r'ToolExecResult(output=\1)',
        content
    )

    content = re.sub(
        r'ToolExecResult\(success=False, error=([^)]+)\)',
        r'ToolExecResult(error=\1, error_code=1)',
        content
    )

    with open(file_path, 'w') as f:
        f.write(content)

    print(f"Fixed {file_path}")

def main():
    """Fix all agent-zero tools."""
    tools_dir = Path("/home/hidden/Desktop/trae-agent/trae-agent/trae-agent/trae_agent/tools/agent_zero_tools")

    for tool_file in tools_dir.glob("*_tool.py"):
        fix_tool_file(tool_file)

if __name__ == "__main__":
    main()
