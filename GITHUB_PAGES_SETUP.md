# GitHub Pages Deployment Guide

Deploy VulnBank to GitHub Pages for FREE in 2 minutes!

## 🚀 Quick Setup (2 Minutes)

### Step 1: Enable GitHub Pages (1 minute)

1. **Go to your repository**: https://github.com/Adw0rm-sec/VulnWeb

2. **Click**: Settings → Pages (in left sidebar)

3. **Configure**:
   - **Source**: Select "GitHub Actions"
   - That's it! No other configuration needed.

### Step 2: Deploy (1 minute)

The deployment will happen automatically! Just push any change:

```bash
# Make a small change (or just push)
git push origin main
```

Or trigger manually:
1. Go to: https://github.com/Adw0rm-sec/VulnWeb/actions
2. Click "Deploy to GitHub Pages"
3. Click "Run workflow"
4. Click "Run workflow" button

### Step 3: Access Your Site

Your site will be live at:
```
https://adw0rm-sec.github.io/VulnWeb/
```

## 🎉 That's It!

Your VulnBank is now live on GitHub Pages!

## ✅ What You Get

✅ **Free hosting** - No cost, no credit card  
✅ **Automatic HTTPS** - SSL certificate included  
✅ **Fast CDN** - Global content delivery  
✅ **Automatic deployment** - Push to deploy  
✅ **Custom domain support** - Optional  
✅ **99.9% uptime** - Reliable hosting  

## 🔗 Your URLs

- **Live Site**: https://adw0rm-sec.github.io/VulnWeb/
- **Repository**: https://github.com/Adw0rm-sec/VulnWeb
- **Actions**: https://github.com/Adw0rm-sec/VulnWeb/actions

## 📊 Deployment Status

Check deployment status:
1. Go to: https://github.com/Adw0rm-sec/VulnWeb/actions
2. Look for "Deploy to GitHub Pages" workflow
3. Green checkmark = Live!

## 🎯 Testing with VISTA

Now you can test VulnBank with VISTA:

1. **Configure Burp Suite proxy** (127.0.0.1:8080)
2. **Browse to**: https://adw0rm-sec.github.io/VulnWeb/
3. **Login**: admin / admin123
4. **Watch VISTA** detect vulnerabilities!

## 🔧 Custom Domain (Optional)

Want to use your own domain?

1. **Go to**: Repository Settings → Pages
2. **Custom domain**: Enter your domain (e.g., vulnbank.yourdomain.com)
3. **Add DNS record** at your domain provider:
   ```
   Type: CNAME
   Name: vulnbank
   Value: adw0rm-sec.github.io
   ```
4. **Wait** for DNS propagation (5-30 minutes)
5. **Enable** "Enforce HTTPS"

## 🔄 How It Works

```
Push to main
    ↓
GitHub Actions triggered
    ↓
Build deployment package
    ↓
Deploy to GitHub Pages
    ↓
Site is live!
```

## 📝 What Gets Deployed

✅ **Included**:
- index.html
- css/ directory
- js/ directory  
- robots.txt
- 404.html (auto-generated)

❌ **Excluded**:
- Documentation files
- .github/ directory
- README.md
- All *.md files

## 🔒 Security Notes

### GitHub Pages Limitations

⚠️ **Important**:
- GitHub Pages is **public** - anyone can access it
- No server-side code (PHP, Node.js, etc.)
- Static files only (perfect for VulnBank!)
- No .htaccess support (Apache-specific)

### Recommendations

For this intentionally vulnerable app:

1. ✅ **Add warning banner** - Make it clear it's for testing
2. ✅ **Monitor access** - Check GitHub Insights
3. ✅ **Take down after testing** - Disable Pages when done
4. ✅ **Use robots.txt** - Already included to block search engines

## 🛠️ Troubleshooting

### Site Not Loading

**Problem**: 404 error on GitHub Pages URL

**Solutions**:
1. Wait 2-3 minutes after first deployment
2. Check Actions tab for deployment status
3. Verify Pages is enabled in Settings
4. Clear browser cache

### Deployment Failed

**Problem**: Red X in Actions

**Solutions**:
1. Check workflow logs for errors
2. Verify all files are committed
3. Re-run the workflow
4. Check repository permissions

### CSS/JS Not Loading

**Problem**: Styles or scripts not working

**Solutions**:
1. Check browser console for errors
2. Verify file paths are relative (not absolute)
3. Clear browser cache
4. Check if files are in repository

## 📈 Advantages Over Hostinger

### GitHub Pages Wins

✅ **Free** - No monthly cost  
✅ **Instant setup** - 2 minutes vs 30 minutes  
✅ **No credentials needed** - No FTP/SSH setup  
✅ **Automatic HTTPS** - SSL included  
✅ **Git-based** - Deploy with git push  
✅ **Version control** - Easy rollbacks  
✅ **Global CDN** - Fast worldwide  

### Hostinger Wins

✅ **Custom domain included** - No DNS setup  
✅ **Server-side code** - PHP, databases, etc.  
✅ **More control** - .htaccess, etc.  
✅ **Private hosting** - Can be password protected  

## 🎯 Best Use Cases

### Use GitHub Pages When:
- ✅ Testing and development
- ✅ Demonstrations and tutorials
- ✅ Open source projects
- ✅ Static websites
- ✅ Quick deployments

### Use Hostinger When:
- ✅ Production deployments
- ✅ Need server-side code
- ✅ Need databases
- ✅ Need privacy/authentication
- ✅ Custom server configuration

## 🔄 Switching Between Deployments

You can use both! Deploy to:
- **GitHub Pages**: For testing and demos
- **Hostinger**: For production use

Both workflows are independent and can run simultaneously.

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Actions](https://docs.github.com/en/actions)

## ✅ Checklist

- [ ] GitHub Pages enabled in Settings
- [ ] Workflow deployed successfully
- [ ] Site accessible at GitHub Pages URL
- [ ] Tested with Burp Suite + VISTA
- [ ] Warning banner visible
- [ ] robots.txt blocking search engines

## 🎉 Success!

Your VulnBank is now live on GitHub Pages!

**URL**: https://adw0rm-sec.github.io/VulnWeb/  
**Cost**: $0  
**Setup time**: 2 minutes  
**Deployment**: Automatic  

---

**Questions?** Open an issue on GitHub.

**Ready to test?** Visit your site and start testing with VISTA! 🚀
