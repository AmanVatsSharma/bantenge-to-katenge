#!/bin/bash
# Push this repo to GitHub as a fresh public repo
#
# STEP 1: Create the repo on GitHub first (logged in as amanvatssharma):
#   https://github.com/new?name=bantenge-to-katenge&private=false
#   - Choose "Public"
#   - Do NOT add README, .gitignore, or license (we have them)
#   - Click "Create repository"
#
# STEP 2: Run this script:
#   chmod +x push-to-github.sh && ./push-to-github.sh

set -e
cd "$(dirname "$0")"

REMOTE=$(git remote get-url origin 2>/dev/null | sed -n 's/.*github.com[:/]\([^/]*\)\/.*/\1/p')
REPO=$(git remote get-url origin 2>/dev/null | sed -n 's/.*\/\([^.]*\)\.git/\1/p')

echo "Pushing to origin (main)..."
git push -u origin main

echo ""
echo "Done! Repo is live at: https://github.com/${REMOTE}/${REPO}"
