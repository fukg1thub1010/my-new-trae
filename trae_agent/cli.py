import asyncio
import logging
import os
from pathlib import Path
from typing import Optional
from unittest.mock import MagicMock

import click
import yaml
import json

from .tools.agent_zero_tools.code_execution_tool import CodeExecutionTool
from .tools.bash_tool import BashTool
from .providers.pollinations import PollinationsClient
from .trajectory import TrajectoryRecorder


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
    def __init__(self, config, recorder: TrajectoryRecorder | None = None):
        self.config = config
        self.recorder = recorder
        self.tools = {
            "code_execution": CodeExecutionTool(),
            "bash": BashTool(),
        }
        self.provider = "pollinations"

    def _build_system_prompt(self) -> str:
        return (
            "You are Trae Agent. When asked to perform actions, decide whether to call a tool.\n"
            "Respond with a single JSON object, no extra text, using this schema:\n"
            '{ "tool": "bash" | "code_execution" | null, "args": { ... }, "final": "string" }\n'
            "- For bash: args = {\"command\": \"...\"}\n"
            "- For code_execution (terminal): args = {\"runtime\": \"terminal\", \"code\": \"...\"}\n"
            "If no tool is needed, set tool to null and provide a helpful 'final' message.\n"
        )

    async def run(self, task: str):
        # Resolve model/base_url from config
        if self.recorder:
            self.recorder.record("start", {"task": task})
        cfg = self.config
        provider_cfg = cfg.get_provider(self.provider) if hasattr(cfg, 'get_provider') else {}
        api_key = provider_cfg.get("api_key")
        base_url = provider_cfg.get("base_url")
        model = cfg.get_default_model(self.provider) if hasattr(cfg, 'get_default_model') else None
        if not model:
            raise click.ClickException(
                "No default model configured for provider 'pollinations'. "
                "Use 'trae llm' to test or add a default model in trae_config.yaml."
            )

        client = PollinationsClient(api_key=api_key, base_url=base_url)
        system = self._build_system_prompt()
        reply = client.chat(task, model=model, system=system)
        if self.recorder:
            self.recorder.record("llm_response", {"raw": reply})

        # Parse potential tool call
        tool_name = None
        args = {}
        final = None
        try:
            parsed = json.loads(reply)
            tool_name = parsed.get("tool")
            args = parsed.get("args") or {}
            final = parsed.get("final")
        except Exception:
            # Not JSON - treat as final answer
            final = reply

        if tool_name:
            if tool_name not in self.tools:
                raise click.ClickException(f"Tool '{tool_name}' not available.")
            if tool_name == "code_execution" and "runtime" not in args:
                # default to terminal if missing; run the task if no code provided
                args["runtime"] = "terminal"
                args["code"] = args.get("code") or task
            if self.recorder:
                self.recorder.record("tool_call", {"tool": tool_name, "args": args})
            result = await self.tools[tool_name].execute(**args)
            if self.recorder:
                self.recorder.record("tool_result", {"tool": tool_name, "result": result})
            click.echo(result.get("output", ""))
            return

        # No tool requested: print final text
        click.echo(final or reply)

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
@click.option("--trajectory-file", type=click.Path(), help="Write trajectory to this file (JSONL).")
def run(task, file, working_dir, config_file, trajectory_file):
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
    recorder = TrajectoryRecorder(trajectory_file) if trajectory_file else TrajectoryRecorder()
    agent = Agent(config, recorder=recorder)
    asyncio.run(agent.run(task))
    click.echo(f"\n[trajectory] {recorder.path()}")

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
