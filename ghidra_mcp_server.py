#!/usr/bin/env python3
"""
Ghidra MCP Server for Trae Agent Integration
Provides HTTP API endpoints for programmatic Ghidra control
"""

import os
import sys
import json
import asyncio
from pathlib import Path
from typing import Dict, Any, Optional
from http.server import HTTPServer, BaseHTTPRequestHandler
import threading
import urllib.parse

try:
    import pyghidra
    PYGHIDRA_AVAILABLE = True
except ImportError:
    PYGHIDRA_AVAILABLE = False

class GhidraMCPHandler(BaseHTTPRequestHandler):
    """HTTP handler for Ghidra MCP commands."""
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.ghidra_initialized = False
    
    def initialize_ghidra(self):
        """Initialize Ghidra if not already done."""
        if not self.ghidra_initialized and PYGHIDRA_AVAILABLE:
            try:
                if not pyghidra.started():
                    pyghidra.start()
                self.ghidra_initialized = True
                return True
            except Exception as e:
                print(f"Error initializing Ghidra: {e}")
                return False
        return self.ghidra_initialized
    
    def do_POST(self):
        """Handle POST requests."""
        if self.path == '/command':
            self.handle_command()
        else:
            self.send_error(404)
    
    def handle_command(self):
        """Handle Ghidra commands."""
        try:
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))
            
            command = data.get('command')
            payload = data.get('payload', {})
            
            result = self.process_command(command, payload)
            
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(result).encode('utf-8'))
            
        except Exception as e:
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))
    
    def process_command(self, command: str, payload: Dict[str, Any]) -> Dict[str, Any]:
        """Process individual Ghidra commands."""
        
        if not PYGHIDRA_AVAILABLE:
            return {"error": "PyGhidra not available"}
        
        if not self.initialize_ghidra():
            return {"error": "Failed to initialize Ghidra"}
        
        try:
            if command == "analyze_binary":
                return self.analyze_binary(payload)
            elif command == "get_functions":
                return self.get_functions(payload)
            elif command == "get_xrefs":
                return self.get_xrefs(payload)
            elif command == "get_strings":
                return self.get_strings(payload)
            elif command == "get_sections":
                return self.get_sections(payload)
            else:
                return {"error": f"Unknown command: {command}"}
                
        except Exception as e:
            return {"error": str(e)}
    
    def analyze_binary(self, payload: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze a binary file."""
        binary_path = payload.get('binary_path')
        if not binary_path:
            return {"error": "binary_path is required"}
        
        try:
            with pyghidra.open_program(binary_path) as flat_api:
                program = flat_api.getCurrentProgram()
                return {
                    "program_name": program.getName(),
                    "image_base": str(program.getImageBase()),
                    "language": str(program.getLanguageID()),
                    "compiler": str(program.getCompiler()),
                    "status": "success"
                }
        except Exception as e:
            return {"error": str(e)}
    
    def get_functions(self, payload: Dict[str, Any]) -> Dict[str, Any]:
        """Get functions from a binary."""
        binary_path = payload.get('binary_path')
        if not binary_path:
            return {"error": "binary_path is required"}
        
        try:
            with pyghidra.open_program(binary_path) as flat_api:
                program = flat_api.getCurrentProgram()
                functions = []
                
                func_manager = program.getFunctionManager()
                for func in func_manager.getFunctions(True):
                    functions.append({
                        "name": func.getName(),
                        "address": str(func.getEntryPoint()),
                        "size": func.getBody().getNumAddresses(),
                        "signature": str(func.getSignature())
                    })
                
                return {
                    "functions": functions,
                    "count": len(functions),
                    "status": "success"
                }
        except Exception as e:
            return {"error": str(e)}
    
    def get_xrefs(self, payload: Dict[str, Any]) -> Dict[str, Any]:
        """Get cross-references for a function."""
        binary_path = payload.get('binary_path')
        function_name = payload.get('function_name')
        
        if not binary_path or not function_name:
            return {"error": "binary_path and function_name are required"}
        
        try:
            with pyghidra.open_program(binary_path) as flat_api:
                program = flat_api.getCurrentProgram()
                func_manager = program.getFunctionManager()
                
                target_func = None
                for func in func_manager.getFunctions(True):
                    if func.getName() == function_name:
                        target_func = func
                        break
                
                if not target_func:
                    return {"error": f"Function {function_name} not found"}
                
                xrefs = []
                ref_manager = program.getReferenceManager()
                for ref in ref_manager.getReferencesTo(target_func.getEntryPoint()):
                    xrefs.append({
                        "from": str(ref.getFromAddress()),
                        "type": str(ref.getReferenceType()),
                        "status": "success"
                    })
                
                return {
                    "function": function_name,
                    "xrefs": xrefs,
                    "count": len(xrefs),
                    "status": "success"
                }
        except Exception as e:
            return {"error": str(e)}
    
    def get_strings(self, payload: Dict[str, Any]) -> Dict[str, Any]:
        """Get strings from a binary."""
        binary_path = payload.get('binary_path')
        if not binary_path:
            return {"error": "binary_path is required"}
        
        try:
            with pyghidra.open_program(binary_path) as flat_api:
                program = flat_api.getCurrentProgram()
                strings = []
                
                string_listing = program.getListing()
                for string_data in string_listing.getDefinedData(True):
                    if string_data.getDataType().getName() == "string":
                        strings.append({
                            "address": str(string_data.getAddress()),
                            "value": str(string_data.getValue()),
                            "length": len(str(string_data.getValue()))
                        })
                
                return {
                    "strings": strings,
                    "count": len(strings),
                    "status": "success"
                }
        except Exception as e:
            return {"error": str(e)}
    
    def get_sections(self, payload: Dict[str, Any]) -> Dict[str, Any]:
        """Get sections from a binary."""
        binary_path = payload.get('binary_path')
        if not binary_path:
            return {"error": "binary_path is required"}
        
        try:
            with pyghidra.open_program(binary_path) as flat_api:
                program = flat_api.getCurrentProgram()
                sections = []
                
                memory = program.getMemory()
                for block in memory.getBlocks():
                    sections.append({
                        "name": block.getName(),
                        "start": str(block.getStart()),
                        "end": str(block.getEnd()),
                        "size": block.getSize(),
                        "permissions": str(block.getPermissions())
                    })
                
                return {
                    "sections": sections,
                    "count": len(sections),
                    "status": "success"
                }
        except Exception as e:
            return {"error": str(e)}

class GhidraMCPServer:
    """Ghidra MCP Server."""
    
    def __init__(self, host='localhost', port=8080):
        self.host = host
        self.port = port
        self.server = None
    
    def start(self):
        """Start the MCP server."""
        print(f"🚀 Starting Ghidra MCP Server on {self.host}:{self.port}")
        
        self.server = HTTPServer((self.host, self.port), GhidraMCPHandler)
        
        def serve():
            try:
                print(f"✅ Ghidra MCP Server running on http://{self.host}:{self.port}")
                self.server.serve_forever()
            except KeyboardInterrupt:
                print("\n🛑 Server shutting down...")
                self.server.shutdown()
        
        server_thread = threading.Thread(target=serve)
        server_thread.daemon = True
        server_thread.start()
        
        return server_thread
    
    def stop(self):
        """Stop the MCP server."""
        if self.server:
            self.server.shutdown()
            print("✅ MCP server stopped")

def main():
    """Main function to run the MCP server."""
    import argparse
    
    parser = argparse.ArgumentParser(description='Ghidra MCP Server')
    parser.add_argument('--host', default='localhost', help='Host to bind to')
    parser.add_argument('--port', type=int, default=8080, help='Port to bind to')
    
    args = parser.parse_args()
    
    server = GhidraMCPServer(args.host, args.port)
    
    try:
        server.start()
        print(f"🎉 Ghidra MCP Server ready!")
        print(f"   Test with: curl -X POST http://{args.host}:{args.port}/command \\")
        print(f"   -H 'Content-Type: application/json' \\")
        print(f"   -d '{{\"command\":\"analyze_binary\",\"payload\":{{\"binary_path\":\"/bin/ls\"}}}}'")
        
        # Keep server running
        while True:
            try:
                input("Press Ctrl+C to stop...\n")
            except KeyboardInterrupt:
                break
                
    except KeyboardInterrupt:
        print("\n🛑 Shutting down...")
    finally:
        server.stop()

if __name__ == "__main__":
    main()
