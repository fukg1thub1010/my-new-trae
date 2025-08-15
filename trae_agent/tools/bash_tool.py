import subprocess
from typing import Dict, Any

from .base import Tool


class BashTool(Tool):
    def get_name(self) -> str:
        return "bash"

    def get_description(self) -> str:
        return "Execute shell commands in the current working directory."

    def get_parameters(self) -> Dict[str, Any]:
        return {
            "command": {"type": "string", "description": "The shell command to execute."}
        }

    async def execute(self, **kwargs) -> Dict[str, Any]:
        cmd = kwargs.get("command")
        if not cmd or not isinstance(cmd, str):
            return {"success": False, "output": "Missing 'command' parameter"}
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        output = result.stdout + result.stderr
        return {"success": result.returncode == 0, "output": output}
