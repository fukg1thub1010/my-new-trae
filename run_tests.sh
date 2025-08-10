#!/bin/bash

# Trae Agent Test Suite Runner
set -e

export PYTHONPATH=.
source .venv/bin/activate

echo "Running comprehensive test suite..."

# Run all tests
echo "Running all tests..."
python3 -m pytest trae_agent/ -v --tb=short

# Run Sentinel diagnostics
echo "Running Sentinel diagnostics..."
python3 sentinel_platform.py diagnose

echo "All tests completed successfully!"
