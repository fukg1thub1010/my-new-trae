#!/bin/bash

# MCP Server API Keys Setup Script
# This script helps you organize and set up API keys for all MCP servers

set -e

echo "🔑 MCP Server API Keys Setup Script"
echo "====================================="
echo ""

# Create environment files directory
mkdir -p ~/.mcp_env
cd ~/.mcp_env

# Create main environment file
cat > mcp_env_vars << 'EOF'
# MCP Server Environment Variables
# =================================
# Fill in your API keys below for each service you want to use

# 🔗 Aggregators Category
# ----------------------
# 1mcp_agent - No API key required
# mcpjungle - No API key required
# mcpmcp_server - No API key required

# imagen3_mcp - Google Gemini API Key
export GEMINI_API_KEY=""

# anyquery - No API key required
# metamcp - No API key required
# magg - No API key required

# openai_gpt_image_mcp - OpenAI API Key
export OPENAI_API_KEY=""

# mcp_access_point - No API key required
# mcpx - No API key required
# mcgravity - No API key required
# pluggedin_mcp_proxy - No API key required
# waystation_mcp - No API key required
# open_mcp - No API key required
# mcp_server_templates - No API key required
# mindsdb - No API key required

# 🎨 Art & Culture Category
# ------------------------
# mcp_open_library - No API key required
# manim_mcp_server - No API key required
# blender_mcp - No API key required
# video_editing_mcp - No API key required
# bazi_mcp - No API key required
# discogs_mcp_server - Discogs API Key
export DISCOGS_API_KEY=""
export DISCOGS_API_SECRET=""

# aseprite_mcp - No API key required
# quran_mcp_server - No API key required
# metmuseum_mcp - No API key required
# anilist_mcp - No API key required

# 🧬 Biology, Medicine and Bioinformatics Category
# ------------------------------------------------
# biomcp - No API key required
# biothings_mcp - No API key required
# gget_mcp - No API key required
# opengenes_mcp - No API key required
# synergy_age_mcp - No API key required
# fhir_mcp_server - FHIR Server credentials
export FHIR_SERVER_URL=""
export FHIR_USERNAME=""
export FHIR_PASSWORD=""

# medical_mcp - Medical API keys (varies by provider)
export MEDICAL_API_KEY=""

# 📂 Browser Automation Category
# ------------------------------
# mcp_server_browser - No API key required
# mcp_server_playwright - No API key required

# browserbase_server - Browserbase API credentials
export BROWSERBASE_API_KEY=""
export BROWSERBASE_PROJECT_ID=""
export GEMINI_API_KEY=""

# browsermcp - No API key required
# bilibili_mcp_js - No API key required
# playwright_plus_python_mcp - No API key required
# browser_use_mcp_server - No API key required
# yutu - No API key required

# ☁️ Cloud Platforms Category
# --------------------------
# aws_mcp_server - AWS credentials
export AWS_ACCESS_KEY_ID=""
export AWS_SECRET_ACCESS_KEY=""
export AWS_REGION="us-east-1"

# gcp_mcp_server - Google Cloud credentials
export GOOGLE_APPLICATION_CREDENTIALS=""

# azure_mcp_server - Azure credentials
export AZURE_CLIENT_ID=""
export AZURE_CLIENT_SECRET=""
export AZURE_TENANT_ID=""

# cloudflare_mcp_server - Cloudflare API token
export CLOUDFLARE_API_TOKEN=""

# 👨‍💻 Code Execution Category
# ----------------------------
# codeinterpreter_mcp_server - No API key required
# jupyter_mcp_server - No API key required
# python_mcp_server - No API key required

# 🤖 Coding Agents Category
# ------------------------
# github_copilot_mcp - GitHub token
export GITHUB_TOKEN=""

# cursor_mcp_server - No API key required

# 🖥️ Command Line Category
# ------------------------
# shell_mcp_server - No API key required
# docker_mcp_server - No API key required
# kubernetes_mcp_server - Kubernetes config
export KUBECONFIG=""

# 💬 Communication Category
# ------------------------
# slack_mcp_server - Slack bot token
export SLACK_BOT_TOKEN=""

# discord_mcp_server - Discord bot token
export DISCORD_BOT_TOKEN=""

# 🗄️ Databases Category
# ---------------------
# postgresql_mcp_server - Database URL
export DATABASE_URL=""

# mysql_mcp_server - Database URL
export DATABASE_URL=""

# mongodb_mcp_server - MongoDB URI
export MONGODB_URI=""

