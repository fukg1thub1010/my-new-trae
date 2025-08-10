from ..base import Tool, ToolResult

class SearchEngineTool(Tool):
    def get_name(self) -> str:
        return "search_engine"

    def get_description(self) -> str:
        return "Performs a web search."

    def get_parameters(self) -> dict:
        return {
            "query": {"type": "string", "description": "The search query."}
        }

    async def execute(self, **kwargs) -> ToolResult:
        query = kwargs.get("query")
        return ToolResult(tool_name=self.get_name(), tool_output={"success": True, "results": [f"Mock result for '{query}' 1", f"Mock result for '{query}' 2"]})
