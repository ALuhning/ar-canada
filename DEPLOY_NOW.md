# 🚂 Deploy to Railway - Quick Guide

Your code is now on GitHub! Let's deploy to Railway.

## ✅ Repository
**GitHub:** https://github.com/ALuhning/ar-canada.git

---

## 🎯 Two Deployment Options

### Option 1: Full-Stack on Railway (EASIEST! ⭐)
Deploy **everything** on Railway - frontend + backend in one service!

**Pros:**
- ✅ Simplest setup (one deployment)
- ✅ No CORS issues
- ✅ One URL for everything
- ✅ 3-minute deployment

**Cost:** ~$2-5/month

� **See:** `RAILWAY_FULLSTACK.md` for step-by-step guide

### Option 2: Split Deployment
Deploy backend on Railway, frontend on Netlify/Vercel

**Pros:**
- ✅ Better for high traffic
- ✅ Specialized services
- ✅ Better caching (CDN)

**Cost:** ~$0-2/month (mostly free)

👉 **See:** `docs/RAILWAY_DEPLOYMENT.md` for detailed guide

---

## 🚀 Quick Start: Full-Stack Deploy (Recommended)

### Step 1: Go to Railway
Visit: https://railway.app

### Step 2: New Project
1. Click **"Start a New Project"**
2. Select **"Deploy from GitHub repo"**
3. Authorize Railway (if first time)
4. Select: **ALuhning/ar-canada**

### Step 3: Configure (Auto-detected!)
Railway will automatically:
- ✅ Detect Node.js project
- ✅ Run `npm install`
- ✅ Start with `npm start`
- ✅ Use Node 18 (from `.nvmrc`)

## 🚀 Quick Start: Full-Stack Deploy (Recommended)

### Step 1: Go to Railway
Visit: https://railway.app

### Step 2: New Project
1. Click **"Start a New Project"**
2. Select **"Deploy from GitHub repo"**
3. Authorize Railway (if first time)
4. Select: **ALuhning/ar-canada**

### Step 3: Configure (Auto-detected!)
Railway automatically:
- ✅ Detects Node.js project
- ✅ Runs `npm install && npm run build`
- ✅ Starts with `npm run start:fullstack`
- ✅ Serves both API and React app!

### Step 4: Add Environment Variable
Click your service → **Variables** → Add:

```
NODE_ENV=production
```

That's all you need for full-stack!

### Step 5: Add Persistent Storage (Optional)
For database persistence:
1. Click **Settings** → **Volumes**
2. Click **"Add Volume"**
3. Mount path: `/data`
4. Add environment variable:
   ```
   DATABASE_PATH=/data/discover-canada.db
   ```

### Step 6: Deploy! 🎉
Railway automatically builds and deploys in ~2-3 minutes.

**Your app will be at:** `https://ar-canada-production-XXXX.up.railway.app`

This ONE URL serves:
- Frontend: `https://your-url.railway.app/`
- API: `https://your-url.railway.app/api/cards`
- AR Viewer: `https://your-url.railway.app/ar/1`
- Analytics: `https://your-url.railway.app/analytics`

---

## ✅ Test Your Deployment

### Test API:
```bash
curl https://YOUR-RAILWAY-URL.railway.app/api/cards
```

Should return 5 Canadian AR cards!

### Test Frontend:
Visit `https://YOUR-RAILWAY-URL.railway.app` in browser

### Test AR on Mobile:
1. Visit `/gallery` on your phone
2. Click a card
3. Allow camera access
4. Point at Hiro marker
5. Watch it come alive! 🍁

---

## 🔄 Future Updates

Just push to GitHub:
```bash
git add .
git commit -m "Your changes"
git push
```

Railway automatically rebuilds and redeploys! 🚂

---

## 📊 Monitor

Railway Dashboard shows:
- Build logs
- Runtime logs
- Resource usage
- Deployments

---

## 🆘 Troubleshooting

**Build fails?**
- Check Railway logs
- Verify `package.json` 
- Node version is 18

**Database issues?**
- Ensure volume is mounted at `/data`
- Check `DATABASE_PATH` variable
- View logs for errors

**CORS errors?**
- Update `FRONTEND_URL` in Railway
- Must match Netlify URL exactly
- Include `https://`

---

## 📚 Full Documentation

See: `docs/RAILWAY_DEPLOYMENT.md` for complete guide

---

**Ready?** Go to https://railway.app and deploy! 🚀
