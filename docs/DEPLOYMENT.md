# Deployment Guide - Discover Canada AR

Complete guide for deploying your WebAR application to production.

## 🌐 Deployment Options

### Option 1: Netlify (Recommended - Easiest)

Perfect for static React apps with excellent CDN performance.

#### Setup Steps

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build Your App**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

4. **Configure**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

#### Netlify Configuration File

Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/api/*"
  to = "https://your-backend.railway.app/api/:splat"
  status = 200
  force = true

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### Option 2: Vercel

Great for Next.js-style deployments with automatic GitHub integration.

#### Setup Steps

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Configure**
   Create `vercel.json`:
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "rewrites": [
       {
         "source": "/api/:path*",
         "destination": "https://your-backend.railway.app/api/:path*"
       },
       {
         "source": "/(.*)",
         "destination": "/index.html"
       }
     ]
   }
   ```

---

### Option 3: GitHub Pages (Free)

Best for simple static hosting directly from GitHub.

#### Setup Steps

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/ar-canada",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Configure GitHub**
   - Go to repository Settings
   - Pages section
   - Source: gh-pages branch

---

## 🖥️ Backend Deployment

### Option 1: Railway (Recommended)

Free tier available, excellent for Node.js backends.

#### Setup Steps

1. **Create Railway Account**
   - Visit [railway.app](https://railway.app)
   - Connect GitHub account

2. **Deploy from GitHub**
   - New Project → Deploy from GitHub repo
   - Select your repository
   - Railway auto-detects Node.js

3. **Environment Variables** (if needed)
   ```
   PORT=5000
   NODE_ENV=production
   ```

4. **Add Start Script**
   In `package.json`:
   ```json
   {
     "scripts": {
       "start": "node backend/server.js"
     }
   }
   ```

5. **Railway Configuration**
   Create `railway.json`:
   ```json
   {
     "build": {
       "builder": "NIXPACKS"
     },
     "deploy": {
       "startCommand": "npm start",
       "restartPolicyType": "ON_FAILURE"
     }
   }
   ```

---

### Option 2: Render

Similar to Railway with free tier.

#### Setup Steps

1. **Create Render Account**
   - Visit [render.com](https://render.com)

2. **New Web Service**
   - Connect GitHub repository
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `node backend/server.js`

3. **Configure**
   ```yaml
   # render.yaml
   services:
     - type: web
       name: discover-canada-api
       env: node
       buildCommand: npm install
       startCommand: node backend/server.js
       envVars:
         - key: NODE_ENV
           value: production
   ```

---

### Option 3: Heroku

Classic platform with straightforward deployment.

#### Setup Steps

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **Login and Create App**
   ```bash
   heroku login
   heroku create discover-canada-ar
   ```

3. **Add Procfile**
   ```
   web: node backend/server.js
   ```

4. **Deploy**
   ```bash
   git push heroku main
   ```

5. **Set Environment Variables**
   ```bash
   heroku config:set NODE_ENV=production
   ```

---

## 🗄️ Database Deployment

### SQLite in Production

For Railway/Render/Heroku:

1. **Persistent Storage**
   - Railway: Automatic volume mounting
   - Render: Add persistent disk
   - Heroku: Not recommended (use PostgreSQL)

2. **Database Initialization**
   Update `package.json`:
   ```json
   {
     "scripts": {
       "start": "node backend/database.js && node backend/server.js"
     }
   }
   ```

### Alternative: Supabase (PostgreSQL)

For production-grade database:

1. **Create Supabase Project**
   - Visit [supabase.com](https://supabase.com)
   - Create new project

2. **Get Connection String**
   ```
   postgres://user:pass@host:5432/database
   ```

3. **Update Backend to Use PostgreSQL**
   ```bash
   npm install pg
   ```

---

## 🔒 HTTPS & Security

### Why HTTPS is Required

WebAR requires camera access, which browsers only allow over HTTPS.

### Automatic HTTPS

Good news! These platforms provide automatic HTTPS:
- ✅ Netlify
- ✅ Vercel
- ✅ GitHub Pages
- ✅ Railway
- ✅ Render
- ✅ Heroku

### Custom Domain HTTPS

1. **Add Custom Domain**
   - Platform dashboard → Settings → Domains
   - Add your domain (e.g., `ar.yourdomain.com`)

2. **Configure DNS**
   ```
   Type: CNAME
   Name: ar
   Value: your-app.netlify.app
   ```

3. **SSL Certificate**
   - Auto-provisioned by platform
   - Let's Encrypt (free)

---

## 🚀 Complete Deployment Workflow

### Recommended Stack

- **Frontend**: Netlify
- **Backend**: Railway
- **Database**: SQLite on Railway (or Supabase)

### Step-by-Step

1. **Prepare Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   ```

2. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/ar-canada.git
   git push -u origin main
   ```

3. **Deploy Backend (Railway)**
   - Connect GitHub repo
   - Railway deploys automatically
   - Note the backend URL: `https://discover-canada-api.up.railway.app`

4. **Update Frontend API URLs**
   Create `.env.production`:
   ```
   VITE_API_URL=https://discover-canada-api.up.railway.app
   ```

   Update API calls in React:
   ```javascript
   const API_URL = import.meta.env.VITE_API_URL || '/api';
   
   fetch(`${API_URL}/cards`)
   ```

5. **Deploy Frontend (Netlify)**
   ```bash
   netlify deploy --prod
   ```

6. **Test Live Site**
   - Visit Netlify URL
   - Test AR on mobile device
   - Check all features working

---

## 📱 Mobile Testing

### Before Going Live

1. **Test on Multiple Devices**
   - iPhone (Safari)
   - Android (Chrome)
   - Samsung Internet
   - Different browsers

2. **Test Features**
   - [ ] Camera access works
   - [ ] AR markers recognized
   - [ ] 3D models load
   - [ ] QR codes scan correctly
   - [ ] Analytics tracking
   - [ ] Responsive design

3. **Performance Check**
   - [ ] Models load in < 5 seconds
   - [ ] Smooth AR rendering
   - [ ] No lag or crashes

### Browser Testing URLs

Use these services to test cross-browser:
- [BrowserStack](https://www.browserstack.com/) - Paid
- [LambdaTest](https://www.lambdatest.com/) - Free tier
- Physical devices (best option)

---

## 🔧 Environment Variables

### Frontend (.env.production)

```bash
VITE_API_URL=https://your-backend.railway.app
VITE_APP_URL=https://your-app.netlify.app
```

### Backend (Railway Dashboard)

```bash
NODE_ENV=production
PORT=5000
DATABASE_PATH=/data/discover-canada.db
CORS_ORIGIN=https://your-app.netlify.app
```

---

## 📊 Monitoring & Analytics

### Error Tracking

Add Sentry for error monitoring:

```bash
npm install @sentry/react @sentry/node
```

Frontend setup:
```javascript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "your-sentry-dsn",
  environment: "production"
});
```

### Analytics

Add Google Analytics or Plausible:

```html
<!-- In index.html -->
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

---

## 🔄 CI/CD Pipeline

### Automated Deployments

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        with:
          args: deploy --prod
```

---

## 🐛 Troubleshooting Deployment

### Common Issues

**Issue**: AR not working on live site
- **Solution**: Ensure HTTPS is enabled
- Check camera permissions
- Verify marker patterns are accessible

**Issue**: API calls failing
- **Solution**: Check CORS settings
- Verify backend URL in frontend
- Check network tab for errors

**Issue**: 3D models not loading
- **Solution**: Verify public folder deployment
- Check file paths are correct
- Test direct model URL access

**Issue**: Database not persisting
- **Solution**: Enable persistent storage
- Check Railway volume settings
- Consider using PostgreSQL

### Debug Mode

Add to backend:
```javascript
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev')); // Request logging
}
```

---

## 📋 Pre-Launch Checklist

- [ ] All features tested on mobile
- [ ] HTTPS enabled
- [ ] Custom domain configured (optional)
- [ ] QR codes point to correct URLs
- [ ] Analytics tracking working
- [ ] Error monitoring setup
- [ ] Performance optimized
- [ ] 3D models compressed
- [ ] Database backed up
- [ ] README updated with live URLs
- [ ] Social media preview images
- [ ] Meta tags for sharing

---

## 🎯 Post-Launch

### Marketing URLs

Update these with your live URLs:

- Website: `https://discover-canada-ar.netlify.app`
- QR Codes: Regenerate with live URLs
- Social Media: Share demo videos
- Documentation: Update all links

### Monitoring

Check these metrics:
- Daily active users
- Card view counts
- Most popular AR experiences
- Error rates
- Load times

---

## 💰 Cost Summary

### Free Tier Limits

**Netlify Free**
- 100 GB bandwidth/month
- 300 build minutes/month
- Automatic HTTPS

**Railway Free (with verification)**
- $5 credit/month
- Enough for small projects
- Automatic deployments

**Vercel Free**
- 100 GB bandwidth/month
- Serverless functions
- Automatic HTTPS

**Total Monthly Cost**: $0 (within free tiers)

### Scaling Costs

For 10,000 visitors/month:
- Netlify: Free - $0
- Railway: ~$5-10/month
- Total: ~$5-10/month

---

## 🆘 Support Resources

- [Netlify Docs](https://docs.netlify.com/)
- [Railway Docs](https://docs.railway.app/)
- [Vercel Docs](https://vercel.com/docs)
- [AR.js Community](https://github.com/AR-js-org/AR.js)

---

**Ready to deploy?** Follow the quick start above and you'll be live in under 30 minutes!
