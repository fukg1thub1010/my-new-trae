from unittest.mock import patch, MagicMock

import click.testing as ct

from trae_agent.cli import cli


def test_cli_llm_command_missing_config(monkeypatch):
    runner = ct.CliRunner()
    # Provide env so client won't error on init
    monkeypatch.setenv("POLLINATIONS_API_KEY", "k")
    monkeypatch.setenv("POLLINATIONS_BASE_URL", "https://api.pollinations.ai/v1")
    with patch("trae_agent.providers.pollinations.PollinationsClient.chat", return_value="ok") as chat:
        res = runner.invoke(cli, ["llm", "Hello", "--model", "pollinations/model"])
        assert res.exit_code == 0, res.output
        assert "ok" in res.output
        chat.assert_called()
