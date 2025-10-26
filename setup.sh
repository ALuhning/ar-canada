#!/bin/bash

# Discover Canada AR - Quick Setup Script
# This script sets up your development environment

echo "🇨🇦 Discover Canada AR - Setup"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed"
    echo "Please install Node.js 18+ from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js $(node --version) detected"

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "❌ npm is not installed"
    exit 1
fi

echo "✅ npm $(npm --version) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed"
echo ""

# Initialize database
echo "🗄️  Initializing database..."
node backend/database.js

if [ $? -ne 0 ]; then
    echo "❌ Failed to initialize database"
    exit 1
fi

echo "✅ Database initialized"
echo ""

# Download Hiro marker for testing
echo "📥 Downloading test AR marker..."
mkdir -p public/markers
cd public/markers
if [ ! -f "hiro.png" ]; then
    curl -O https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png
    if [ $? -eq 0 ]; then
        echo "✅ Test marker downloaded"
    else
        echo "⚠️  Could not download marker, you can add it manually later"
    fi
else
    echo "✅ Test marker already exists"
fi
cd ../..
echo ""

# Create directories for assets
echo "📁 Creating asset directories..."
mkdir -p public/models
mkdir -p public/sounds
echo "✅ Directories created"
echo ""

# Setup complete
echo "================================"
echo "✅ Setup Complete!"
echo "================================"
echo ""
echo "🚀 Quick Start:"
echo ""
echo "  1. Start development server:"
echo "     npm run dev"
echo ""
echo "  2. Open your browser:"
echo "     Frontend: http://localhost:3000"
echo "     Backend:  http://localhost:5000"
echo ""
echo "  3. Test on mobile:"
echo "     - Connect to same WiFi"
echo "     - Visit http://YOUR-IP:3000"
echo "     - Allow camera access"
echo ""
echo "📚 Documentation:"
echo "  - README.md - General overview"
echo "  - docs/DEPLOYMENT.md - Deployment guide"
echo "  - docs/MARKER_CREATION.md - Create AR markers"
echo "  - docs/PRINTABLE_CARDS.md - Print physical cards"
echo ""
echo "🎨 Next Steps:"
echo "  1. Add 3D models to public/models/"
echo "  2. Add sounds to public/sounds/"
echo "  3. Create custom markers (see docs/MARKER_CREATION.md)"
echo "  4. Test AR experiences on mobile device"
echo ""
echo "🇨🇦 Happy coding!"
