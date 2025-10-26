# 🚂 Railway Deployment Guide

Complete step-by-step guide to deploy "Discover Canada AR" to Railway.

## 🎯 Overview

This guide covers deploying your backend API to Railway. Your frontend will be deployed separately (Netlify/Vercel).

**Deployment Stack:**
- **Backend**: Railway (API + Database)
- **Frontend**: Netlify or Vercel (recommended)

**Cost:** Free tier available ($5 credit/month)

---

## 📋 Prerequisites

- [x] GitHub account
- [x] Railway account (sign up at [railway.app](https://railway.app))
- [x] Project pushed to GitHub

---

## 🚀 Step 1: Prepare Your Repository

### Push to GitHub

```bash
# Initialize git (if not already done)
cd /home/vitalpointai/projects/ar-canada
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Discover Canada AR"

# Create GitHub repo and push
git remote add origin https://github.com/YOUR-USERNAME/ar-canada.git
git branch -M main
git push -u origin main
```

### Verify Files

Make sure these Railway config files exist:
- ✅ `railway.json` - Railway configuration
- ✅ `Procfile` - Process definition
- ✅ `.nvmrc` - Node version specification
- ✅ `package.json` - Updated with `start` script

---

## 🚂 Step 2: Deploy to Railway

### Option A: Railway Dashboard (Easiest)

1. **Go to Railway**
   - Visit [railway.app](https://railway.app)
   - Click "Start a New Project"

2. **Deploy from GitHub**
   - Click "Deploy from GitHub repo"
   - Authorize Railway to access GitHub
   - Select your `ar-canada` repository

3. **Configure Project**
   - Railway auto-detects Node.js
   - Build command: `npm install`
   - Start command: `npm start` (already in package.json)

4. **Add Environment Variables**
   - Click on your service
   - Go to "Variables" tab
   - Add these variables:

   ```
   NODE_ENV=production
   PORT=5000
   FRONTEND_URL=https://your-frontend.netlify.app
   ```

5. **Deploy!**
   - Click "Deploy"
   - Wait 2-3 minutes for build
   - Railway generates a public URL

### Option B: Railway CLI

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize project
railway init

# Link to GitHub repo
railway link

# Deploy
railway up

# Set environment variables
railway variables set NODE_ENV=production
railway variables set FRONTEND_URL=https://your-frontend.netlify.app

# Open in browser
railway open
```

---

## 💾 Step 3: Configure Database Storage

Railway provides ephemeral storage by default. For persistent database:

### Add Volume (Persistent Storage)

1. **In Railway Dashboard:**
   - Click your service
   - Go to "Settings" tab
   - Scroll to "Volumes"
   - Click "Add Volume"

2. **Configure Volume:**
   - Mount Path: `/data`
   - Click "Add"

3. **Update Environment Variable:**
   - Go to "Variables" tab
   - Add: `DATABASE_PATH=/data/discover-canada.db`

4. **Redeploy**
   - Railway automatically redeploys
   - Database now persists between deploys!

### Alternative: Use PostgreSQL (Recommended for Production)

If you need a production-grade database:

1. **Add PostgreSQL Service**
   - In Railway dashboard
   - Click "+ New"
   - Select "Database" → "PostgreSQL"

2. **Update Code** (see PostgreSQL migration guide below)

---

## 🌐 Step 4: Get Your API URL

After deployment:

1. **Find Your URL**
   - Railway dashboard → Your service
   - Look for "Domains" section
   - Copy the URL (e.g., `https://ar-canada-production.up.railway.app`)

2. **Test the API**
   ```bash
   curl https://your-railway-url.railway.app/api/cards
   ```

3. **Save This URL**
   - You'll need it for frontend deployment

---

## 🎨 Step 5: Deploy Frontend (Netlify)

Now deploy your React frontend to connect to Railway backend.

### Update Frontend Configuration

Create `.env.production` in your project root:

```bash
VITE_API_URL=https://your-railway-url.railway.app
```

### Update API Calls

The frontend already uses environment variables! Just make sure your `.env.production` is set.

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build frontend
npm run build

# Deploy
netlify deploy --prod

# Follow prompts:
# - Build command: npm run build
# - Publish directory: dist
```

### Update CORS in Railway

1. Go back to Railway dashboard
2. Update `FRONTEND_URL` variable with your Netlify URL
3. Railway auto-redeploys

---

## 🔧 Environment Variables Reference

### Required Variables

```bash
NODE_ENV=production              # Enables production mode
PORT=5000                        # Port (Railway sets automatically)
FRONTEND_URL=https://your-app.netlify.app  # CORS origin
```

### Optional Variables

```bash
DATABASE_PATH=/data/discover-canada.db     # Persistent storage path
```

---

## 📊 Step 6: Verify Deployment

### Backend Health Check

```bash
# Check if server is running
curl https://your-railway-url.railway.app/api/cards

# Should return JSON array of 5 cards
```

### Frontend Check

1. Visit your Netlify URL
2. Navigate to `/gallery`
3. Click a card → Launch AR
4. Check that analytics update

### Database Check

```bash
# Track a view
curl -X POST https://your-railway-url.railway.app/api/cards/1/track

# Check analytics
curl https://your-railway-url.railway.app/api/analytics
```

---

## 🔄 Continuous Deployment

Railway automatically redeploys on git push!

```bash
# Make changes
git add .
git commit -m "Update feature"
git push

# Railway automatically:
# 1. Detects push
# 2. Runs npm install
# 3. Runs npm start
# 4. Deploys new version
```

---

## 💰 Railway Pricing

### Free Tier
- ✅ $5 credit per month
- ✅ Enough for small projects
- ✅ Automatic HTTPS
- ✅ Custom domains

### Usage Estimates

**Light Usage (< 1000 visitors/month):**
- ~$2-3/month
- Fits in free tier

**Medium Usage (1000-10,000 visitors/month):**
- ~$5-10/month
- May need paid plan

### Monitor Usage

1. Railway dashboard
2. Click "Usage"
3. Track spend in real-time

---

## 🐛 Troubleshooting

### Build Fails

**Error: `npm install` fails**

Solution:
```bash
# Check package.json is valid
npm install  # Test locally first

# Check Node version
# Railway uses .nvmrc (set to v18)
```

**Error: Module not found**

Solution:
```bash
# Ensure all dependencies in package.json
# Not just devDependencies
```

### Runtime Errors

**Error: Database not found**

Solution:
1. Check DATABASE_PATH environment variable
2. Ensure volume is mounted at `/data`
3. Check Railway logs

**Error: CORS issues**

Solution:
1. Update FRONTEND_URL in Railway
2. Match your Netlify domain exactly
3. Include https://

**Error: Port binding**

Solution:
- Railway sets PORT automatically
- Use `process.env.PORT` (already configured)
- Don't hardcode port 5000

### Check Logs

```bash
# Using Railway CLI
railway logs

# Or in dashboard:
# Your service → Deployments → Click deployment → View logs
```

---

## 📱 Custom Domain (Optional)

### Add Your Domain

1. **In Railway:**
   - Service → Settings → Domains
   - Click "Custom Domain"
   - Enter: `api.yourdomain.com`

2. **Update DNS:**
   ```
   Type: CNAME
   Name: api
   Value: your-service.railway.app
   ```

3. **SSL Certificate:**
   - Railway auto-provisions
   - Takes ~5-10 minutes

4. **Update Frontend:**
   - Change VITE_API_URL to custom domain
   - Redeploy Netlify

---

## 🔒 Security Best Practices

### Environment Variables

- ✅ Never commit `.env` files
- ✅ Use Railway dashboard for secrets
- ✅ Rotate credentials regularly

### CORS Configuration

```javascript
// Already configured in backend/server.js
const corsOptions = {
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
};
```

### Rate Limiting (Optional)

Add to `backend/server.js`:

```javascript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

---

## 📊 Monitoring

### Railway Metrics

Dashboard shows:
- CPU usage
- Memory usage
- Network traffic
- Request count

### Application Logs

```bash
# View live logs
railway logs --follow

# Filter errors
railway logs | grep ERROR
```

### Uptime Monitoring

Use free services:
- [UptimeRobot](https://uptimerobot.com)
- [StatusCake](https://www.statuscake.com)

Ping endpoint: `https://your-url.railway.app/api/cards`

---

## 🔄 Database Backup

### Manual Backup

```bash
# SSH into Railway (if needed)
railway run bash

# Copy database
cp /data/discover-canada.db /tmp/backup.db

# Or download via Railway CLI
railway run cat /data/discover-canada.db > backup.db
```

### Automated Backup (PostgreSQL)

If you migrate to PostgreSQL:
- Railway has automatic backups
- Point-in-time recovery
- Included in paid plans

---

## 📈 Scaling

### Vertical Scaling

Railway auto-scales:
- CPU: Based on usage
- Memory: Based on needs
- No configuration needed

### Horizontal Scaling

For high traffic:
1. Add more Railway services
2. Use load balancer
3. Consider Railway Pro plan

---

## 🎯 Deployment Checklist

### Pre-Deployment
- [x] Code pushed to GitHub
- [x] `railway.json` configured
- [x] `.nvmrc` specifies Node 18
- [x] `package.json` has start script
- [x] Database initialization in start command

### During Deployment
- [ ] Railway project created
- [ ] GitHub repo connected
- [ ] Environment variables set
- [ ] Volume added (for persistent storage)
- [ ] Build successful
- [ ] API responding

### Post-Deployment
- [ ] Test all API endpoints
- [ ] Verify database works
- [ ] Frontend connected
- [ ] CORS configured
- [ ] Analytics tracking
- [ ] Custom domain (optional)

---

## 🚀 Quick Deploy Commands

```bash
# Complete deployment from scratch
git add .
git commit -m "Deploy to Railway"
git push origin main

# Railway auto-deploys!
# Visit: https://railway.app/dashboard
```

---

## 📞 Support Resources

- [Railway Docs](https://docs.railway.app/)
- [Railway Discord](https://discord.gg/railway)
- [Railway Status](https://status.railway.app/)

---

## 🎉 Success!

Your backend is now live on Railway! 

**Next Steps:**
1. ✅ Backend deployed to Railway
2. ✅ Database configured
3. 🔄 Deploy frontend to Netlify
4. 🔄 Update QR codes with live URLs
5. 🔄 Test on mobile device

---

**Your API is live at:** `https://your-service.railway.app` 🚂

**Frontend deployment guide:** See `docs/DEPLOYMENT.md`
