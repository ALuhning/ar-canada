# 🇨🇦 Discover Canada in AR - Getting Started

Welcome! This guide will have you up and running in minutes.

## ⚡ Quick Start (3 Steps)

### 1. Install Dependencies
```bash
npm install
```

### 2. Initialize Database
```bash
node backend/database.js
```

### 3. Start Development Server
```bash
npm run dev
```

That's it! 🎉

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📱 Testing on Mobile

Your AR experience needs a real mobile device with a camera.

### Method 1: Local Network (Recommended)

1. **Find your local IP address**
   ```bash
   # Linux/Mac
   ifconfig | grep "inet " | grep -v 127.0.0.1
   
   # Windows
   ipconfig
   ```

2. **On your phone, visit:**
   ```
   http://YOUR-IP-ADDRESS:3000
   ```
   Example: `http://192.168.1.100:3000`

3. **Allow camera access** when prompted

### Method 2: ngrok (For External Access)

```bash
# Install ngrok
npm install -g ngrok

# Start ngrok tunnel
ngrok http 3000
```

Visit the HTTPS URL on your mobile device.

## 🎯 First AR Experience

### Using the Built-in Hiro Marker

1. **Download test marker**
   - Visit: https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png
   - Save to `public/markers/hiro.png`
   - Or run: `curl -o public/markers/hiro.png https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png`

2. **Print or display the marker**
   - Print on white paper
   - Or display on another screen

3. **Open the AR viewer**
   - Navigate to `/gallery` on your phone
   - Click any card
   - Allow camera access

4. **Point camera at marker**
   - Hold steady for 1-2 seconds
   - AR content should appear!

## 🛠️ Project Structure

```
ar-canada/
├── backend/
│   ├── server.js              # Express API server
│   ├── database.js            # SQLite setup & seed data
│   └── discover-canada.db     # SQLite database (generated)
│
├── src/
│   ├── pages/
│   │   ├── Home.jsx           # Landing page
│   │   ├── CardGallery.jsx    # Card collection view
│   │   ├── ARViewer.jsx       # AR experience
│   │   └── Analytics.jsx      # Statistics dashboard
│   ├── App.jsx                # Main app router
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles
│
├── public/
│   ├── markers/               # AR marker images (.png + .patt)
│   ├── models/                # 3D GLTF models
│   └── sounds/                # Audio files
│
├── docs/
│   ├── DEPLOYMENT.md          # Deployment guide
│   ├── MARKER_CREATION.md     # Create custom markers
│   └── PRINTABLE_CARDS.md     # Print physical cards
│
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite configuration
└── README.md                  # Main documentation
```

## 📋 Available Scripts

```bash
# Development
npm run dev              # Start both frontend & backend
npm run dev:frontend     # Frontend only (Vite)
npm run dev:backend      # Backend only (Express)

# Production
npm run build            # Build for production
npm run preview          # Preview production build
npm run server           # Run production server

# Database
node backend/database.js # Initialize/reset database
```

## 🎨 Adding Your First Custom Card

Let's add a new Canadian icon!

### 1. Create Marker Image

Create a simple black & white image (512x512px):

```bash
# Save as public/markers/custom-marker.png
# Use any graphics software
# Must be high contrast B&W
```

### 2. Generate Pattern File

- Visit: https://ar-js-org.github.io/AR.js/three.js/examples/marker-training/examples/generator.html
- Upload your marker image
- Download the `.patt` file
- Save to `public/markers/custom-marker.patt`

### 3. Add 3D Model

```bash
# Find a free model on Sketchfab
# Download as GLTF
# Save to public/models/custom-model.gltf
```

### 4. Add to Database

Edit `backend/database.js`:

```javascript
const cards = [
  // ... existing cards ...
  {
    name: 'Your Icon',
    emoji: '🎨',
    image_target_url: '/markers/custom-marker.png',
    model_url: '/models/custom-model.gltf',
    caption: 'Your caption here',
    sound_url: '/sounds/custom-sound.mp3',
    ar_type: '3d-model'
  }
];
```

### 5. Reinitialize Database

```bash
node backend/database.js
```

### 6. Test!

Visit `/gallery` and try your new card!

## 🐛 Troubleshooting

### "Cannot find module" errors
```bash
npm install
```

### Database errors
```bash
rm backend/discover-canada.db
node backend/database.js
```

### AR not working
- Must use HTTPS or localhost
- Camera permission required
- Marker must be visible and well-lit
- Try the Hiro marker first

### Port already in use
```bash
# Change port in package.json or:
PORT=3001 npm run dev:frontend
PORT=5001 npm run dev:backend
```

### Models not loading
- Check file exists in `public/models/`
- Verify GLTF format (not FBX, OBJ, etc.)
- Check file size (< 5MB recommended)
- Open browser console for errors

## 📚 Next Steps

### Learn More

1. **Create Custom Markers**
   - Read `docs/MARKER_CREATION.md`
   - Design unique markers for each card
   - Test on mobile devices

2. **Add 3D Models**
   - Browse Sketchfab for free models
   - Optimize with gltf-pipeline
   - See `public/models/README.md`

3. **Print Physical Cards**
   - Read `docs/PRINTABLE_CARDS.md`
   - Design with provided templates
   - Print on cardstock

4. **Deploy to Production**
   - Read `docs/DEPLOYMENT.md`
   - Deploy frontend to Netlify
   - Deploy backend to Railway
   - Get HTTPS for camera access

### Resources

- [A-Frame Docs](https://aframe.io/docs/) - 3D framework
- [AR.js Docs](https://ar-js-org.github.io/AR.js-Docs/) - AR library
- [Sketchfab](https://sketchfab.com) - Free 3D models
- [Freesound](https://freesound.org) - Free audio

### Example Improvements

**Easy:**
- Change colors/styling
- Add more cards
- Improve captions
- Add animations

**Medium:**
- Custom 3D models
- Sound effects
- Better AR scenes
- Social sharing

**Advanced:**
- Multiplayer AR
- Location-based unlocks
- Achievement system
- Custom shaders

## 🎯 Testing Checklist

Before showing to others:

- [ ] All dependencies installed
- [ ] Database initialized
- [ ] Frontend loads on mobile
- [ ] Camera permission works
- [ ] At least one marker detects
- [ ] AR content appears correctly
- [ ] Navigation works
- [ ] Analytics tracking
- [ ] Responsive on different screens

## 💡 Pro Tips

1. **Development**
   - Use Chrome DevTools mobile emulator
   - Test on real devices early
   - Keep models small (< 5MB)

2. **AR Markers**
   - Start with Hiro marker for testing
   - Custom markers need good contrast
   - Test in different lighting

3. **Performance**
   - Compress 3D models
   - Use low-poly models
   - Optimize textures
   - Test on older phones

4. **User Experience**
   - Clear instructions
   - Allow camera permission
   - Good lighting tips
   - Fallback for no AR

## 🆘 Need Help?

1. **Check Documentation**
   - README.md
   - docs/ folder
   - Code comments

2. **Common Issues**
   - See Troubleshooting section above
   - Check browser console
   - Verify file paths

3. **Get Support**
   - Open GitHub issue
   - Check AR.js community
   - Stack Overflow (tag: ar.js)

## 🎉 You're Ready!

You now have:
- ✅ Working WebAR app
- ✅ 5 Canadian AR cards
- ✅ Database with analytics
- ✅ Mobile-ready interface
- ✅ Complete documentation

### Share Your Creation!

- Deploy to production
- Share QR codes
- Collect feedback
- Add more cards!

---

**Questions?** Check the docs or open an issue!

**Happy AR building!** 🇨🇦🍁
