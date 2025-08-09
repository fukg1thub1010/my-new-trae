#!/bin/bash

# Trae Agent IDE Foundry Unified Environment Setup Script
# This script automates the complete environment setup for Trae Agent

set -e

echo "🚀 Trae Agent IDE Foundry - Unified Environment Setup"
echo "=================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running on Linux
if [[ "$OSTYPE" != "linux-gnu"* ]]; then
    error "This script is designed for Linux systems only"
    exit 1
fi

# Check for required commands
check_command() {
    if ! command -v "$1" &> /dev/null; then
        error "$1 is required but not installed"
        exit 1
    fi
}

log "Checking system requirements..."
check_command python3
check_command pip
check_command curl
check_command git

# Install uv if not present
if ! command -v uv &> /dev/null; then
    log "Installing uv..."
    curl -LsSf https://astral.sh/uv/install.sh | sh
    export PATH="$HOME/.cargo/bin:$PATH"
fi

# Install pipx if not present
if ! command -v pipx &> /dev/null; then
    log "Installing pipx..."
    python3 -m pip install --user pipx
    export PATH="$HOME/.local/bin:$PATH"
fi

# Create project directory structure
PROJECT_ROOT="/home/hidden/Desktop/trae-agent/trae-agent-trae-agent"
log "Setting up project structure in $PROJECT_ROOT..."

# Create necessary directories
mkdir -p "$PROJECT_ROOT/logs"
mkdir -p "$PROJECT_ROOT/data"
mkdir -p "$PROJECT_ROOT/config"
mkdir -p "$PROJECT_ROOT/blueprints"
mkdir -p "$PROJECT_ROOT/agents"
mkdir -p "$PROJECT_ROOT/registry"
mkdir -p "$PROJECT_ROOT/sentinel_memory"
mkdir -p "$PROJECT_ROOT/sentinel_logs"

# Setup Python environment
log "Setting up Python environment..."
cd "$PROJECT_ROOT"

# Create virtual environment if it doesn't exist
if [ ! -d ".venv" ]; then
    log "Creating virtual environment..."
    uv venv .venv
fi

# Activate virtual environment
source .venv/bin/activate

# Install core dependencies
log "Installing core dependencies..."
uv pip install --upgrade pip setuptools wheel

# Install project dependencies
log "Installing project dependencies..."
uv pip install pydantic PyYAML httpx psutil redis sentence-transformers chromadb

# Install protobuf and grpc dependencies
log "Installing protobuf and grpc dependencies..."
uv pip install protobuf==6.31.1 grpcio==1.74.0 grpcio-tools==1.74.0

# Install development tools
log "Installing development tools..."
uv pip install pytest pytest-asyncio pytest-cov black isort flake8 mypy

# Install additional tools
log "Installing additional tools..."
uv pip install beautifulsoup4 requests duckduckgo-search llama-index

# Install system monitoring tools
log "Installing system monitoring tools..."
uv pip install prometheus-client psutil

# Setup pipx tools
log "Setting up pipx tools..."
pipx install black
pipx install isort
pipx install flake8
pipx install mypy

# Initialize registry files
log "Initializing registry files..."

# Create active agents registry
cat > "$PROJECT_ROOT/registry/active_agents.json" << EOF
{
  "agents": {},
  "last_updated": "$(date -Iseconds)"
}
EOF

# Create active teams registry
cat > "$PROJECT_ROOT/registry/active_teams.json" << EOF
{
  "teams": {},
  "last_updated": "$(date -Iseconds)"
}
EOF

# Create custom commands registry
cat > "$PROJECT_ROOT/registry/custom_commands.yaml" << EOF
commands:
  !start_project_hydra:
    description: "Activate knowledge bases and deploy backend engineer"
    action_sequence:
      - tool_name: "KnowledgeForgeTool"
        action: "create_custom_kb"
        arguments:
          kb_id: "project_hydra"
          description: "Main project knowledge base"
      - tool_name: "AgentBlueprintDesigner"
        action: "create_blueprint"
        arguments:
          blueprint_id: "backend_engineer"
          description: "Backend engineer agent"

  !quick_check:
    description: "List active agents and resource usage"
    action_sequence:
      - tool_name: "SituationalAwarenessMatrix"
        action: "list_active_agents"
      - tool_name: "SituationalAwarenessMatrix"
        action: "get_system_resource_usage"

  !dev_setup:
    description: "Complete development environment setup"
    action_sequence:
      - tool_name: "DeepResearchTool"
        action: "conduct_research"
        arguments:
          research_topics: ["development environment", "testing frameworks", "deployment strategies"]
      - tool_name: "KnowledgeForgeTool"
        action: "create_custom_kb"
        arguments:
          kb_id: "dev_environment"
          description: "Development environment knowledge base"

  !cleanup_session:
    description: "Graceful shutdown of all agents"
    action_sequence:
      - tool_name: "TeamFormationStrategist"
        action: "disband_team"
        arguments:
          team_id: "all_teams"

  !project_audit:
    description: "Comprehensive project audit"
    action_sequence:
      - tool_name: "ForensicDiagnosticsTool"
        action: "diagnose_system"
      - tool_name: "PerformanceAuditor"
        action: "audit_performance"

  !team_formation:
    description: "Create full-stack development teams"
    action_sequence:
      - tool_name: "TeamFormationStrategist"
        action: "form_team"
        arguments:
          team_id: "full_stack_team"
          member_instance_ids: ["python_engineer", "frontend_dev", "devops_engineer"]
          team_directive: "Build complete web application"
          communication_protocol: "broadcast"