# redis_mcp_server - Redis URL
export REDIS_URL=""

# 📊 Data Platforms Category
# -------------------------
# snowflake_mcp_server - Snowflake credentials
export SNOWFLAKE_ACCOUNT=""
export SNOWFLAKE_USER=""
export SNOWFLAKE_PASSWORD=""
export SNOWFLAKE_WAREHOUSE=""

# bigquery_mcp_server - Google Cloud credentials
export GOOGLE_APPLICATION_CREDENTIALS=""

# 🧠 Knowledge & Memory Category
# ------------------------------
# notion_mcp_server - Notion integration token
export NOTION_TOKEN=""

# obsidian_mcp_server - No API key required

# 🗺️ Location Services Category
# ----------------------------
# google_maps_mcp_server - Google Maps API key
export GOOGLE_MAPS_API_KEY=""

# 🔎 Search & Data Extraction Category
# ----------------------------------
# google_search_mcp_server - Google Search API credentials
export GOOGLE_SEARCH_API_KEY=""
export GOOGLE_SEARCH_ENGINE_ID=""

# scrape_mcp_server - No API key required

# 🌐 Social Media Category
# ------------------------
# twitter_mcp_server - Twitter API credentials
export TWITTER_BEARER_TOKEN=""

# reddit_mcp_server - Reddit API credentials
export REDDIT_CLIENT_ID=""
export REDDIT_CLIENT_SECRET=""

# 🔄 Version Control Category
# -------------------------
# git_mcp_server - No API key required

# github_mcp_server - GitHub token
export GITHUB_TOKEN=""

# 🏢 Workplace & Productivity Category
# ------------------------------------
# jira_mcp_server - Jira credentials
export JIRA_URL=""
export JIRA_USERNAME=""
export JIRA_API_TOKEN=""

# trello_mcp_server - Trello credentials
export TRELLO_API_KEY=""
export TRELLO_TOKEN=""

# 🛠️ Other Tools and Integrations Category
# --------------------------------------
# weather_mcp_server - Weather API key
export WEATHER_API_KEY=""

# news_mcp_server - News API key
export NEWS_API_KEY=""

# calendar_mcp_server - Google Calendar API key
export GOOGLE_CALENDAR_API_KEY=""

EOF

echo "✅ Created environment variables template at ~/.mcp_env/mcp_env_vars"
echo ""

# Create API key acquisition guide
cat > api_key_guide.md << 'EOF'
# MCP Server API Keys Acquisition Guide

This guide will help you obtain API keys for all MCP servers.

## 🔗 Aggregators Category

### Google Gemini API Key (for imagen3_mcp)
1. Go to https://makersuite.google.com/app/apikey
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key and set: `export GEMINI_API_KEY="your_key_here"`

### OpenAI API Key (for openai_gpt_image_mcp)
1. Go to https://platform.openai.com/api-keys
2. Sign in with your OpenAI account
3. Click "Create new secret key"
4. Copy the key and set: `export OPENAI_API_KEY="your_key_here"`

## 🎨 Art & Culture Category

### Discogs API Key (for discogs_mcp_server)
1. Go to https://www.discogs.com/settings/developers
2. Sign in with your Discogs account
3. Click "Create an application"
4. Fill in application details
5. Copy Consumer Key and Consumer Secret
6. Set: 
   - `export DISCOGS_API_KEY="your_key_here"`
   - `export DISCOGS_API_SECRET="your_secret_here"`

## 🧬 Biology, Medicine and Bioinformatics Category

### FHIR Server Credentials (for fhir_mcp_server)
1. Choose a FHIR server provider (e.g., Microsoft FHIR Server, IBM FHIR Server)
2. Create an account and obtain credentials
3. Set:
   - `export FHIR_SERVER_URL="your_server_url"`
   - `export FHIR_USERNAME="your_username"`
   - `export FHIR_PASSWORD="your_password"`

## 📂 Browser Automation Category

### Browserbase API Credentials (for browserbase_server)
1. Go to https://browserbase.com/
2. Sign up for an account
3. Go to API settings
4. Copy API Key and Project ID
5. Set:
   - `export BROWSERBASE_API_KEY="your_key_here"`
   - `export BROWSERBASE_PROJECT_ID="your_project_id_here"`

## ☁️ Cloud Platforms Category

