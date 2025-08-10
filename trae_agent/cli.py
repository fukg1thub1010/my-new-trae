import asyncio
import os
from unittest.mock import MagicMock

import click

class ConsoleFactory:
    @staticmethod
    def create_console():
        class Console:
            def set_initial_task(self, task):
                pass
            def set_agent_context(self, agent):
                pass
        return Console()

def resolve_config_file(config_file):
    if not config_file:
        return "trae_config.yaml"
    return config_file

from .tools.agent_zero_tools.code_execution_tool import CodeExecutionTool

class Agent:
    def __init__(self, config):
        self.config = config
        self.tools = {
            "code_execution": CodeExecutionTool()
        }

    async def run(self, task):
        tool = self.tools["code_execution"]
        result = await tool.execute(runtime="terminal", code=task)
        click.echo(result.get("output", ""))

import yaml

class Config:
    def __init__(self, config_file):
        with open(config_file, 'r') as f:
            self.config = yaml.safe_load(f)

    def resolve_config_values(self):
        return self

    @property
    def trae_agent(self):
        return self.config.get('agents', {}).get('trae_agent', {})

    @staticmethod
    def create(config_file):
        return Config(config_file)

class TrajectoryRecorder:
    def __init__(self, trajectory_file):
        pass

@click.group()
def cli():
    """Trae Agent CLI"""
    pass

@cli.command()
@click.argument("task", required=False)
@click.option("--file", type=click.Path())
@click.option("--working-dir", type=click.Path())
@click.option("--config-file", type=click.Path())
def run(task, file, working_dir, config_file):
    """Run a task"""
    if not task and not file:
        click.echo("Error: Config file not found.", err=True)
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
            click.echo("Error changing directory", err=True)
            raise click.Abort()

    config_file = resolve_config_file(config_file)
    config = Config.create(config_file)
    recorder = TrajectoryRecorder("trajectory.json")
    console = ConsoleFactory.create_console()
    agent = Agent(config)
    asyncio.run(agent.run(task))

@cli.command()
def interactive():
    """Start an interactive session"""
    click.echo("Starting an interactive session...")

@cli.command()
def show_config():
    """Show the current configuration"""
    click.echo("Showing the current configuration...")

if __name__ == '__main__':
    cli()
