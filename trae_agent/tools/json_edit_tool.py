import json
from pathlib import Path
from typing import Dict, Any

from .base import Tool


def _set_by_dotted_path(obj: dict, dotted: str, value: Any) -> None:
    parts = dotted.split(".")
    cur = obj
    for k in parts[:-1]:
        if k not in cur or not isinstance(cur[k], dict):
            cur[k] = {}
        cur = cur[k]
    cur[parts[-1]] = value


class JSONEditTool(Tool):
    def get_name(self) -> str:
        return "json_edit"

    def get_description(self) -> str:
        return "Edit a JSON file by setting a value at a dotted path."

    def get_parameters(self) -> Dict[str, Any]:
        return {
            "path": {"type": "string", "description": "JSON file path."},
            "key": {"type": "string", "description": "Dotted path to set (e.g., a.b.c)."},
            "value": {"type": "string", "description": "Value to set (as string)."},
        }

    async def execute(self, **kwargs) -> Dict[str, Any]:
        path = kwargs.get("path")
        key = kwargs.get("key")
        value = kwargs.get("value")
        if not path or not key:
            return {"success": False, "output": "Missing 'path' or 'key' parameter"}
        p = Path(path)
        data = {}
        if p.exists():
            try:
                data = json.loads(p.read_text(encoding="utf-8"))
            except Exception:
                return {"success": False, "output": "Invalid JSON file"}
        _set_by_dotted_path(data, key, value)
        p.parent.mkdir(parents=True, exist_ok=True)
        p.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
        return {"success": True, "output": f"Set {key} in {p}"}