### AWS Credentials (for aws_mcp_server)
1. Go to https://aws.amazon.com/
2. Create an AWS account
3. Go to IAM console
4. Create a new user with programmatic access
5. Copy Access Key ID and Secret Access Key
6. Set:
   - `export AWS_ACCESS_KEY_ID="your_key_id_here"`
   - `export AWS_SECRET_ACCESS_KEY="your_secret_key_here"`
   - `export AWS_REGION="us-east-1"`

### Google Cloud Credentials (for gcp_mcp_server)
1. Go to https://console.cloud.google.com/
2. Create a project
3. Go to IAM & Admin → Service Accounts
4. Create a service account
5. Download the JSON key file
6. Set: `export GOOGLE_APPLICATION_CREDENTIALS="/path/to/key.json"`

### Azure Credentials (for azure_mcp_server)
1. Go to https://portal.azure.com/
2. Create an Azure account
3. Go to Azure Active Directory → App registrations
4. Create a new application
5. Copy Client ID and Client Secret
6. Set:
   - `export AZURE_CLIENT_ID="your_client_id_here"`
   - `export AZURE_CLIENT_SECRET="your_client_secret_here"`
   - `export AZURE_TENANT_ID="your_tenant_id_here"`

### Cloudflare API Token (for cloudflare_mcp_server)
1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Sign in to your Cloudflare account
3. Click "Create Token"
4. Choose appropriate permissions
5. Copy the token
6. Set: `export CLOUDFLARE_API_TOKEN="your_token_here"`

## 🤖 Coding Agents Category

### GitHub Token (for github_copilot_mcp, github_mcp_server)
1. Go to https://github.com/settings/tokens
2. Sign in to your GitHub account
3. Click "Generate new token" → "Generate new token (classic)"
4. Select appropriate scopes
5. Copy the token
6. Set: `export GITHUB_TOKEN="your_token_here"`

## 💬 Communication Category

### Slack Bot Token (for slack_mcp_server)
1. Go to https://api.slack.com/apps
2. Create a new Slack app
3. Add OAuth scopes
4. Install the app to your workspace
5. Copy Bot User OAuth Token
6. Set: `export SLACK_BOT_TOKEN="xoxb-your-token-here"`

### Discord Bot Token (for discord_mcp_server)
1. Go to https://discord.com/developers/applications
2. Create a new application
3. Create a bot
4. Copy the bot token
5. Set: `export DISCORD_BOT_TOKEN="your_bot_token_here"`

## 🗄️ Databases Category

### Database URLs (for postgresql_mcp_server, mysql_mcp_server)
1. Set up your database
2. Format: `protocol://username:password@host:port/database`
3. Set: `export DATABASE_URL="your_database_url_here"`

### MongoDB URI (for mongodb_mcp_server)
1. Set up MongoDB Atlas or local MongoDB
2. Format: `mongodb://username:password@host:port/database`
3. Set: `export MONGODB_URI="your_mongodb_uri_here"`

### Redis URL (for redis_mcp_server)
1. Set up Redis
2. Format: `redis://username:password@host:port`
3. Set: `export REDIS_URL="your_redis_url_here"`

## 📊 Data Platforms Category

### Snowflake Credentials (for snowflake_mcp_server)
1. Go to https://snowflake.com/
2. Create an account
3. Get your account identifier, username, password, and warehouse
4. Set:
   - `export SNOWFLAKE_ACCOUNT="your_account"`
   - `export SNOWFLAKE_USER="your_username"`
   - `export SNOWFLAKE_PASSWORD="your_password"`
   - `export SNOWFLAKE_WAREHOUSE="your_warehouse"`

## 🧠 Knowledge & Memory Category

### Notion Integration Token (for notion_mcp_server)
1. Go to https://www.notion.so/my-integrations
2. Create a new integration
3. Copy the Internal Integration Token
4. Share your pages with the integration
5. Set: `export NOTION_TOKEN="secret_your_token_here"`

## 🗺️ Location Services Category

### Google Maps API Key (for google_maps_mcp_server)
1. Go to https://console.cloud.google.com/google/maps-apis/overview
2. Create a project
3. Enable Maps APIs (Maps JavaScript API, Geocoding API, etc.)
4. Create API credentials
5. Copy the API key
6. Set: `export GOOGLE_MAPS_API_KEY="your_key_here"`

## 🔎 Search & Data Extraction Category

### Google Search API Credentials (for google_search_mcp_server)
1. Go to https://programmablesearchengine.google.com/
2. Create a custom search engine
3. Go to https://console.cloud.google.com/apis/api/customsearch.googleapis.com
4. Enable Custom Search API
5. Create API credentials
6. Copy API key and Search Engine ID
7. Set:
   - `export GOOGLE_SEARCH_API_KEY="your_key_here"`
   - `export GOOGLE_SEARCH_ENGINE_ID="your_engine_id_here"`

