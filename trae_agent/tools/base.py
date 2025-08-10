from abc import ABC, abstractmethod
from typing import Dict, Any
from dataclasses import dataclass

@dataclass
class ToolCall:
    tool_name: str
    tool_arguments: Dict[str, Any]

@dataclass
class ToolResult:
    tool_name: str
    tool_output: Any

@dataclass
class ToolCallArguments:
    pass

@dataclass
class ToolParameter:
    name: str
    type: str
    description: str

class Tool(ABC):
    @abstractmethod
    def get_name(self) -> str:
        pass

    @abstractmethod
    def get_description(self) -> str:
        pass

    @abstractmethod
    def get_parameters(self) -> Dict[str, Any]:
        pass

    @abstractmethod
    async def execute(self, **kwargs) -> ToolResult:
        pass
