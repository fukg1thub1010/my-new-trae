import json
import os

import click.testing as ct
from unittest.mock import patch

from trae_agent.cli import cli


def test_trajectory_written(monkeypatch):
    runner = ct.CliRunner()
    monkeypatch.setenv("POLLINATIONS_API_KEY", "k")
    monkeypatch.setenv("POLLINATIONS_BASE_URL", "http://text.pollinations.ai/openai")
    with runner.isolated_filesystem():
        # minimal config with default model
        with open("trae_config.yaml", "w") as f:
            f.write(
                "model_providers:\n"
                "  pollinations:\n"
                "    api_key: dummy\n"
                "    base_url: http://text.pollinations.ai/openai\n"
                "models:\n"
                "  pollinations_default:\n"
                "    model_provider: pollinations\n"
                "    model: deepseek-reasoning\n"
            )
        with patch("trae_agent.providers.pollinations.PollinationsClient.chat", return_value='{"tool":"bash","args":{"command":"echo testtraj"},"final":null}'):
            res = runner.invoke(cli, ["run", "ignored"])
            assert res.exit_code == 0, res.output
            assert "testtraj" in res.output
            # find trajectory path printed
            lines = res.output.strip().splitlines()
            traj_line = next((l for l in lines if l.startswith("[trajectory]")), None)
            assert traj_line, res.output
            traj_path = traj_line.split(" ", 1)[1]
            assert os.path.exists(traj_path)
            # confirm at least start, llm_response, tool_call
            with open(traj_path, "r") as f:
                entries = [json.loads(line) for line in f if line.strip()]
            events = [e["event"] for e in entries]
            for ev in ("start", "llm_response", "tool_call", "tool_result"):
                assert ev in events, events
