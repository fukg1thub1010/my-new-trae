from ..base import Tool
from typing import Dict, Any

class InputTool(Tool):
    def get_name(self) -> str:
        return "input"

    def get_description(self) -> str:
        return "Simulates user keyboard input."

    def get_parameters(self) -> dict:
        return {
            "command": {"type": "string", "description": "The command to execute."}
        }

    async def execute(self, **kwargs) -> Dict[str, Any]:
        command = kwargs.get("command")
        import subprocess
        result = subprocess.run(command, shell=True, capture_output=True, text=True)
        return {"success": result.returncode == 0, "output": result.stdout + result.stderr}
