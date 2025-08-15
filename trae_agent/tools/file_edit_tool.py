from pathlib import Path
from typing import Dict, Any

from .base import Tool


class FileEditTool(Tool):
    def get_name(self) -> str:
        return "file_edit"

    def get_description(self) -> str:
        return "Create or modify a text file. Modes: write (overwrite) or append."

    def get_parameters(self) -> Dict[str, Any]:
        return {
            "path": {"type": "string", "description": "File path to write/append."},
            "content": {"type": "string", "description": "Content to write/append."},
            "mode": {
                "type": "string",
                "description": "Either 'write' (overwrite) or 'append'.",
            },
        }

    async def execute(self, **kwargs) -> Dict[str, Any]:
        path = kwargs.get("path")
        content = kwargs.get("content", "")
        mode = kwargs.get("mode", "write")
        if not path:
            return {"success": False, "output": "Missing 'path' parameter"}
        p = Path(path)
        p.parent.mkdir(parents=True, exist_ok=True)
        if mode == "append":
            old = p.read_text(encoding="utf-8") if p.exists() else ""
            p.write_text(old + content, encoding="utf-8")
        else:
            p.write_text(content, encoding="utf-8")
        return {"success": True, "output": f"Wrote {len(content)} bytes to {p}"}
