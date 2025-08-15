import asyncio
import logging
import os
from pathlib import Path
from typing import Optional
from unittest.mock import MagicMock

import click
import yaml

from .tools.agent_zero_tools.code_execution_tool import CodeExecutionTool
from .providers.pollinations import PollinationsClient


class ConsoleFactory:
    @staticmethod
    def create_console():
        mock_console = MagicMock()
        mock_console.set_initial_task = MagicMock()
        mock_console.set_agent_context = MagicMock()
        return mock_console

def resolve_config_file(config_file: str | None) -> str | None:
    if not config_file:
        default = "trae_config.yaml"
        return default if Path(default).exists() else None
    return config_file

class Agent:
    def __init__(self, config):
        self.config = config
        self.tools = {
            "code_execution": CodeExecutionTool()
        }

    async def run(self, task):
        tool = self.tools["code_execution"]
        result = await tool.execute(runtime="terminal", code=task)
        click.echo(result["output"])

class Config:
    def __init__(self, data: dict | None):
        self.config = data or {}
        # simple env overlay for Pollinations
        mp = self.config.setdefault("model_providers", {})
        poll = mp.setdefault("pollinations", {})
        if "api_key" not in poll and os.environ.get("POLLINATIONS_API_KEY"):
            poll["api_key"] = os.environ.get("POLLINATIONS_API_KEY")
        if "base_url" not in poll and os.environ.get("POLLINATIONS_BASE_URL"):
            poll["base_url"] = os.environ.get("POLLINATIONS_BASE_URL")

    def resolve_config_values(self) -> "Config":
        # Placeholder for env overlay/validation hook
        # In follow-ups, merge env vars into config as needed.
        return self

    @property
    def trae_agent(self):
        return self.config.get("agents", {}).get("trae_agent", {})

    @staticmethod
    def create(config_file: str | None) -> "Config":
        data = {}
        if config_file and Path(config_file).exists():
            try:
                with open(config_file, "r") as f:
                    data = yaml.safe_load(f) or {}
            except Exception as e:
                logging.getLogger(__name__).warning("Failed to load config '%s': %s", config_file, e)
        return Config(data).resolve_config_values()

    def get_provider(self, name: str) -> dict:
        return self.config.get("model_providers", {}).get(name, {})

    def get_default_model(self, name: str) -> Optional[str]:
        # Try to find a model entry referencing this provider
        for model_name, spec in (self.config.get("models") or {}).items():
            if spec.get("model_provider") == name:
                return spec.get("model")
        return None

class TrajectoryRecorder:
    def __init__(self, trajectory_file):
        pass

@click.group()
def cli():
    """Trae Agent CLI"""
    # Basic logging setup for all CLI commands
    logging.basicConfig(level=logging.INFO, format="%(levelname)s %(name)s: %(message)s")

@cli.command()
@click.argument("task", required=False)
@click.option("--file", type=click.Path())
@click.option("--working-dir", type=click.Path())
@click.option("--config-file", type=click.Path())
def run(task, file, working_dir, config_file):
    """Run a task"""

    if not task and not file:
        click.echo("Error: Provide a task or use --file to specify input.", err=True)
        raise click.Abort()

    if task and file:
        click.echo("Error: Cannot use both a task string and the --file argument.", err=True)
        raise click.Abort()

    if file:
        if not os.path.exists(file):
            click.echo(f"Error: File not found: {file}", err=True)
            raise click.Abort()
        with open(file, "r") as f:
            task = f.read()

    if working_dir:
        try:
            os.chdir(working_dir)
        except FileNotFoundError:
            click.echo(f"Error: Working directory not found: {working_dir}", err=True)
            raise click.Abort()

    config_file = resolve_config_file(config_file)
    config = Config.create(config_file)
    agent = Agent(config)
    asyncio.run(agent.run(task))

@cli.command()
def interactive():
    """Start an interactive session"""
    click.echo("Starting an interactive session...")

@cli.command()
def show_config():
    """Show the current configuration"""
    cfg = Config.create(resolve_config_file(None))
    if not cfg.config:
        click.echo("No configuration file found. Using defaults/environment.")
        return
    click.echo(yaml.safe_dump(cfg.config, sort_keys=False))

@cli.command()
@click.argument("prompt", required=True)
@click.option("--model", help="Model name to use (OpenAI-compatible).")
@click.option("--base-url", help="Override base URL (OpenAI-compatible API).")
def llm(prompt, model, base_url):
    """Send a single prompt to the configured LLM provider (Pollinations)."""
    cfg = Config.create(resolve_config_file(None))
    provider_cfg = cfg.get_provider("pollinations")
    api_key = provider_cfg.get("api_key")
    final_base_url = base_url or provider_cfg.get("base_url")
    final_model = model or cfg.get_default_model("pollinations")
    if not final_model:
        click.echo("Error: No model specified. Use --model or define a default model for provider 'pollinations' in config.", err=True)
        raise click.Abort()
    try:
        client = PollinationsClient(api_key=api_key, base_url=final_base_url)
    except ValueError as e:
        click.echo(f"Error: {e}", err=True)
        raise click.Abort()
    out = client.chat(prompt, model=final_model)
    click.echo(out)


if __name__ == '__main__':
    cli()
