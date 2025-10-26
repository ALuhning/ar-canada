# 🚂 Deploy Full-Stack to Railway

Deploy **both frontend and backend** on Railway with one command!

## ✅ Why Deploy Everything on Railway?

- **Simpler**: One deployment instead of two
- **Cheaper**: Only one service to run
- **Faster**: No CORS complexity
- **Easier**: Single URL for everything

## 🚀 Quick Deploy (3 Minutes)

### Step 1: Go to Railway
Visit: **https://railway.app**

### Step 2: New Project
1. Click **"Start a New Project"**
2. Select **"Deploy from GitHub repo"**
3. Choose: **ALuhning/ar-canada**

### Step 3: Railway Auto-Configures! ✨
Railway automatically:
- ✅ Detects Node.js 18
- ✅ Runs `npm install && npm run build`
- ✅ Starts with `npm run start:fullstack`
- ✅ Serves API + React app

### Step 4: Add Environment Variables
Click **Variables** → Add:

```bash
NODE_ENV=production
```

That's it! No `FRONTEND_URL` needed since everything is together.

### Step 5: Add Database Volume (Optional but Recommended)
For persistent database:
1. **Settings** → **Volumes** → **Add Volume**
2. Mount path: `/data`
3. Add variable:
   ```bash
   DATABASE_PATH=/data/discover-canada.db
   ```

### Step 6: Deploy! 🎉
Railway builds and deploys in ~2-3 minutes.

---

## 🌐 Your Live App

After deployment, Railway gives you **one URL** for everything:

**Example:** `https://ar-canada-production-abc123.up.railway.app`

This URL serves:
- ✅ **Frontend**: `https://your-url.railway.app/`
- ✅ **API**: `https://your-url.railway.app/api/cards`
- ✅ **AR Viewer**: `https://your-url.railway.app/ar/1`
- ✅ **Analytics**: `https://your-url.railway.app/analytics`

---

## ✅ Test Your Deployment

### Test API:
```bash
curl https://your-url.railway.app/api/cards
```

### Test Frontend:
Visit `https://your-url.railway.app` in your browser!

### Test AR:
1. Open on mobile: `https://your-url.railway.app/gallery`
2. Click any card
3. Allow camera
4. Point at Hiro marker
5. Watch AR magic! ✨

---

## 📱 Update QR Codes

Your cards now point to the Railway URL:

Each card automatically generates QR codes using your Railway domain!

---

## 🔄 How It Works

### Build Process:
```bash
npm install          # Install dependencies
npm run build        # Build React app → /dist
```

### Start Process:
```bash
npm run start:fullstack
# 1. Initializes database
# 2. Starts Express server
# 3. Serves /dist (React app)
# 4. Serves /api/* (REST API)
```

### File Structure After Build:
```
dist/               # Built React app
├── index.html
├── assets/
│   ├── index-abc123.js
│   └── index-abc123.css
public/             # Static assets
├── markers/
├── models/
└── sounds/
backend/
└── server-fullstack.js  # Serves everything!
```

---

## 🔧 Advanced Configuration

### Custom Domain
1. Railway → **Settings** → **Domains**
2. Add: `ar.yourdomain.com`
3. Update DNS:
   ```
   Type: CNAME
   Name: ar
   Value: your-service.up.railway.app
   ```

### Environment Variables
```bash
NODE_ENV=production                    # Production mode
PORT=5000                              # Auto-set by Railway
DATABASE_PATH=/data/discover-canada.db # Persistent storage
```

---

## 💰 Cost Estimate

**Railway Free Tier:**
- $5 credit/month
- ~500 hours of runtime
- Perfect for this app!

**Expected Usage:**
- Small traffic: $2-3/month ✅
- Medium traffic: $5-8/month
- High traffic: $10-15/month

---

## 🐛 Troubleshooting

### Build Fails
**Error:** `vite: command not found`

Solution: Dependencies are in package.json (already configured)

### Frontend Shows 404
**Problem:** Routes not working

Solution: Server has SPA fallback (already configured in `server-fullstack.js`)

### API Not Responding
**Problem:** Routes not accessible

Solution: API routes are before static files (already configured)

### Database Not Persisting
**Problem:** Data lost on redeploy

Solution: Add volume at `/data` and set `DATABASE_PATH`

---

## 📊 Monitoring

### Railway Dashboard Shows:
- Build logs
- Runtime logs  
- Memory usage
- CPU usage
- Request metrics

### View Logs:
```bash
# Install Railway CLI
npm install -g @railway/cli

# View logs
railway login
railway link
railway logs
```

---

## 🔄 Future Updates

Just push to GitHub:
```bash
git add .
git commit -m "Update features"
git push
```

Railway automatically:
1. ✅ Pulls latest code
2. ✅ Runs build
3. ✅ Redeploys
4. ✅ Zero downtime!

---

## 🎯 Deployment Checklist

### Pre-Deploy
- [x] Code pushed to GitHub
- [x] `railway.json` configured
- [x] Build script in package.json
- [x] Server serves both API + frontend

### Deploy
- [ ] Railway project created
- [ ] GitHub repo connected
- [ ] Build successful
- [ ] Service running

### Post-Deploy
- [ ] Test API endpoints
- [ ] Test frontend routes
- [ ] Test AR on mobile
- [ ] Add volume (optional)
- [ ] Configure custom domain (optional)

---

## 📚 What's Different from Split Deployment?

### Full-Stack (Railway Only)
**Pros:**
- ✅ Simpler - one service
- ✅ No CORS issues
- ✅ One URL
- ✅ Easier to manage

**Cons:**
- ⚠️ Single point of failure
- ⚠️ More expensive at scale

### Split Deployment (Railway + Netlify)
**Pros:**
- ✅ Cheaper at scale
- ✅ Better caching (CDN)
- ✅ Specialized services

**Cons:**
- ⚠️ More complex setup
- ⚠️ CORS configuration
- ⚠️ Two deployments

**Recommendation:** Start with full-stack on Railway. Split later if needed!

---

## 🚀 Ready to Deploy?

1. Go to **https://railway.app**
2. Deploy from **ALuhning/ar-canada**
3. Wait 2-3 minutes
4. Done! 🎉

Your app will be live at: `https://your-service.up.railway.app`

---

## 📞 Need Help?

- Railway Docs: https://docs.railway.app
- Railway Discord: https://discord.gg/railway
- GitHub Issues: https://github.com/ALuhning/ar-canada/issues

---

**Everything in one place. Simple. Powerful. Railway.** 🚂
