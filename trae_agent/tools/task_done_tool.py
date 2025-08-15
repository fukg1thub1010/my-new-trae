from typing import Dict, Any

from .base import Tool


class TaskDoneTool(Tool):
    def get_name(self) -> str:
        return "task_done"

    def get_description(self) -> str:
        return "Signal that the task is complete and provide a final message."

    def get_parameters(self) -> Dict[str, Any]:
        return {
            "message": {"type": "string", "description": "Final message."}
        }

    async def execute(self, **kwargs) -> Dict[str, Any]:
        message = kwargs.get("message", "Task complete.")
        return {"success": True, "output": message}
