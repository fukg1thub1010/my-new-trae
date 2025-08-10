import subprocess
from ..base import Tool

class CodeExecutionTool(Tool):
    def __init__(self):
        self.sessions = {}

    def get_name(self) -> str:
        return "code_execution"

    def get_description(self) -> str:
        return "Executes code in a specified runtime."

    def get_parameters(self) -> dict:
        return {
            "runtime": {"type": "string", "description": "The runtime to use."},
            "code": {"type": "string", "description": "The code to execute."}
        }

    async def execute(self, **kwargs) -> dict:
        runtime = kwargs.get("runtime")
        code = kwargs.get("code")
        session_id = kwargs.get("session_id", "default")

        if session_id not in self.sessions:
            self.sessions[session_id] = {"history": []}

        if runtime == "python":
            result = subprocess.run(["python", "-c", code], capture_output=True, text=True)
            output = result.stdout + result.stderr
            self.sessions[session_id]["history"].append(output)
            return {"success": result.returncode == 0, "output": output}
        elif runtime == "nodejs":
            result = subprocess.run(["node", "-e", code], capture_output=True, text=True)
            output = result.stdout + result.stderr
            self.sessions[session_id]["history"].append(output)
            return {"success": result.returncode == 0, "output": output}
        elif runtime == "terminal":
            result = subprocess.run(code, shell=True, capture_output=True, text=True)
            output = result.stdout + result.stderr
            self.sessions[session_id]["history"].append(output)
            return {"success": result.returncode == 0, "output": output}
        elif runtime == "output":
            return {"success": True, "output": "\n".join(self.sessions[session_id]["history"])}
        else:
            return {"success": False, "output": f"Unknown runtime: {runtime}"}