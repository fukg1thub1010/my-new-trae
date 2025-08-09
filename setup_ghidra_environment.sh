#!/bin/bash
# Setup script for PyGhidra environment

set -e

echo "🔧 Setting up PyGhidra environment..."

# Check if Ghidra is installed
if [ -z "$GHIDRA_INSTALL_DIR" ]; then
    echo "❌ GHIDRA_INSTALL_DIR not set"
    echo "Please set it to your Ghidra installation directory"
    echo "Example:"
    echo "  export GHIDRA_INSTALL_DIR=/opt/ghidra/ghidra_11.3_PUBLIC"
    echo "Or add to your ~/.bashrc or ~/.zshrc"
    
    # Try to find Ghidra automatically
    echo "🔍 Searching for Ghidra installation..."
    
    # Common Ghidra locations
    locations=(
        "/opt/ghidra/ghidra_11.3_PUBLIC"
        "/opt/ghidra/ghidra_11.2_PUBLIC"
        "/opt/ghidra/ghidra_11.1_PUBLIC"
        "/opt/ghidra/ghidra_11.0_PUBLIC"
        "$HOME/ghidra/ghidra_11.3_PUBLIC"
        "$HOME/ghidra/ghidra_11.2_PUBLIC"
        "$HOME/ghidra/ghidra_11.1_PUBLIC"
        "$HOME/ghidra/ghidra_11.0_PUBLIC"
        "/usr/local/ghidra/ghidra_11.3_PUBLIC"
        "/usr/local/ghidra/ghidra_11.2_PUBLIC"
    )
    
    for location in "${locations[@]}"; do
        if [ -d "$location" ]; then
            echo "✅ Found Ghidra at: $location"
            export GHIDRA_INSTALL_DIR="$location"
            break
        fi
    done
    
    if [ -z "$GHIDRA_INSTALL_DIR" ]; then
        echo "❌ Could not find Ghidra automatically"
        echo "Please install Ghidra or set GHIDRA_INSTALL_DIR manually"
        exit 1
    fi
fi

if [ ! -d "$GHIDRA_INSTALL_DIR" ]; then
    echo "❌ Ghidra directory not found: $GHIDRA_INSTALL_DIR"
    exit 1
fi

echo "✅ Ghidra found at: $GHIDRA_INSTALL_DIR"

# Activate virtual environment
if [ -d ".venv" ]; then
    echo "✅ Virtual environment found"
    source .venv/bin/activate
else
    echo "❌ Virtual environment not found. Run: uv venv"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
uv pip install pyghidra httpx pywinauto

echo "🎉 Environment setup complete!"
echo ""
echo "🔧 Testing Ghidra..."
uv run python3 -c "
import pyghidra
print('Testing PyGhidra...')
try:
    # Test basic functionality
    if not pyghidra.started():
        pyghidra.start()
    print('✅ PyGhidra started successfully')
    
    # Test imports
    import ghidra
    from ghidra.program.flatapi import FlatProgramAPI
    print('✅ Ghidra modules imported successfully')
    
    print('🎉 PyGhidra is ready for use!')
    
except Exception as e:
    print(f'❌ Error: {e}')
    import traceback
    traceback.print_exc()
"

echo ""
echo "🚀 Next steps:"
echo "1. Run: uv run python3 test_programmatic_interaction_fixed.py"
echo "2. Test with a sample binary: uv run python3 -c \"
from trae_agent.tools.programmatic_interaction_tool import ProgrammaticInteractionTool
tool = ProgrammaticInteractionTool()
tool.analyze_binary('/bin/ls')
\""
echo "3. Set MCP server URL: export GHIDRA_MCP_SERVER_URL=http://localhost:8080"
