import json
import os
from datetime import datetime
from typing import Any, Dict, Optional


class TrajectoryRecorder:
    """
    Minimal JSONL trajectory recorder.

    Each record is a JSON object with:
      - ts: ISO timestamp
      - event: event name
      - payload: arbitrary dict
    """

    def __init__(self, filepath: Optional[str] = None):
        self.filepath = filepath or self._default_path()
        os.makedirs(os.path.dirname(self.filepath), exist_ok=True)

    def _default_path(self) -> str:
        ts = datetime.utcnow().strftime("%Y%m%d_%H%M%S")
        return os.path.join("trae_agent", "trajectories", f"trajectory_{ts}.jsonl")

    def record(self, event: str, payload: Optional[Dict[str, Any]] = None) -> None:
        entry = {
            "ts": datetime.utcnow().isoformat() + "Z",
            "event": event,
            "payload": payload or {},
        }
        with open(self.filepath, "a", encoding="utf-8") as f:
            f.write(json.dumps(entry, ensure_ascii=False) + "\n")

    def path(self) -> str:
        return self.filepath
