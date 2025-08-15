from typing import Dict, Any

from .base import Tool


class SequentialThinkingTool(Tool):
    def get_name(self) -> str:
        return "sequentialthinking"

    def get_description(self) -> str:
        return "Structure thoughts into steps; returns them without side effects."

    def get_parameters(self) -> Dict[str, Any]:
        return {
            "steps": {"type": "string", "description": "Freeform plan or steps."}
        }

    async def execute(self, **kwargs) -> Dict[str, Any]:
        steps = kwargs.get("steps", "")
        return {"success": True, "output": f"Plan:\n{steps}"}
