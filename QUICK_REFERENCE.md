# 🇨🇦 Discover Canada AR - Quick Reference Card

## 🚀 Quick Start (3 Commands)

```bash
npm install              # Install dependencies
node backend/database.js # Initialize database
npm run dev             # Start everything
```

Visit: http://localhost:3000

---

## �� Test on Mobile

1. Get IP: `ifconfig | grep "inet "`
2. Visit on phone: `http://YOUR-IP:3000`
3. Allow camera access
4. Point at Hiro marker

---

## 🎯 Project Structure

```
ar-canada/
├── src/              # React frontend
├── backend/          # Express API
├── public/           # Static assets
└── docs/            # Documentation
```

---

## 📂 Key Files

| File | Purpose |
|------|---------|
| `src/pages/Home.jsx` | Landing page |
| `src/pages/ARViewer.jsx` | AR experience |
| `backend/server.js` | API server |
| `backend/database.js` | Database setup |

---

## 🛠️ Commands

```bash
# Development
npm run dev              # Start both servers
npm run dev:frontend     # Frontend only
npm run dev:backend      # Backend only

# Production
npm run build           # Build for production
npm run preview         # Preview build

# Database
node backend/database.js # Reset database
```

---

## 🔌 API Endpoints

```
GET  /api/cards          # Get all cards
GET  /api/cards/:id      # Get one card
POST /api/cards/:id/track # Track view
GET  /api/analytics      # Get stats
```

---

## 📱 URLs

| URL | Description |
|-----|-------------|
| `/` | Home page |
| `/gallery` | Card gallery |
| `/ar/:id` | AR viewer |
| `/analytics` | Stats |
| `/demo.html` | AR demo |

---

## 🎨 Adding New Card

1. Edit `backend/database.js`
2. Add card object to array
3. Run `node backend/database.js`
4. Test in `/gallery`

---

## 🐛 Troubleshooting

**AR not working?**
- Use HTTPS or localhost
- Check camera permission
- Good lighting needed

**Port in use?**
```bash
PORT=3001 npm run dev:frontend
```

**Database issues?**
```bash
rm backend/discover-canada.db
node backend/database.js
```

---

## 📚 Documentation

- `START_HERE.md` - Complete overview
- `GETTING_STARTED.md` - Quick start
- `README.md` - Main docs
- `docs/DEPLOYMENT.md` - Deploy guide
- `docs/MARKER_CREATION.md` - AR markers
- `docs/PRINTABLE_CARDS.md` - Print cards
- `docs/EXPO_SETUP.md` - Event setup

---

## 🎯 5 Canadian Cards

1. 🦫 Beaver
2. 🍁 Maple Leaf
3. 🏒 Hockey
4. 🚀 Canadarm
5. 🍔 Poutine

---

## 💡 Quick Tips

✅ Test with Hiro marker first
✅ Always test on real mobile device
✅ Keep 3D models < 5MB
✅ Use good lighting for AR
✅ HTTPS required for camera

---

## 🚀 Deploy

**Frontend (Netlify):**
```bash
npm run build
netlify deploy --prod
```

**Backend (Railway):**
1. Push to GitHub
2. Connect to Railway
3. Done!

---

## 🆘 Need Help?

1. Check documentation
2. See code comments
3. Open GitHub issue

---

**Built with ❤️ and 🍁 for Canada**
