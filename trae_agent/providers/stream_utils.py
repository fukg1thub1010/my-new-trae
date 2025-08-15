import json
from typing import Iterator

def parse_event_stream(lines: Iterator[bytes]) -> Iterator[str]:
    """
    Parse OpenAI-compatible event stream yielding content deltas.
    Expects bytes lines beginning with b'data: ' or heartbeat newlines.
    """
    for raw in lines:
        line = raw.strip()
        if not line:
            continue
        if not line.startswith(b"data:"):
            continue
        payload = line[5:].strip()
        if payload == b"[DONE]":
            break
        try:
            obj = json.loads(payload.decode("utf-8"))
            choices = obj.get("choices") or []
            if choices:
                delta = choices[0].get("delta") or {}
                content = delta.get("content")
                if isinstance(content, str):
                    yield content
        except Exception:
            # ignore malformed chunks
            continue
