#!/bin/bash

# Railway Deployment Helper Script
# This script helps prepare and deploy to Railway

echo "🚂 Railway Deployment Helper"
echo "============================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing git repository..."
    git init
    echo "✅ Git initialized"
    echo ""
fi

# Check if remote is set
if ! git remote | grep -q origin; then
    echo "⚠️  No git remote found"
    echo ""
    read -p "Enter your GitHub repository URL (e.g., https://github.com/username/ar-canada.git): " REPO_URL
    git remote add origin "$REPO_URL"
    echo "✅ Remote added: $REPO_URL"
    echo ""
fi

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "📝 You have uncommitted changes"
    echo ""
    read -p "Commit message: " COMMIT_MSG
    
    git add .
    git commit -m "$COMMIT_MSG"
    echo "✅ Changes committed"
    echo ""
fi

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Pushed to GitHub successfully!"
    echo ""
else
    echo "❌ Push failed. Please check your git configuration."
    exit 1
fi

echo "🎯 Next Steps:"
echo ""
echo "1. Go to https://railway.app"
echo "2. Click 'New Project' → 'Deploy from GitHub repo'"
echo "3. Select your repository"
echo "4. Add environment variables:"
echo "   - NODE_ENV=production"
echo "   - FRONTEND_URL=https://your-netlify-url.app"
echo "   - DATABASE_PATH=/data/discover-canada.db (after adding volume)"
echo ""
echo "5. Add a volume for persistent storage:"
echo "   - Settings → Volumes → Add Volume"
echo "   - Mount path: /data"
echo ""
echo "6. Deploy!"
echo ""
echo "📚 For detailed instructions, see: docs/RAILWAY_DEPLOYMENT.md"
echo ""
echo "🚂 Happy deploying!"