## 🌐 Social Media Category

### Twitter API Credentials (for twitter_mcp_server)
1. Go to https://developer.twitter.com/
2. Create a developer account
3. Create a new app
4. Copy Bearer Token
5. Set: `export TWITTER_BEARER_TOKEN="your_bearer_token_here"`

### Reddit API Credentials (for reddit_mcp_server)
1. Go to https://www.reddit.com/prefs/apps
2. Create a new application
3. Choose "script" as application type
4. Copy Client ID and Client Secret
5. Set:
   - `export REDDIT_CLIENT_ID="your_client_id_here"`
   - `export REDDIT_CLIENT_SECRET="your_client_secret_here"`

## 🏢 Workplace & Productivity Category

### Jira Credentials (for jira_mcp_server)
1. Go to your Jira instance
2. Create an API token: https://id.atlassian.com/manage-profile/security/api-tokens
3. Set:
   - `export JIRA_URL="your_jira_url"`
   - `export JIRA_USERNAME="your_email"`
   - `export JIRA_API_TOKEN="your_api_token"`

### Trello Credentials (for trello_mcp_server)
1. Go to https://trello.com/app-key
2. Copy your API key
3. Go to https://trello.com/1/authorize?expiration=never&scope=read,write&response_type=token&name=Server%20Token&key=YOUR_API_KEY
4. Copy the token
5. Set:
   - `export TRELLO_API_KEY="your_api_key"`
   - `export TRELLO_TOKEN="your_token"`

## 🛠️ Other Tools and Integrations Category

### Weather API Key (for weather_mcp_server)
1. Go to https://openweathermap.org/api
2. Sign up for an account
3. Get your API key
4. Set: `export WEATHER_API_KEY="your_key_here"`

### News API Key (for news_mcp_server)
1. Go to https://newsapi.org/
2. Sign up for an account
3. Get your API key
4. Set: `export NEWS_API_KEY="your_key_here"`

### Google Calendar API Key (for calendar_mcp_server)
1. Go to https://console.cloud.google.com/
2. Create a project
3. Enable Google Calendar API
4. Create API credentials
5. Copy the API key
6. Set: `export GOOGLE_CALENDAR_API_KEY="your_key_here"`

EOF

echo "✅ Created API key acquisition guide at ~/.mcp_env/api_key_guide.md"
echo ""

# Create setup script
cat > setup_keys.sh << 'EOF'
#!/bin/bash

# Interactive API Key Setup Script
# This script helps you set up API keys interactively

source ~/.mcp_env/mcp_env_vars

echo "🔑 Interactive API Key Setup"
echo "============================="
echo ""

# Function to set environment variable
set_env_var() {
    local var_name="$1"
    local prompt="$2"
    local current_value="${!var_name}"
    
    echo "📝 $prompt"
    if [ ! -z "$current_value" ]; then
        echo "   Current value: $current_value"
        echo "   Press Enter to keep current value or type new value:"
    else
        echo "   Enter value (or press Enter to skip):"
    fi
    
    read -r new_value
    if [ ! -z "$new_value" ]; then
        sed -i "s/export $var_name=\"\"/export $var_name=\"$new_value\"/" ~/.mcp_env/mcp_env_vars
        echo "✅ Updated $var_name"
    else
        echo "⏭️  Skipped $var_name"
    fi
    echo ""
}

# Main setup menu
echo "Which category would you like to set up?"
echo "1. Aggregators"
echo "2. Art & Culture"
echo "3. Biology & Medicine"
echo "4. Browser Automation"
echo "5. Cloud Platforms"
echo "6. Code Execution"
echo "7. Coding Agents"
echo "8. Command Line"
echo "9. Communication"
echo "10. Databases"
echo "11. Data Platforms"
echo "12. Knowledge & Memory"
echo "13. Location Services"
echo "14. Search & Data Extraction"
echo "15. Social Media"
echo "16. Version Control"
echo "17. Workplace & Productivity"
echo "18. Other Tools"
echo "19. All Categories"
echo "20. Exit"
echo ""

read -p "Enter your choice (1-20): " choice

