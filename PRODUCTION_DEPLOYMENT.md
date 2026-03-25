# Production Deployment Guide - Gauteng Fresh Market

## 🚀 Pre-Deployment Checklist

### 1. Install Required Dependencies

```bash
# Backend - Install security packages
cd backend
npm install helmet compression express-rate-limit

# Frontend - No additional packages needed
cd ../frontend
npm install
```

### 2. Environment Configuration

#### Backend Environment (.env)
Create `backend/.env` file with the following:

```bash
# Server Configuration
PORT=5000
NODE_ENV=production

# Database Configuration (MongoDB Atlas)
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/gauteng-fresh-market?retryWrites=true&w=majority

# JWT Configuration
# Generate a strong secret: node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
JWT_SECRET=YOUR_GENERATED_STRONG_SECRET_HERE
JWT_EXPIRE=7d

# CORS Configuration
FRONTEND_URL=https://your-production-domain.com

# Email Configuration (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

#### Frontend Environment (.env)
Create `frontend/.env` file with:

```bash
# API Configuration
REACT_APP_API_URL=https://your-api-domain.com/api

# Application Settings
REACT_APP_NAME=Gauteng Fresh Market
```

### 3. Database Setup

#### MongoDB Atlas Configuration
1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Create a database user with read/write permissions
4. Whitelist your server IP address (or 0.0.0.0/0 for all IPs)
5. Get your connection string and update `MONGODB_URI` in backend `.env`

#### Create Initial Admin User
```bash
cd backend
node seeders/seedAdmin.js
```

**Important:** Save the generated admin credentials securely!

### 4. Security Configurations

#### Generate Strong JWT Secret
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```
Copy the output and use it as your `JWT_SECRET` in backend `.env`

#### SSL/HTTPS Setup
- Obtain SSL certificate (Let's Encrypt, Cloudflare, or your hosting provider)
- Configure your web server (Nginx/Apache) to redirect HTTP to HTTPS
- Update `FRONTEND_URL` in backend `.env` to use `https://`

### 5. Build Frontend

```bash
cd frontend
npm run build
```

This creates an optimized production build in the `build/` directory.

## 📦 Deployment Options

### Option 1: Deploy to Vercel (Frontend) + Render (Backend)

#### Backend on Render
1. Push code to GitHub
2. Go to https://render.com and create a new Web Service
3. Connect your GitHub repository
4. Configure:
   - **Build Command:** `cd backend && npm install`
   - **Start Command:** `cd backend && npm start`
   - **Environment:** Add all variables from backend `.env`
5. Deploy

#### Frontend on Vercel
1. Go to https://vercel.com
2. Import your GitHub repository
3. Configure:
   - **Framework Preset:** Create React App
   - **Root Directory:** `frontend`
   - **Environment Variables:** Add `REACT_APP_API_URL` with your Render backend URL
4. Deploy

### Option 2: Deploy to Heroku

#### Backend
```bash
cd backend
heroku create gauteng-market-api
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_jwt_secret
heroku config:set FRONTEND_URL=your_frontend_url
git push heroku main
```

#### Frontend
```bash
cd frontend
heroku create gauteng-market-frontend
heroku config:set REACT_APP_API_URL=https://gauteng-market-api.herokuapp.com/api
heroku buildpacks:set mars/create-react-app
git push heroku main
```

### Option 3: Deploy to VPS (DigitalOcean, AWS EC2, etc.)

#### Server Setup
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 for process management
sudo npm install -g pm2

# Install Nginx
sudo apt install nginx -y
```

#### Deploy Backend
```bash
# Clone repository
git clone your-repo-url
cd gauteng-fresh-market/backend

# Install dependencies
npm install --production

# Create .env file with production values
nano .env

# Start with PM2
pm2 start server.js --name gauteng-api
pm2 save
pm2 startup
```

#### Deploy Frontend
```bash
cd ../frontend
npm install
npm run build

# Copy build to Nginx directory
sudo cp -r build/* /var/www/html/
```

#### Configure Nginx
```nginx
# /etc/nginx/sites-available/gauteng-market
server {
    listen 80;
    server_name your-domain.com;

    # Frontend
    location / {
        root /var/www/html;
        try_files $uri /index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/gauteng-market /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## 🔒 Post-Deployment Security

### 1. Disable Admin Signup
The admin signup endpoint is now protected and requires superadmin authentication. Only use the seeder script to create the first admin.

### 2. Monitor Rate Limiting
- Login attempts: 5 per 15 minutes
- API requests: 100 per 15 minutes
- Order creation: 10 per hour

### 3. Regular Security Updates
```bash
# Check for vulnerabilities
npm audit

# Update dependencies
npm update
```

### 4. Enable Firewall
```bash
# UFW on Ubuntu
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
```

## 📊 Monitoring & Maintenance

### Set Up Logging
Consider integrating:
- **Winston** or **Pino** for structured logging
- **Sentry** for error tracking
- **LogRocket** for frontend monitoring

### Database Backups
Set up automated MongoDB Atlas backups or use:
```bash
mongodump --uri="your_mongodb_uri" --out=/backup/$(date +%Y%m%d)
```

### Health Checks
Monitor the health endpoint:
```bash
curl https://your-api-domain.com/api/health
```

## 🚨 Important Security Notes

1. **Never commit `.env` files** - They're now in `.gitignore`
2. **Change default admin password** immediately after first login
3. **Use strong JWT secrets** - Minimum 32 characters
4. **Keep dependencies updated** - Run `npm audit` regularly
5. **Monitor logs** for suspicious activity
6. **Backup database** regularly
7. **Use HTTPS only** in production

## 📝 Environment Variables Summary

### Backend Required:
- `NODE_ENV=production`
- `MONGODB_URI` (MongoDB Atlas connection string)
- `JWT_SECRET` (Strong random string)
- `FRONTEND_URL` (Your frontend domain with https)
- `PORT` (Optional, defaults to 5000)

### Frontend Required:
- `REACT_APP_API_URL` (Your backend API URL)

## 🆘 Troubleshooting

### Database Connection Issues
- Verify MongoDB Atlas IP whitelist
- Check connection string format
- Ensure database user has correct permissions

### CORS Errors
- Verify `FRONTEND_URL` in backend `.env` matches your frontend domain
- Check that both use `https://`

### Rate Limiting Too Strict
Adjust limits in `backend/middleware/rateLimiter.js`

### Admin Cannot Login
- Verify admin was created with seeder script
- Check JWT_SECRET is set correctly
- Ensure admin account is active

## 📞 Support

For issues or questions:
1. Check application logs
2. Verify all environment variables are set
3. Ensure all dependencies are installed
4. Check firewall and security group settings

---

**Last Updated:** October 2025
**Version:** 1.0.0
