from typing import Iterator, Optional

import httpx

from .pollinations import PollinationsClient
from .stream_utils import parse_event_stream


def stream_chat(
    client: PollinationsClient,
    prompt: str,
    *,
    model: str,
    system: Optional[str] = None,
    temperature: float = 0.2,
    max_tokens: int = 1024,
    timeout: float | None = None,
) -> Iterator[str]:
    """
    Stream chat completions from Pollinations (OpenAI-compatible).
    """
    url = f"{client.base_url}/chat/completions"
    headers = {
        "Authorization": f"Bearer {client.api_key}",
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
        "stream": True,
    }
    local_timeout = timeout if timeout is not None else client.timeout
    with httpx.Client(timeout=local_timeout) as http:
        with http.stream("POST", url, headers=headers, json=payload) as resp:
            resp.raise_for_status()
            for chunk in parse_event_stream(resp.iter_lines()):
                yield chunk