case $choice in
    1)
        set_env_var "GEMINI_API_KEY" "Google Gemini API Key (for imagen3_mcp):"
        set_env_var "OPENAI_API_KEY" "OpenAI API Key (for openai_gpt_image_mcp):"
        ;;
    2)
        set_env_var "DISCOGS_API_KEY" "Discogs API Key:"
        set_env_var "DISCOGS_API_SECRET" "Discogs API Secret:"
        ;;
    3)
        set_env_var "FHIR_SERVER_URL" "FHIR Server URL:"
        set_env_var "FHIR_USERNAME" "FHIR Username:"
        set_env_var "FHIR_PASSWORD" "FHIR Password:"
        set_env_var "MEDICAL_API_KEY" "Medical API Key:"
        ;;
    4)
        set_env_var "BROWSERBASE_API_KEY" "Browserbase API Key:"
        set_env_var "BROWSERBASE_PROJECT_ID" "Browserbase Project ID:"
        ;;
    5)
        set_env_var "AWS_ACCESS_KEY_ID" "AWS Access Key ID:"
        set_env_var "AWS_SECRET_ACCESS_KEY" "AWS Secret Access Key:"
        set_env_var "AWS_REGION" "AWS Region (default: us-east-1):"
        set_env_var "GOOGLE_APPLICATION_CREDENTIALS" "Google Cloud Credentials JSON path:"
        set_env_var "AZURE_CLIENT_ID" "Azure Client ID:"
        set_env_var "AZURE_CLIENT_SECRET" "Azure Client Secret:"
        set_env_var "AZURE_TENANT_ID" "Azure Tenant ID:"
        set_env_var "CLOUDFLARE_API_TOKEN" "Cloudflare API Token:"
        ;;
    6)
        # Code execution servers typically don't require API keys
        echo "✅ Code execution servers typically don't require API keys"
        ;;
    7)
        set_env_var "GITHUB_TOKEN" "GitHub Token:"
        ;;
    8)
        set_env_var "KUBECONFIG" "Kubernetes Config Path:"
        ;;
    9)
        set_env_var "SLACK_BOT_TOKEN" "Slack Bot Token:"
        set_env_var "DISCORD_BOT_TOKEN" "Discord Bot Token:"
        ;;
    10)
        set_env_var "DATABASE_URL" "Database URL (PostgreSQL/MySQL):"
        set_env_var "MONGODB_URI" "MongoDB URI:"
        set_env_var "REDIS_URL" "Redis URL:"
        ;;
    11)
        set_env_var "SNOWFLAKE_ACCOUNT" "Snowflake Account:"
        set_env_var "SNOWFLAKE_USER" "Snowflake User:"
        set_env_var "SNOWFLAKE_PASSWORD" "Snowflake Password:"
        set_env_var "SNOWFLAKE_WAREHOUSE" "Snowflake Warehouse:"
        ;;
    12)
        set_env_var "NOTION_TOKEN" "Notion Integration Token:"
        ;;
    13)
        set_env_var "GOOGLE_MAPS_API_KEY" "Google Maps API Key:"
        ;;
    14)
        set_env_var "GOOGLE_SEARCH_API_KEY" "Google Search API Key:"
        set_env_var "GOOGLE_SEARCH_ENGINE_ID" "Google Search Engine ID:"
        ;;
    15)
        set_env_var "TWITTER_BEARER_TOKEN" "Twitter Bearer Token:"
        set_env_var "REDDIT_CLIENT_ID" "Reddit Client ID:"
        set_env_var "REDDIT_CLIENT_SECRET" "Reddit Client Secret:"
        ;;
    16)
        set_env_var "GITHUB_TOKEN" "GitHub Token:"
        ;;
    17)
        set_env_var "JIRA_URL" "Jira URL:"
        set_env_var "JIRA_USERNAME" "Jira Username:"
        set_env_var "JIRA_API_TOKEN" "Jira API Token:"
        set_env_var "TRELLO_API_KEY" "Trello API Key:"
        set_env_var "TRELLO_TOKEN" "Trello Token:"
        ;;
    18)
        set_env_var "WEATHER_API_KEY" "Weather API Key:"
        set_env_var "NEWS_API_KEY" "News API Key:"
        set_env_var "GOOGLE_CALENDAR_API_KEY" "Google Calendar API Key:"
        ;;
    19)
        echo "⚠️  Setting up all categories - this will take a while..."
        # Run all setup functions
        set_env_var "GEMINI_API_KEY" "Google Gemini API Key (for imagen3_mcp):"
        set_env_var "OPENAI_API_KEY" "OpenAI API Key (for openai_gpt_image_mcp):"
        set_env_var "DISCOGS_API_KEY" "Discogs API Key:"
        set_env_var "DISCOGS_API_SECRET" "Discogs API Secret:"
        set_env_var "FHIR_SERVER_URL" "FHIR Server URL:"
        set_env_var "FHIR_USERNAME" "FHIR Username:"
        set_env_var "FHIR_PASSWORD" "FHIR Password:"
        set_env_var "MEDICAL_API_KEY" "Medical API Key:"
        set_env_var "BROWSERBASE_API_KEY" "Browserbase API Key:"
        set_env_var "BROWSERBASE_PROJECT_ID" "Browserbase Project ID:"
        set_env_var "AWS_ACCESS_KEY_ID" "AWS Access Key ID:"
        set_env_var "AWS_SECRET_ACCESS_KEY" "AWS Secret Access Key:"
        set_env_var "AWS_REGION" "AWS Region (default: us-east-1):"
        set_env_var "GOOGLE_APPLICATION_CREDENTIALS" "Google Cloud Credentials JSON path:"
        set_env_var "AZURE_CLIENT_ID" "Azure Client ID:"
        set_env_var "AZURE_CLIENT_SECRET" "Azure Client Secret:"
        set_env_var "AZURE_TENANT_ID" "Azure Tenant ID:"
        set_env_var "CLOUDFLARE_API_TOKEN" "Cloudflare API Token:"
        set_env_var "GITHUB_TOKEN" "GitHub Token:"
        set_env_var "KUBECONFIG" "Kubernetes Config Path:"
        set_env_var "SLACK_BOT_TOKEN" "Slack Bot Token:"
        set_env_var "DISCORD_BOT_TOKEN" "Discord Bot Token:"
        set_env_var "DATABASE_URL" "Database URL (PostgreSQL/MySQL):"
        set_env_var "MONGODB_URI" "MongoDB URI:"
        set_env_var "REDIS_URL" "Redis URL:"
        set_env_var "SNOWFLAKE_ACCOUNT" "Snowflake Account:"
        set_env_var "SNOWFLAKE_USER" "Snowflake User:"
        set_env_var "SNOWFLAKE_PASSWORD" "Snowflake Password:"
        set_env_var "SNOWFLAKE_WAREHOUSE" "Snowflake Warehouse:"
        set_env_var "NOTION_TOKEN" "Notion Integration Token:"
        set_env_var "GOOGLE_MAPS_API_KEY" "Google Maps API Key:"
        set_env_var "GOOGLE_SEARCH_API_KEY" "Google Search API Key:"
        set_env_var "GOOGLE_SEARCH_ENGINE_ID" "Google Search Engine ID:"
        set_env_var "TWITTER_BEARER_TOKEN" "Twitter Bearer Token:"
        set_env_var "REDDIT_CLIENT_ID" "Reddit Client ID:"
        set_env_var "REDDIT_CLIENT_SECRET" "Reddit Client Secret:"
        set_env_var "JIRA_URL" "Jira URL:"
        set_env_var "JIRA_USERNAME" "Jira Username:"
        set_env_var "JIRA_API_TOKEN" "Jira API Token:"
        set_env_var "TRELLO_API_KEY" "Trello API Key:"
        set_env_var "TRELLO_TOKEN" "Trello Token:"
        set_env_var "WEATHER_API_KEY" "Weather API Key:"
        set_env_var "NEWS_API_KEY" "News API Key:"
        set_env_var "GOOGLE_CALENDAR_API_KEY" "Google Calendar API Key:"
        ;;
    20)
        echo "👋 Exiting setup..."
        exit 0
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac

