from abc import ABC, abstractmethod
from typing import Optional


class LLMClient(ABC):
    @abstractmethod
    def chat(
        self,
        prompt: str,
        *,
        model: str,
        system: Optional[str] = None,
        temperature: float = 0.2,
        max_tokens: int = 1024,
    ) -> str:
        """Send a single-turn chat request and return assistant text."""
        raise NotImplementedError