EOF

# Create environment configuration
log "Creating environment configuration..."
cat > "$PROJECT_ROOT/.env" << EOF
# Trae Agent Environment Configuration
PYTHONPATH="$PROJECT_ROOT"
GHIDRA_MCP_SERVER_URL="http://localhost:8080"
REDIS_URL="redis://localhost:6379"
CHROMA_PERSIST_DIR="$PROJECT_ROOT/data/chroma"
LOG_LEVEL=INFO
EOF

# Create pyproject.toml
log "Creating pyproject.toml..."
cat > "$PROJECT_ROOT/pyproject.toml" << EOF
[build-system]
requires = ["setuptools>=61.0", "wheel"]
build-backend = "setuptools.build_meta"

[project]
name = "trae-agent"
version = "1.0.0"
description = "Advanced AI agent system with IDE Foundry integration"
authors = [
    {name = "Trae Agent Team", email = "team@traeagent.com"}
]
readme = "README.md"
requires-python = ">=3.8"
classifiers = [
    "Development Status :: 4 - Beta",
    "Intended Audience :: Developers",
    "License :: OSI Approved :: MIT License",
    "Programming Language :: Python :: 3",
    "Programming Language :: Python :: 3.8",
    "Programming Language :: Python :: 3.9",
    "Programming Language :: Python :: 3.10",
    "Programming Language :: Python :: 3.11",
    "Programming Language :: Python :: 3.12",
]
dependencies = [
    "pydantic>=2.0.0",
    "PyYAML>=6.0",
    "httpx>=0.25.0",
    "psutil>=5.9.0",
    "redis>=4.5.0",
    "sentence-transformers>=2.2.0",
    "chromadb>=0.4.0",
    "protobuf>=6.31.1",
    "grpcio>=1.74.0",
    "grpcio-tools>=1.74.0",
    "beautifulsoup4>=4.12.0",
    "requests>=2.28.0",
    "duckduckgo-search>=3.8.0",
    "llama-index>=0.9.0",
    "prometheus-client>=0.17.0",
]

[project.optional-dependencies]
dev = [
    "pytest>=7.0.0",
    "pytest-asyncio>=0.21.0",
    "pytest-cov>=4.0.0",
    "black>=22.0.0",
    "isort>=5.12.0",
    "flake8>=5.0.0",
    "mypy>=1.0.0",
]

[tool.setuptools.packages.find]
where = ["."]
include = ["trae_agent*"]

[tool.black]
line-length = 88
target-version = ['py38']

[tool.isort]
profile = "black"
line_length = 88

[tool.mypy]
python_version = "3.8"
warn_return_any = true
warn_unused_configs = true
disallow_untyped_defs = true
EOF

# Create startup script
log "Creating startup script..."
cat > "$PROJECT_ROOT/start_agent.sh" << EOF
#!/bin/bash

# Trae Agent Startup Script
set -e

# Activate virtual environment
source .venv/bin/activate

# Set environment variables
export PYTHONPATH="$PROJECT_ROOT"
export GHIDRA_MCP_SERVER_URL="http://localhost:8080"
export REDIS_URL="redis://localhost:6379"

# Start Redis (if available)
if command -v redis-server &> /dev/null; then
    echo "Starting Redis..."
    redis-server --daemonize yes
fi

# Run validation tests
echo "Running validation tests..."
python3 -m pytest tests/ -v

# Start the agent conductor
echo "Starting Agent Conductor..."
python3 -m trae_agent.ide_foundry.agent_conductor.agent_main
EOF

chmod +x "$PROJECT_ROOT/start_agent.sh"

# Create comprehensive test suite
log "Creating comprehensive test suite..."
mkdir -p "$PROJECT_ROOT/tests"

# Create test runner
log "Creating test runner..."
cat > "$PROJECT_ROOT/run_tests.sh" << EOF
#!/bin/bash

# Trae Agent Test Suite Runner
set -e

source .venv/bin/activate

echo "Running comprehensive test suite..."

# Run unit tests
echo "Running unit tests..."
python3 -m pytest tests/unit/ -v --tb=short

# Run integration tests
echo "Running integration tests..."
python3 -m pytest tests/integration/ -v --tb=short

# Run validation tests
echo "Running validation tests..."
python3 -m pytest tests/validation/ -v --tb=short

# Run Sentinel diagnostics
echo "Running Sentinel diagnostics..."
python3 sentinel_platform.py diagnose

echo "All tests completed successfully!"
EOF

chmod +x "$PROJECT_ROOT/run_tests.sh"

# Final validation
log "Running final validation..."
source .venv/bin/activate

# Test imports
python3 -c "import trae_agent; print('✅ Trae Agent import successful')"
python3 -c "from trae_agent.tools import tool_registry; print(f'✅ {len(tool_registry.list_tools())} tools registered')"
python3 -c "from trae_agent.ide_foundry.agent_conductor.agent_main import AgentConductor; print('✅ AgentConductor import successful')"

log "✅ Environment setup complete!"
echo
log "Next steps:"
echo "1. Run: ./start_agent.sh - to start the agent conductor"
echo "2. Run: ./run_tests.sh - to execute comprehensive test suite"
echo "3. Run: python3 sentinel_platform.py diagnose - for system diagnostics"
echo
echo "🎉 Trae Agent IDE Foundry is ready for production use!"
