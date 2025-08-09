#!/bin/bash
# Trae Agent Startup Script
# This script properly starts the Trae Agent with all dependencies

set -e  # Exit on any error

echo "🚀 Starting Trae Agent..."

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Check if virtual environment exists
if [ ! -d ".venv" ]; then
    echo "❌ Virtual environment not found. Please run setup.sh first"
    exit 1
fi

# Activate virtual environment
source .venv/bin/activate

# Check if the trae_agent package is installed
if ! python -c "import trae_agent" 2>/dev/null; then
    echo "❌ Trae Agent package not found. Installing in development mode..."
    pip install -e .
fi

# Check for missing dependencies
MISSING_DEPS=()

# Check for optional dependencies
python -c "import pyaudio" 2>/dev/null || MISSING_DEPS+=("pyaudio")
python -c "import mcp" 2>/dev/null || MISSING_DEPS+=("mcp")

if [ ${#MISSING_DEPS[@]} -gt 0 ]; then
    echo "⚠️  Missing optional dependencies: ${MISSING_DEPS[*]}"
    echo "   These are optional and the agent will still function"
fi

# Start the agent
echo "✅ Starting Trae Agent..."
echo "   Virtual environment: $(which python)"
echo "   Working directory: $(pwd)"
echo "   Press Ctrl+C to stop the agent"
echo ""

# Run the agent in interactive mode by default
# Use the CLI interface which properly handles interactive mode
if [ $# -eq 0 ]; then
    # No arguments provided - start in interactive mode
    echo "🎯 Starting in interactive mode..."
    python -m trae_agent.cli interactive
else
    # Arguments provided - pass them to the CLI
    echo "🎯 Starting with arguments: $@"
    python -m trae_agent.cli "$@"
fi
