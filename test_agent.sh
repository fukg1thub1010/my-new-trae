#!/bin/bash
# Trae Agent Test Script
source .venv/bin/activate
uv run pytest tests/ -v
