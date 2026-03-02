#!/bin/bash

# GitHub Account Switcher Script
# Usage: ./git-switch-account.sh [personal|novologic|check]

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get current remote URL
CURRENT_URL=$(git remote get-url origin 2>/dev/null)

if [ -z "$CURRENT_URL" ]; then
    echo "Error: Not a git repository or no remote 'origin' found"
    exit 1
fi

# Function to check current account
check_account() {
    echo -e "${BLUE}Current Git Remote Configuration:${NC}"
    git remote -v
    echo ""
    
    if [[ "$CURRENT_URL" == *"github.com-personal"* ]]; then
        echo -e "${GREEN}✓ Currently using: amanvatssharma (personal account)${NC}"
    elif [[ "$CURRENT_URL" == *"github.com:"* ]]; then
        echo -e "${GREEN}✓ Currently using: amanvatssharmanovologic (novologic account)${NC}"
    else
        echo -e "${YELLOW}⚠ Unknown remote format${NC}"
    fi
}

# Function to switch to personal account
switch_to_personal() {
    if [[ "$CURRENT_URL" == *"github.com-personal"* ]]; then
        echo -e "${YELLOW}Already using personal account${NC}"
        check_account
        return
    fi
    
    NEW_URL=$(echo "$CURRENT_URL" | sed "s/git@github.com:/git@github.com-personal:/")
    git remote set-url origin "$NEW_URL"
    
    echo -e "${GREEN}✓ Switched to personal account (amanvatssharma)${NC}"
    echo -e "${BLUE}New remote URL:${NC}"
    git remote -v
}

# Function to switch to novologic account
switch_to_novologic() {
    if [[ "$CURRENT_URL" == *"github.com:"* && "$CURRENT_URL" != *"github.com-personal"* ]]; then
        echo -e "${YELLOW}Already using novologic account${NC}"
        check_account
        return
    fi
    
    NEW_URL=$(echo "$CURRENT_URL" | sed "s/git@github.com-personal:/git@github.com:/")
    git remote set-url origin "$NEW_URL"
    
    echo -e "${GREEN}✓ Switched to novologic account (amanvatssharmanovologic)${NC}"
    echo -e "${BLUE}New remote URL:${NC}"
    git remote -v
}

# Main script logic
case "$1" in
    personal)
        switch_to_personal
        ;;
    novologic)
        switch_to_novologic
        ;;
    check|"")
        check_account
        ;;
    *)
        echo "Usage: $0 [personal|novologic|check]"
        echo ""
        echo "Commands:"
        echo "  personal   - Switch to amanvatssharma (personal account)"
        echo "  novologic - Switch to amanvatssharmanovologic (novologic account)"
        echo "  check     - Check current account (default)"
        exit 1
        ;;
esac

