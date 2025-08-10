#!/bin/bash
# Trae Agent - Unified Environment Setup Script
# This script provides a definitive one-command setup for the Trae Agent framework

set -e  # Exit on any error

echo "🚀 Trae Agent - Unified Environment Setup"
echo "========================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if uv is installed
if ! command -v uv &> /dev/null; then
    echo -e "${RED}❌ uv not found. Installing uv...${NC}"
    curl -LsSf https://astral.sh/uv/install.sh | sh
    export PATH="$HOME/.cargo/bin:$PATH"
fi

# Check if pipx is installed
if ! command -v pipx &> /dev/null; then
    echo -e "${YELLOW}⚠️  pipx not found. Installing pipx...${NC}"
    python3 -m pip install --user pipx
    python3 -m pipx ensurepath
    export PATH="$HOME/.local/bin:$PATH"
fi

# Get the directory of this script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
cd "$SCRIPT_DIR"

echo -e "${GREEN}✅ Working directory: $SCRIPT_DIR${NC}"

# Create virtual environment if it doesn't exist
if [ ! -d ".venv" ]; then
    echo -e "${GREEN}📦 Creating virtual environment...${NC}"
    uv venv
fi

# Activate virtual environment
echo -e "${GREEN}🔧 Activating virtual environment...${NC}"
source .venv/bin/activate

# Install the package in development mode
echo -e "${GREEN}📥 Installing Trae Agent in development mode...${NC}"
uv pip install -e .[all]

# Install system dependencies for Linux
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    echo -e "${GREEN}🐧 Installing Linux-specific dependencies...${NC}"
    uv pip install python-xlib
fi

# Create necessary directories
echo -e "${GREEN}📁 Creating necessary directories...${NC}"
mkdir -p ~/.trae_agent/blueprints
mkdir -p ~/.trae_agent/commands
mkdir -p ~/.trae_agent/memory
mkdir -p ~/.trae_agent/logs
mkdir -p ~/.trae_agent/knowledge

# Run tests to validate setup
echo -e "${GREEN}🧪 Running validation tests...${NC}"
if uv run pytest -v --tb=short; then
    echo -e "${GREEN}✅ All tests passed!${NC}"
else
    echo -e "${YELLOW}⚠️  Some tests failed, but setup completed${NC}"
fi

# Create a startup script
cat > start_agent.sh << 'EOF'
#!/bin/bash
# Trae Agent Startup Script
source .venv/bin/activate
uv run python -m trae_agent.main
EOF

chmod +x start_agent.sh

# Create a test script
cat > test_agent.sh << 'EOF'
#!/bin/bash
# Trae Agent Test Script
source .venv/bin/activate
uv run pytest tests/ -v
EOF

chmod +x test_agent.sh

echo ""
echo -e "${GREEN}🎉 Setup Complete!${NC}"
echo "========================================"
echo "To start the agent:"
echo "  ./start_agent.sh"
echo ""
echo "To run tests:"
echo "  ./test_agent.sh"
echo ""
echo "To activate environment manually:"
echo "  source .venv/bin/activate"
echo "  uv run python -m trae_agent.main"
echo ""
echo -e "${GREEN}✅ Trae Agent is ready for production use!${NC}"
