#!/usr/bin/env python3
"""
Comprehensive fix script for all Agent Zero tools syntax issues.
"""

import re
from pathlib import Path

def fix_syntax_errors(file_path):
    """Fix syntax errors in a tool file."""
    print(f"Fixing syntax errors in {file_path}")
    
    with open(file_path, 'r') as f:
        content = f.read()
    
    original_content = content
    
    # Fix broken import lines that start with comma
    content = re.sub(r'\n\s*,\s*([A-Za-z_][A-Za-z0-9_,\s]*)\n', r'\nfrom typing import \1\n', content)
    
    # Fix duplicate imports in same line
    content = re.sub(r'ToolCallArguments,\s*ToolCallArguments', 'ToolCallArguments', content)
    content = re.sub(r'from typing import List\nfrom typing import List', 'from typing import List', content)
    
    # Fix multiple typing imports
    lines = content.split('\n')
    fixed_lines = []
    typing_imports = set()
    typing_line_added = False
    
    for line in lines:
        if line.strip().startswith('from typing import'):
            # Extract imports from this line
            imports_part = line.split('from typing import')[1].strip()
            imports = [imp.strip() for imp in imports_part.split(',') if imp.strip()]
            typing_imports.update(imports)
            continue
        elif line.strip().startswith(', ') and not typing_line_added:
            # This is a broken import line
            imports_part = line.strip()[1:].strip()  # Remove leading comma
            imports = [imp.strip() for imp in imports_part.split(',') if imp.strip()]
            typing_imports.update(imports)
            continue
        else:
            # Add consolidated typing import before first non-import line
            if not typing_line_added and typing_imports and not line.strip().startswith('import') and not line.strip().startswith('from') and line.strip():
                if typing_imports:
                    typing_line = f"from typing import {', '.join(sorted(typing_imports))}"
                    fixed_lines.append(typing_line)
                    typing_line_added = True
            fixed_lines.append(line)
    
    # If we never added typing imports, add them at the end of imports
    if typing_imports and not typing_line_added:
        # Find the last import line
        for i, line in enumerate(fixed_lines):
            if line.strip().startswith(('import ', 'from ')) and 'trae_agent.tools.base' in line:
                typing_line = f"from typing import {', '.join(sorted(typing_imports))}"
                fixed_lines.insert(i + 1, typing_line)
                break
    
    content = '\n'.join(fixed_lines)
    
    # Additional cleanup
    content = re.sub(r'\n\n\n+', '\n\n', content)  # Remove excessive newlines
    
    if content != original_content:
        with open(file_path, 'w') as f:
            f.write(content)
        print(f"Fixed syntax errors in {file_path}")
    else:
        print(f"No changes needed for {file_path}")

def main():
    """Fix all Agent Zero tools."""
    tools_dir = Path("/home/hidden/Desktop/trae-agent/trae-agent/trae-agent/trae_agent/tools/agent_zero_tools")
    
    for tool_file in tools_dir.glob("*_tool.py"):
        fix_syntax_errors(tool_file)

if __name__ == "__main__":
    main()