echo ""
echo "✅ Setup complete! Your environment variables have been updated."
echo "📝 To use these variables, run: source ~/.mcp_env/mcp_env_vars"
echo "🔐 Remember to keep your API keys secure and never share them!"
echo ""

EOF

chmod +x setup_keys.sh

echo "✅ Created interactive setup script at ~/.mcp_env/setup_keys.sh"
echo ""

# Create environment loader script
cat > load_env.sh << 'EOF'
#!/bin/bash

# Load MCP environment variables
# This script loads all environment variables for MCP servers

echo "🔑 Loading MCP environment variables..."
source ~/.mcp_env/mcp_env_vars
echo "✅ Environment variables loaded successfully!"
echo ""
echo "📋 Active environment variables:"
echo "================================"
env | grep -E "(API_KEY|API_SECRET|TOKEN|USERNAME|PASSWORD|URL|URI|REGION|ACCOUNT|CLIENT_ID|CLIENT_SECRET)" | sort
echo ""
echo "🔐 Your MCP servers are now ready to use with their API keys!"
EOF

chmod +x load_env.sh

echo "✅ Created environment loader script at ~/.mcp_env/load_env.sh"
echo ""

# Create update script
cat > update_config.sh << 'EOF'
#!/bin/bash

# Update TRAE config with environment variables
# This script updates your trae_config.yaml with the environment variables

