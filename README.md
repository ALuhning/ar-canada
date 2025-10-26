# 🇨🇦 Discover Canada in AR

A WebAR experience showcasing Canadian icons through collectible AR cards. Built with **React**, **A-Frame**, and **AR.js** - completely free and open-source!

## ✨ Features

- 📱 **No app required** - Works in mobile browsers via WebAR
- 🎨 **5 Collectible AR Cards** - Beaver, Maple Leaf, Hockey, Canadarm, and Poutine
- 🔄 **Real-time 3D experiences** - Interactive models and animations
- 📊 **Analytics Dashboard** - Track views and engagement
- 🖨️ **Printable Cards** - Physical collectibles with QR codes
- 🌐 **Responsive Design** - Works on all devices

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- A smartphone with camera for AR testing

### Installation

```bash
# Install dependencies
npm install

# Initialize database
node backend/database.js

# Start development servers (frontend + backend)
npm run dev
```

This will start:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
ar-canada/
├── backend/
│   ├── server.js          # Express API server
│   ├── database.js        # SQLite database setup
│   └── discover-canada.db # SQLite database (auto-generated)
├── src/
│   ├── pages/
│   │   ├── Home.jsx       # Landing page
│   │   ├── CardGallery.jsx # AR card collection
│   │   ├── ARViewer.jsx   # AR experience viewer
│   │   └── Analytics.jsx  # Stats dashboard
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── public/
│   ├── markers/           # AR marker images
│   ├── models/            # 3D GLTF models
│   └── sounds/            # Audio files
├── package.json
└── vite.config.js
```

## 🎯 AR Cards

| Card | Icon | AR Effect | Caption |
|------|------|-----------|---------|
| Beaver | 🦫 | 3D beaver gnawing a log | "Our national animal—industrious and iconic." |
| Maple Leaf | 🍁 | Falling leaves animation | "A symbol of unity since 1868." |
| Hockey | 🏒 | Mini rink with goal scored | "The heart of Canadian winters." |
| Canadarm | 🚀 | Rotating robotic arm | "Built in Canada. Used in space." |
| Poutine | 🍔 | Steam-rising 3D dish | "Quebec comfort food gone worldwide." |

## 📱 How to Use

### For Visitors (End Users)

1. Visit the website on your phone
2. Navigate to the Card Gallery
3. Click "Launch AR Experience" on any card
4. Allow camera access when prompted
5. Point camera at the AR marker (on screen or printed)
6. Watch the AR experience come to life!

### For Expo/Event Setup

1. **Print Physical Cards**
   - Use the card templates in `/docs/printable-cards/`
   - Recommended: 4x6" glossy cardstock
   - Print markers in `/public/markers/` on one side
   - Add QR codes and info on the back

2. **Display Setup**
   - Spread cards on table with "Scan me!" signage
   - Show demo video on screen (record phone AR sessions)
   - Provide QR code to main website

3. **Engagement Tips**
   - "Collect all 5 cards!" challenge
   - Link to Canadian trivia quiz
   - Share unlockable cards based on quiz scores

## 🔧 API Endpoints

### Get All Cards
```
GET /api/cards
```

### Get Specific Card
```
GET /api/cards/:id
```

### Track Card View
```
POST /api/cards/:id/track
```

### Get Analytics
```
GET /api/analytics
```

## 🎨 Adding Custom 3D Models

1. **Find or Create Model**
   - Use [Sketchfab](https://sketchfab.com) (filter by "Free" and "CC license")
   - Create in Blender and export as GLTF
   - Keep file size < 5MB for fast mobile loading

2. **Optimize Model**
   ```bash
   # Install gltf-pipeline
   npm install -g gltf-pipeline
   
   # Optimize GLTF
   gltf-pipeline -i model.gltf -o model-optimized.gltf -d
   ```

3. **Add to Project**
   - Place in `/public/models/`
   - Update card in database with model URL
   - Test on mobile device

## 🖨️ Creating Printable AR Cards

### Marker Images

AR.js uses pattern markers. To create custom markers:

1. Use simple, high-contrast black and white images
2. Visit [AR.js Marker Training](https://ar-js-org.github.io/AR.js/three.js/examples/marker-training/examples/generator.html)
3. Upload your image
4. Download the `.patt` file
5. Place in `/public/markers/`

### Card Templates

See `/docs/printable-cards/` for ready-to-print templates:
- Front: Marker image + decorative border
- Back: QR code + description + "Scan me!" text

Recommended print specs:
- Size: 4x6 inches (postcard)
- Stock: 14pt glossy cardstock
- Color: Full CMYK
- Finish: UV coating

## 🌐 Deployment

### Netlify (Recommended for Frontend)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

Build settings:
- Build command: `npm run build`
- Publish directory: `dist`

### Railway (Backend API)

1. Push to GitHub
2. Connect repo to [Railway](https://railway.app)
3. Railway auto-detects Node.js
4. Add environment variables if needed

### Vercel (Alternative)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## 🛠️ Technologies Used

- **Frontend**: React 18, React Router 6, Vite
- **WebAR**: A-Frame 1.5, AR.js 3.4
- **Backend**: Node.js, Express
- **Database**: SQLite3 (better-sqlite3)
- **3D Models**: GLTF/GLB format
- **QR Codes**: QR Server API

## 📊 Browser Compatibility

| Browser | Mobile | Desktop | Notes |
|---------|--------|---------|-------|
| Chrome | ✅ | ✅ | Best performance |
| Safari (iOS) | ✅ | ⚠️ | Requires iOS 11+ |
| Firefox | ✅ | ✅ | Good performance |
| Edge | ✅ | ✅ | Chromium-based |
| Samsung Internet | ✅ | N/A | Excellent |

## 🐛 Troubleshooting

### AR not loading
- Ensure HTTPS (required for camera access)
- Check camera permissions in browser settings
- Try different lighting conditions
- Make sure marker is clearly visible

### Slow performance
- Reduce 3D model polygon count
- Compress textures
- Use smaller file sizes
- Test on newer devices

### Camera not working
- Browser must support WebRTC
- HTTPS required (or localhost)
- Check browser permissions
- Try different browser

## 📝 License

MIT License - Free to use and modify

## 🤝 Contributing

Contributions welcome! Ideas:
- Add more Canadian icons (CN Tower, Northern Lights, etc.)
- Improve 3D models
- Add sound effects
- Create better marker designs
- Optimize mobile performance

## 🎓 Learning Resources

- [A-Frame Documentation](https://aframe.io/docs/)
- [AR.js Documentation](https://ar-js-org.github.io/AR.js-Docs/)
- [WebXR Device API](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API)
- [GLTF Model Optimization](https://www.khronos.org/gltf/)

## 💡 Future Ideas

- [ ] Add AR Portal to Canadian landscapes
- [ ] Integration with Canadian history quiz
- [ ] Multiplayer AR experiences
- [ ] Social sharing features
- [ ] Achievement/badge system
- [ ] AR selfie mode with Canadian overlays
- [ ] Location-based AR unlocks

## 📞 Support

For issues or questions, please open a GitHub issue.

---

Built with ❤️ and 🍁 for Canada
