from unittest.mock import patch
import click.testing as ct

from trae_agent.cli import cli


def test_run_executes_bash_when_model_requests(monkeypatch):
    runner = ct.CliRunner()
    # Provide env defaults
    monkeypatch.setenv("POLLINATIONS_API_KEY", "k")
    monkeypatch.setenv("POLLINATIONS_BASE_URL", "https://api.pollinations.ai/v1")

    # Create a minimal config file with default model
    with runner.isolated_filesystem():
        with open("trae_config.yaml", "w") as f:
            f.write(
                "model_providers:\n"
                "  pollinations:\n"
                "    api_key: dummy\n"
                "    base_url: https://api.pollinations.ai/v1\n"
                "models:\n"
                "  pollinations_default:\n"
                "    model_provider: pollinations\n"
                "    model: pollinations/model\n"
            )

        # Mock LLM to request a bash tool call
        with patch("trae_agent.providers.pollinations.PollinationsClient.chat", return_value='{\"tool\":\"bash\",\"args\":{\"command\":\"echo hi\"},\"final\":null}'):
            res = runner.invoke(cli, ["run", "ignored task"])
            assert res.exit_code == 0, res.output
            assert "hi" in res.output
