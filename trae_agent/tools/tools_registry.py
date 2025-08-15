from importlib import metadata
import logging
from typing import Dict, Type, List
from .base import Tool

logger = logging.getLogger(__name__)

_tool_registry: Dict[str, Type[Tool]] = {}

def discover_tools() -> Dict[str, Type[Tool]]:
    """Discovers tools using the 'eta.tools' entry point."""
    tools = {}
    # Compatibility for Python < 3.10
    all_entry_points = metadata.entry_points()
    if isinstance(all_entry_points, dict):
        # Python 3.9 or older with importlib_metadata
        entry_points = all_entry_points.get("eta.tools", [])
    else:
        # Python 3.10+
        entry_points = all_entry_points.select(group="eta.tools")

    for entry_point in entry_points:
        try:
            tool_class = entry_point.load()
            tools[entry_point.name] = tool_class
        except Exception as e:
            # Handle cases where a plugin fails to load without cluttering stdout
            logger.warning("Error loading tool '%s': %s", entry_point.name, e)
    return tools

def get_tool_registry() -> Dict[str, Type[Tool]]:
    """
    Returns the tool registry, discovering tools on first call.
    This is a singleton pattern.
    """
    global _tool_registry
    if not _tool_registry:
        _tool_registry = discover_tools()
    return _tool_registry

def list_tools() -> List[str]:
    """Returns a list of available tool names."""
    return list(get_tool_registry().keys())

def get_tool(tool_name: str) -> Type[Tool]:
    """
    Retrieves a tool class from the registry by its name.
    Raises KeyError if the tool is not found.
    """
    try:
        return get_tool_registry()[tool_name]
    except KeyError as e:
        raise KeyError(f"Tool '{tool_name}' not found in the registry.") from e