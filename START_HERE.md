# 🚀 START HERE - VulnBank Quick Start Guide

Welcome to VulnBank! This guide will get you up and running in minutes.

## 🎯 What is VulnBank?

VulnBank is an intentionally vulnerable banking web application with 30+ client-side security vulnerabilities, designed to test [VISTA](https://github.com/Adw0rm-sec/VISTA) and other security tools.

⚠️ **WARNING**: This is intentionally vulnerable. Never use in production!

## ⚡ Quick Start (5 Minutes)

### Option 1: Test Locally (Fastest)

```bash
# 1. Navigate to VulnBank directory
cd vulnbank

# 2. Start server
python3 -m http.server 8000

# 3. Open browser
# Visit: http://localhost:8000

# 4. Login
# Username: admin
# Password: admin123
```

### Option 2: Deploy to GitHub (10 Minutes)

```bash
# 1. Initialize Git
git init
git add .
git commit -m "Initial commit: VulnBank v1.0.0"

# 2. Create GitHub repository
# Go to github.com → New repository → vulnbank

# 3. Push to GitHub
git remote add origin https://github.com/YOUR-USERNAME/vulnbank.git
git push -u origin main
```

See [GITHUB_SETUP.md](GITHUB_SETUP.md) for detailed instructions.

### Option 3: Deploy to Hostinger (30 Minutes)

1. Sign up at [Hostinger.com](https://www.hostinger.com)
2. Login to hPanel
3. File Manager → public_html
4. Upload all VulnBank files
5. Visit your domain

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 🧪 Test with VISTA (10 Minutes)

1. **Install Burp Suite**
   - Download from [PortSwigger](https://portswigger.net/burp)
   - Install and launch

2. **Install VISTA Extension**
   - Download from [VISTA GitHub](https://github.com/Adw0rm-sec/VISTA)
   - Burp → Extender → Extensions → Add
   - Load VISTA JAR file

3. **Configure Browser Proxy**
   - Set proxy to 127.0.0.1:8080
   - Install Burp CA certificate

4. **Browse VulnBank**
   - Visit http://localhost:8000
   - Login and interact with features

5. **Check VISTA Findings**
   - Open VISTA tab in Burp
   - View Traffic Monitor
   - Review detected vulnerabilities

## 📚 Documentation Guide

### New Users Start Here
1. **[README.md](README.md)** - Complete overview
2. **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - Quick commands
3. **[SECURITY.md](SECURITY.md)** - Important safety info

### Deploying VulnBank
1. **[DEPLOYMENT.md](DEPLOYMENT.md)** - Hostinger deployment
2. **[GITHUB_SETUP.md](GITHUB_SETUP.md)** - GitHub setup
3. **[SETUP_CHECKLIST.md](SETUP_CHECKLIST.md)** - Complete checklist

### Contributing
1. **[CONTRIBUTING.md](CONTRIBUTING.md)** - How to contribute
2. **[GIT_COMMANDS.md](GIT_COMMANDS.md)** - Git reference
3. **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)** - File structure

### Reference
1. **[payloads.txt](payloads.txt)** - Test payloads
2. **[CHANGELOG.md](CHANGELOG.md)** - Version history
3. **[SUMMARY.md](SUMMARY.md)** - Project summary

## 🎓 Learning Path

### Beginner (30 minutes)
1. Run VulnBank locally
2. Login with test credentials
3. Open browser DevTools
4. View console for logged secrets
5. Check Network tab for exposed keys

### Intermediate (1 hour)
1. Set up Burp Suite
2. Install VISTA extension
3. Browse VulnBank through proxy
4. Review VISTA findings
5. Try XSS payloads from payloads.txt

### Advanced (2 hours)
1. Deploy to Hostinger
2. Test all vulnerability categories
3. Chain vulnerabilities
4. Document findings
5. Contribute improvements

## 🔑 Test Credentials

| Username | Password    | Role  |
|----------|-------------|-------|
| admin    | admin123    | Admin |
| user     | password    | User  |
| john     | john2024    | User  |

## 🎯 What VISTA Should Detect

✅ Hardcoded API keys (AWS, Stripe, Firebase, etc.)  
✅ DOM-based XSS vulnerabilities  
✅ Exposed authentication tokens  
✅ Insecure localStorage usage  
✅ Client-side authentication logic  
✅ Sensitive data in console logs  
✅ Analytics tracking keys  
✅ CSRF vulnerabilities  

## 🧪 Quick Test Payloads

### XSS in Login
```
Username: <script>alert('XSS')</script>
Password: anything
```

### XSS in Transfer Note
```
Note: <img src=x onerror=alert('XSS')>
```

### URL-Based XSS
```
http://localhost:8000/?message=<svg onload=alert('XSS')>
```

### Console Commands
```javascript
// View all secrets
console.log(APP_CONFIG)

// Bypass authentication
debugAuth.bypassAuth()

// View all passwords
debugAuth.showAllPasswords()
```

## 📁 Key Files

- **index.html** - Main application
- **js/config.js** - Hardcoded secrets (20+ keys)
- **js/app.js** - DOM XSS vulnerabilities
- **js/api.js** - API vulnerabilities
- **js/auth.js** - Authentication issues
- **js/analytics.js** - Tracking vulnerabilities

## 🆘 Common Issues

### Server won't start
```bash
# Try different port
python3 -m http.server 8080

# Or use Node.js
npx http-server -p 8000
```

### Can't login
- Use exact credentials: `admin` / `admin123`
- Check browser console for errors
- Verify all JS files loaded

### VISTA not detecting
- Ensure proxy is configured correctly
- Browse all pages and submit forms
- Check VISTA is enabled in Burp
- Verify AI provider is configured

### Git push fails
```bash
# Check remote
git remote -v

# Re-add remote
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/vulnbank.git
git push -u origin main
```

## 🎯 Next Steps

### Just Testing?
1. ✅ Run locally
2. ✅ Test with VISTA
3. ✅ Try payloads
4. ✅ Document findings

### Creating GitHub Repo?
1. ✅ Follow [GITHUB_SETUP.md](GITHUB_SETUP.md)
2. ✅ Use [SETUP_CHECKLIST.md](SETUP_CHECKLIST.md)
3. ✅ Create first release
4. ✅ Share with community

### Deploying to Hostinger?
1. ✅ Follow [DEPLOYMENT.md](DEPLOYMENT.md)
2. ✅ Configure security
3. ✅ Test thoroughly
4. ✅ Monitor access

### Contributing?
1. ✅ Read [CONTRIBUTING.md](CONTRIBUTING.md)
2. ✅ Fork repository
3. ✅ Make improvements
4. ✅ Submit PR

## 📞 Getting Help

- **Documentation**: Check relevant .md files
- **Issues**: [GitHub Issues](../../issues)
- **VISTA**: [VISTA Repository](https://github.com/Adw0rm-sec/VISTA)
- **Burp Suite**: [PortSwigger Support](https://portswigger.net/support)

## ⚠️ Important Reminders

**DO**:
- ✅ Use in isolated environments
- ✅ Test with dummy data only
- ✅ Follow responsible disclosure
- ✅ Take down after testing
- ✅ Share findings responsibly

**DON'T**:
- ❌ Deploy to production
- ❌ Use real credentials
- ❌ Store real data
- ❌ Leave publicly accessible
- ❌ Use for malicious purposes

## 🌟 Quick Links

- [VISTA GitHub](https://github.com/Adw0rm-sec/VISTA)
- [Burp Suite](https://portswigger.net/burp)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [HackerOne](https://hackerone.com/hacktivity)

## 📊 Project Stats

- **Vulnerabilities**: 30+
- **Files**: 31
- **Documentation**: 11 guides
- **Test Payloads**: 50+
- **Setup Time**: 5-30 minutes

---

**Ready to start?** Choose your path above and dive in!

**Questions?** Check the documentation or open an issue.

**Found this useful?** ⭐ Star the repository!

---

<p align="center">
  <strong>VulnBank - Educational Security Testing Made Easy</strong>
</p>
