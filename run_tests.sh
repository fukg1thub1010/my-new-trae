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
