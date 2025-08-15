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
from .tools.file_edit_tool import FileEditTool
from .tools.json_edit_tool import JSONEditTool
from .tools.sequential_thinking_tool import SequentialThinkingTool
from .tools.task_done_tool import TaskDoneTool
from .providers.pollinations import PollinationsClient
from .providers.pollinations_stream import stream_chat
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
    def __init__(self, config, recorder: TrajectoryRecorder | None = None, max_steps: int = 0):
        self.config = config
        self.recorder = recorder
        self.max_steps = max_steps
        self.tools = {
            "code_execution": CodeExecutionTool(),
            "bash": BashTool(),
            "file_edit": FileEditTool(),
            "json_edit": JSONEditTool(),
            "sequentialthinking": SequentialThinkingTool(),
            "task_done": TaskDoneTool(),
        }
        self.provider = "pollinations"

    def _build_system_prompt(self) -> str:
        return (
            "You are Trae Agent. Decide whether to call a tool and respond ONLY with JSON (no prose).\n"
            "Schema: { \"tool\": \"bash\"|\"code_execution\"|\"file_edit\"|\"json_edit\"|\"sequentialthinking\"|\"task_done\"|null,\n"
            "          \"args\": { ... }, \"final\": \"string or null\" }\n"
            "- bash: args={\"command\":\"...\"}\n"
            "- code_execution: args={\"runtime\":\"terminal\",\"code\":\"...\"}\n"
            "- file_edit: args={\"path\":\"...\",\"content\":\"...\",\"mode\":\"write|append\"}\n"
            "- json_edit: args={\"path\":\"...\",\"key\":\"a.b.c\",\"value\":\"...\"}\n"
            "- sequentialthinking: args={\"steps\":\"...\"}\n"
            "- task_done: args={\"message\":\"...\"}\n"
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

        steps = 0
        last_output = ""
        while True:
            if self.max_steps and steps >= self.max_steps:
                break
            prompt = task if steps == 0 else f"Continue. Last result:\n{last_output}\nReturn next JSON tool call or final."
            reply = client.chat(prompt, model=model, system=system)
            if self.recorder:
                self.recorder.record("llm_response", {"raw": reply, "step": steps})

            tool_name = None
            args = {}
            final = None
            try:
                parsed = json.loads(reply)
                tool_name = parsed.get("tool")
                args = parsed.get("args") or {}
                final = parsed.get("final")
            except Exception:
                final = reply

            if tool_name:
                if tool_name not in self.tools:
                    raise click.ClickException(f"Tool '{tool_name}' not available.")
                if tool_name == "code_execution" and "runtime" not in args:
                    args["runtime"] = "terminal"
                    args["code"] = args.get("code") or task
                if self.recorder:
                    self.recorder.record("tool_call", {"tool": tool_name, "args": args, "step": steps})
                result = await self.tools[tool_name].execute(**args)
                if self.recorder:
                    self.recorder.record("tool_result", {"tool": tool_name, "result": result, "step": steps})
                output = result.get("output", "")
                click.echo(output)
                last_output = output
                steps += 1
                if tool_name == "task_done":
                    break
                continue

            # No tool: print final and stop
            click.echo(final or reply)
            break

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
@click.option("--max-steps", type=int, default=0, help="Max agent steps (0 = unlimited).")
def run(task, file, working_dir, config_file, trajectory_file, max_steps):
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
    agent = Agent(config, recorder=recorder, max_steps=max_steps)
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
@click.option("--stream", is_flag=True, help="Stream the response tokens.")
def llm(prompt, model, base_url, stream):
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
    if stream:
        for chunk in stream_chat(client, prompt, model=final_model):
            click.echo(chunk, nl=False)
        click.echo()
    else:
        out = client.chat(prompt, model=final_model)
        click.echo(out)


if __name__ == '__main__':
    cli()
