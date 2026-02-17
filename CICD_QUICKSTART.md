# CI/CD Quick Start - 5 Minutes Setup

Get your automated deployment running in 5 minutes!

## 🚀 Quick Setup (FTP Method)

### Step 1: Get Hostinger FTP Info (2 minutes)

1. Login to [Hostinger hPanel](https://hpanel.hostinger.com)
2. Go to: **Hosting → Manage → FTP Accounts**
3. Copy these values:
   - FTP Server (e.g., `ftp.yourdomain.com`)
   - FTP Username (e.g., `u123456789`)
   - FTP Password
   - Remote directory (usually `/public_html/`)

### Step 2: Add GitHub Secrets (2 minutes)

1. Go to: https://github.com/Adw0rm-sec/VulnWeb/settings/secrets/actions

2. Click **"New repository secret"** and add each:

```
Name: FTP_SERVER
Value: ftp.yourdomain.com (your FTP server)

Name: FTP_USERNAME  
Value: u123456789 (your FTP username)

Name: FTP_PASSWORD
Value: YourPassword123 (your FTP password)

Name: FTP_SERVER_DIR
Value: /public_html/ (your remote directory)

Name: SITE_URL
Value: https://yourdomain.com (your website URL)
```

### Step 3: Test Deployment (1 minute)

```bash
# Make a small change
echo "<!-- CI/CD Test -->" >> index.html

# Commit and push
git add index.html
git commit -m "Test: CI/CD deployment"
git push origin main
```

### Step 4: Watch It Deploy!

1. Go to: https://github.com/Adw0rm-sec/VulnWeb/actions
2. Click the latest workflow run
3. Watch the magic happen! ✨

### Step 5: Verify

Visit your Hostinger domain - your changes should be live!

## 🎉 That's It!

Now every time you push to `main`, your site automatically deploys to Hostinger!

## 📋 What You Get

✅ Automatic deployment on every push  
✅ Automated testing before deployment  
✅ Deployment status in GitHub  
✅ Rollback capability  
✅ Manual deployment option  

## 🔧 Need Help?

- **Full Guide**: See [CICD_SETUP.md](CICD_SETUP.md)
- **Troubleshooting**: Check deployment logs in GitHub Actions
- **Issues**: Open an issue on GitHub

## 🎯 Next Steps

1. ✅ Set up GitHub Secrets (done above)
2. ✅ Test deployment (done above)
3. 📝 Read [CICD_SETUP.md](CICD_SETUP.md) for advanced features
4. 🔒 Enable branch protection rules
5. 🚀 Deploy with confidence!

---

**Time to deploy**: ~5 minutes  
**Difficulty**: Easy  
**Requirements**: Hostinger FTP access