echo "🔄 Updating TRAE configuration with environment variables..."
echo ""

# Create backup
cp trae_config.yaml trae_config.yaml.backup
echo "✅ Created backup: trae_config.yaml.backup"

# Update the configuration file
python3 << 'PYTHON_SCRIPT'
import re
import os

# Read the current config
with open('trae_config.yaml', 'r') as f:
    config = f.read()

# Load environment variables
env_vars = {}
with open(os.path.expanduser('~/.mcp_env/mcp_env_vars'), 'r') as f:
    for line in f:
        if line.startswith('export ') and '=' in line:
            key_value = line[7:].strip().split('=', 1)
            if len(key_value) == 2:
                key = key_value[0]
                value = key_value[1].strip('"')
                env_vars[key] = value

# Update environment variables in config
for key, value in env_vars.items():
    if value:  # Only update if value is not empty
        # Find and replace environment variables in mcp_servers section
        pattern = rf'({key}:\s*"\s*")([^"]*)("\s*)'
        replacement = rf'\1{value}\3'
        config = re.sub(pattern, replacement, config)

# Write updated config
with open('trae_config.yaml', 'w') as f:
    f.write(config)

print("✅ Configuration updated successfully!")
print(f"📝 Updated {len([v for v in env_vars.values() if v])} environment variables")
PYTHON_SCRIPT

echo ""
echo "🎉 Your TRAE configuration has been updated with environment variables!"
echo "📋 You can now use: source ~/.mcp_env/load_env.sh to load your API keys"
EOF

chmod +x update_config.sh

echo "✅ Created configuration update script at ~/.mcp_env/update_config.sh"
echo ""

# Create main setup completion script
cat > complete_setup.sh << 'EOF'
#!/bin/bash

# Complete MCP Setup Script
# This script orchestrates the entire setup process

echo "🚀 Complete MCP Server Setup"
echo "============================"
echo ""

# Check if we're in the right directory
if [ ! -f "trae_config.yaml" ]; then
    echo "❌ Error: trae_config.yaml not found in current directory"
    echo "Please run this script from the directory containing your trae_config.yaml file"
    exit 1
fi

echo "📁 Current directory: $(pwd)"
echo "📄 Found trae_config.yaml"
echo ""

# Create .mcp_env directory if it doesn't exist
mkdir -p ~/.mcp_env
cd ~/.mcp_env

echo "🔧 Setting up environment files..."
echo ""

# Run the setup
echo "1️⃣ Running interactive API key setup..."
echo ""
./setup_keys.sh

echo ""
echo "2️⃣ Loading environment variables..."
echo ""
source ./mcp_env_vars
./load_env.sh

echo ""
echo "3️⃣ Updating TRAE configuration..."
echo ""
cd - > /dev/null
~/.mcp_env/update_config.sh

echo ""
echo "🎉 Setup Complete!"
echo "================"
echo ""
echo "📋 What's been done:"
echo "✅ Created environment variable templates"
echo "✅ Generated API key acquisition guide"
echo "✅ Set up interactive configuration scripts"
echo "✅ Updated your trae_config.yaml file"
echo ""
echo "🔧 Next steps:"
echo "1. Review the API key guide: ~/.mcp_env/api_key_guide.md"
echo "2. Run setup again if needed: ~/.mcp_env/setup_keys.sh"
echo "3. Load environment variables: source ~/.mcp_env/load_env.sh"
echo "4. Start your MCP servers with the new configuration"
echo ""
echo "📚 Documentation:"
echo "- API Key Guide: ~/.mcp_env/api_key_guide.md"
echo "- Environment Variables: ~/.mcp_env/mcp_env_vars"
echo "- Setup Script: ~/.mcp_env/setup_keys.sh"
echo "- Loader Script: ~/.mcp_env/load_env.sh"
echo ""
echo "🔐 Security Reminder:"
echo "Keep your API keys secure and never commit them to version control!"
echo "The ~/.mcp_env directory contains sensitive information."
EOF

chmod +x complete_setup.sh

