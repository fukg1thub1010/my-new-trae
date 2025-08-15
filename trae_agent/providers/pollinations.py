import os
import time
from typing import Optional

import httpx


class PollinationsClient:
    """
    Minimal OpenAI-compatible client for Pollinations.ai chat completions.

    Configuration precedence:
    1) Explicit parameters to constructor
    2) Environment variables: POLLINATIONS_API_KEY, POLLINATIONS_BASE_URL
    3) Fallbacks set by caller
    """

    def __init__(self, *, api_key: Optional[str] = None, base_url: Optional[str] = None, timeout: float = 30.0):
        self.api_key = api_key or os.environ.get("POLLINATIONS_API_KEY")
        self.base_url = (base_url or os.environ.get("POLLINATIONS_BASE_URL") or "").rstrip("/")
        self.timeout = timeout
        if not self.api_key:
            raise ValueError("POLLINATIONS_API_KEY not set. Provide via env or pass api_key to PollinationsClient.")
        if not self.base_url:
            # Expect the user to supply an OpenAI-compatible base URL
            # e.g. https://api.pollinations.ai/v1
            raise ValueError("POLLINATIONS_BASE_URL not set. Provide via env or pass base_url to PollinationsClient.")

    def chat(
        self,
        prompt: str,
        *,
        model: str,
        system: Optional[str] = None,
        temperature: float = 0.2,
        max_tokens: int = 1024,
        retries: int = 2,
        retry_backoff: float = 1.5,
    ) -> str:
        url = f"{self.base_url}/chat/completions"
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
        }
        payload = {
            "model": model,
            "messages": [
                {"role": "system", "content": system or "You are a helpful assistant."},
                {"role": "user", "content": prompt},
            ],
            "temperature": temperature,
            "max_tokens": max_tokens,
        }

        last_err: Optional[Exception] = None
        for attempt in range(retries + 1):
            try:
                with httpx.Client(timeout=self.timeout) as client:
                    resp = client.post(url, headers=headers, json=payload)
                    resp.raise_for_status()
                    data = resp.json()
                    choices = data.get("choices") or []
                    if not choices:
                        raise RuntimeError("No choices in response")
                    message = choices[0].get("message") or {}
                    content = message.get("content")
                    if not isinstance(content, str):
                        raise RuntimeError("Invalid response content")
                    return content
            except Exception as e:
                last_err = e
                if attempt < retries:
                    time.sleep(retry_backoff ** attempt)
                else:
                    raise
        # Should never reach
        raise RuntimeError(f"Failed after retries: {last_err}")
