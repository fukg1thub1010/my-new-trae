from abc import ABC, abstractmethod
from typing import Dict, Any

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
    async def execute(self, **kwargs) -> Dict[str, Any]:
        pass
