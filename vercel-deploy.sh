#!/usr/bin/env bash
set -euo pipefail

action="${1:-deploy}"

# Examples:
#   ./vercel-deploy.sh login
#   ./vercel-deploy.sh link
#   ./vercel-deploy.sh deploy
#   ./vercel-deploy.sh deploy --prod

echo "Running: node vercel-deploy.mjs $action $*"
node vercel-deploy.mjs "$action" ${*:2}

