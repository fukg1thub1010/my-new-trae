from typing import Dict, Type
from .base import Tool

_tool_registry: Dict[str, Type[Tool]] = {}

def register_tool(tool_class: Type[Tool]):
    """
    Register a tool.

    Note: This function instantiates the tool class to get its name.
    """
    tool_name = tool_class().get_name()
    _tool_registry[tool_name] = tool_class

def list_tools():
    return list(_tool_registry.keys())

def get_tool(tool_name: str) -> Tool:
    return _tool_registry[tool_name]()