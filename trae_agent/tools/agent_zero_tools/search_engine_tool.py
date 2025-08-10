from ..base import Tool

class SearchEngineTool(Tool):
    def get_name(self) -> str:
        return "search_engine"

    def get_description(self) -> str:
        return "Performs a web search."

    def get_parameters(self) -> dict:
        return {
            "query": {"type": "string", "description": "The search query."}
        }

    async def execute(self, **kwargs) -> dict:
        query = kwargs.get("query")
        return {"success": True, "results": [f"Mock result for '{query}' 1", f"Mock result for '{query}' 2"]}