echo "✅ Created complete setup script at ~/.mcp_env/complete_setup.sh"
echo ""

# Create quick start script
cat > quick_start.sh << 'EOF'
#!/bin/bash

# Quick Start Script for MCP Servers
# This script provides a quick way to get started with MCP servers

echo "🚀 MCP Quick Start"
echo "=================="
echo ""

# Check if environment is set up
if [ ! -f "~/.mcp_env/mcp_env_vars" ]; then
    echo "❌ Environment not set up. Please run: ~/.mcp_env/complete_setup.sh"
    exit 1
fi

# Load environment variables
source ~/.mcp_env/load_env.sh

echo "📋 Available MCP Servers:"
echo "========================"
echo ""

# Count servers by category
echo "🔗 Aggregators: 18 servers"
echo "🎨 Art & Culture: 10 servers"
echo "🧬 Biology/Medicine: 7 servers"
echo "📂 Browser Automation: 8 servers"
echo "☁️ Cloud Platforms: 10 servers"
echo "👨‍💻 Code Execution: 10 servers"
echo "🤖 Coding Agents: 8 servers"
echo "🖥️ Command Line: 9 servers"
echo "💬 Communication: 9 servers"
echo "🗄️ Databases: 9 servers"
echo "📊 Data Platforms: 9 servers"
echo "🧠 Knowledge & Memory: 8 servers"
echo "🗺️ Location Services: 8 servers"
echo "🔎 Search & Data Extraction: 8 servers"
echo "🌐 Social Media: 8 servers"
echo "🔄 Version Control: 8 servers"
echo "🏢 Workplace & Productivity: 8 servers"
echo "🛠️ Other Tools: 8 servers"
echo ""
echo "📊 Total: 200+ MCP servers configured"
echo ""

# Check which API keys are set
echo "🔑 Configured API Keys:"
echo "======================"
configured_keys=0
total_keys=0

# Check common API keys
api_keys=(
    "GEMINI_API_KEY"
    "OPENAI_API_KEY"
    "GITHUB_TOKEN"
    "SLACK_BOT_TOKEN"
    "DISCORD_BOT_TOKEN"
    "NOTION_TOKEN"
    "GOOGLE_MAPS_API_KEY"
    "TWITTER_BEARER_TOKEN"
    "AWS_ACCESS_KEY_ID"
    "BROWSERBASE_API_KEY"
)

for key in "${api_keys[@]}"; do
    total_keys=$((total_keys + 1))
    if [ ! -z "${!key}" ]; then
        echo "✅ $key"
        configured_keys=$((configured_keys + 1))
    else
        echo "❌ $key"
    fi
done

echo ""
echo "📊 API Key Status: $configured_keys/$total_keys configured"
echo ""

if [ $configured_keys -eq 0 ]; then
    echo "⚠️  No API keys configured. Run: ~/.mcp_env/setup_keys.sh"
else
    echo "🎉 Ready to use MCP servers!"
    echo ""
    echo "🔧 To start using:"
    echo "1. Load environment: source ~/.mcp_env/load_env.sh"
    echo "2. Start your TRAE agent"
    echo "3. Enjoy 200+ MCP servers!"
fi
EOF

chmod +x quick_start.sh

echo "✅ Created quick start script at ~/.mcp_env/quick_start.sh"
echo ""

echo "🎉 Setup Complete!"
echo "=================="
echo ""
echo "📁 All files created in: ~/.mcp_env/"
echo ""
echo "📋 Available Scripts:"
echo "===================="
echo "🚀 complete_setup.sh - Complete setup process"
echo "🔧 setup_keys.sh - Interactive API key setup"
echo "📥 load_env.sh - Load environment variables"
echo "🔄 update_config.sh - Update TRAE config"
echo "⚡ quick_start.sh - Quick start guide"
echo ""
echo "📚 Documentation:"
echo "================"
echo "📖 api_key_guide.md - Complete API key acquisition guide"
echo "🔑 mcp_env_vars - Environment variables template"
echo ""
echo "🚀 Next Steps:"
echo "============="
echo "1. Run complete setup: ~/.mcp_env/complete_setup.sh"
echo "2. Follow the interactive prompts to set up API keys"
echo "3. Use the quick start guide: ~/.mcp_env/quick_start.sh"
echo ""
echo "🔐 Security Note:"
echo "================"
echo "The ~/.mcp_env directory contains sensitive API keys."
echo "Never commit this directory to version control!"
echo "Keep your API keys secure and private."
