# VulnBank Quick Reference Card

## 🚀 Quick Start Commands

```bash
# Clone repository
git clone https://github.com/YOUR-USERNAME/vulnbank.git
cd vulnbank

# Start local server (choose one)
python3 -m http.server 8000        # Python 3
python -m SimpleHTTPServer 8000    # Python 2
npx http-server -p 8000            # Node.js
php -S localhost:8000              # PHP

# Access at: http://localhost:8000
```

## 🔑 Test Credentials

| Username | Password    | Role  |
|----------|-------------|-------|
| admin    | admin123    | Admin |
| user     | password    | User  |
| john     | john2024    | User  |
| sarah    | sarah@bank  | User  |
| test     | test123     | User  |

## 🎯 Vulnerability Quick Reference

### Hardcoded Secrets (js/config.js)
- AWS credentials
- Stripe API keys
- Firebase config
- JWT secrets
- Admin passwords
- OAuth secrets
- Database strings

### DOM XSS (js/app.js)
- innerHTML injection
- URL hash reflection
- URL query reflection
- postMessage handler
- eval() usage
- document.write

### Analytics Keys (js/analytics.js)
- Google Analytics
- Facebook Pixel
- Mixpanel
- Segment
- Amplitude
- Hotjar
- Intercom
- Sentry

### Auth Issues (js/auth.js)
- Client-side auth
- Weak sessions
- Predictable tokens
- User enumeration

## 🧪 Quick Test Payloads

### Basic XSS
```html
<script>alert('XSS')</script>
<img src=x onerror=alert('XSS')>
<svg onload=alert('XSS')>
```

### URL-Based XSS
```
http://localhost:8000/?message=<img src=x onerror=alert('XSS')>
http://localhost:8000/#<script>alert('XSS')</script>
http://localhost:8000/?debug=alert('XSS')
```

### Console Commands
```javascript
// View secrets
console.log(APP_CONFIG)
console.log(localStorage)

// Bypass auth
debugAuth.bypassAuth()

// View credentials
debugAuth.showAllPasswords()
```

## 🔧 Burp Suite Setup

1. **Configure Proxy**
   - Proxy → Options → 127.0.0.1:8080

2. **Install VISTA**
   - Extender → Extensions → Add
   - Load VISTA JAR file

3. **Configure Browser**
   - Set proxy to 127.0.0.1:8080
   - Install Burp CA certificate

4. **Browse VulnBank**
   - Visit http://localhost:8000
   - Interact with all features

5. **Check VISTA**
   - Open VISTA tab in Burp
   - View Traffic Monitor
   - Review detected vulnerabilities

## 📁 File Structure

```
vulnbank/
├── index.html              # Main app
├── css/styles.css          # Styling
├── js/
│   ├── config.js          # Hardcoded secrets
│   ├── api.js             # API vulnerabilities
│   ├── auth.js            # Auth weaknesses
│   ├── app.js             # DOM XSS
│   └── analytics.js       # Tracking issues
├── README.md              # Documentation
├── DEPLOYMENT.md          # Hostinger guide
├── SECURITY.md            # Security policy
├── CONTRIBUTING.md        # Contribution guide
├── payloads.txt           # Test payloads
└── robots.txt             # Block indexing
```

## 🌐 Hostinger Deployment (Quick)

1. **Login**: hpanel.hostinger.com
2. **File Manager**: Hosting → Manage → File Manager
3. **Upload**: Navigate to public_html → Upload all files
4. **Access**: http://yourdomain.com

## 🔍 What VISTA Should Detect

✅ Hardcoded API keys and secrets  
✅ DOM-based XSS vulnerabilities  
✅ Exposed authentication tokens  
✅ Insecure data storage (localStorage)  
✅ Missing security headers  
✅ Client-side authentication logic  
✅ Sensitive data in console logs  
✅ Insecure postMessage handlers  
✅ CSRF vulnerabilities  
✅ Information disclosure  

## 📊 Vulnerability Count by Category

| Category | Count |
|----------|-------|
| Hardcoded Secrets | 10+ |
| DOM XSS | 10+ |
| Analytics Keys | 8+ |
| Auth Issues | 5+ |
| Data Exposure | 5+ |
| **Total** | **30+** |

## 🛠️ Common Tasks

### View All Secrets
```javascript
// In browser console
console.log(APP_CONFIG);
console.log(window.bankingAPI.apiToken);
console.log(window.authManager.backupCredentials);
```

### Bypass Authentication
```javascript
// In browser console
debugAuth.bypassAuth();
// or
localStorage.setItem('isAdmin', 'true');
localStorage.setItem('authToken', window.bankingAPI.apiToken);
```

### Trigger XSS
1. Login with: `<script>alert('XSS')</script>`
2. Transfer with note: `<img src=x onerror=alert('XSS')>`
3. Visit: `?message=<svg onload=alert('XSS')>`

### Extract Data
```javascript
// Get all localStorage
console.log(localStorage);

// Get all cookies
console.log(document.cookie);

// Get fingerprint
console.log(window.analytics.collectFingerprint());
```

## 📝 Testing Checklist

- [ ] Start local server
- [ ] Configure Burp Suite proxy
- [ ] Install VISTA extension
- [ ] Browse to VulnBank
- [ ] Login with test credentials
- [ ] Visit all pages (Login, Dashboard, Transfer, Profile, Support)
- [ ] Submit forms with test data
- [ ] Try XSS payloads
- [ ] Check browser console for secrets
- [ ] Review VISTA findings
- [ ] Export VISTA report

## 🚨 Important Reminders

⚠️ **DO NOT**:
- Deploy to production
- Use real credentials
- Store real data
- Leave publicly accessible
- Use for malicious purposes

✅ **DO**:
- Use in isolated environments
- Test with dummy data
- Follow responsible disclosure
- Take down after testing
- Share findings responsibly

## 📚 Documentation Links

- [Full README](README.md)
- [Deployment Guide](DEPLOYMENT.md)
- [Security Policy](SECURITY.md)
- [Contributing](CONTRIBUTING.md)
- [Test Payloads](payloads.txt)
- [GitHub Setup](GITHUB_SETUP.md)

## 🔗 Useful Links

- [VISTA GitHub](https://github.com/Adw0rm-sec/VISTA)
- [Burp Suite](https://portswigger.net/burp)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [HackerOne](https://hackerone.com/hacktivity)

## 💡 Pro Tips

1. **Use Burp Repeater** to modify and resend requests
2. **Check Network Tab** in DevTools for exposed secrets
3. **Monitor Console** for logged sensitive data
4. **Test All Input Fields** with XSS payloads
5. **Review Source Code** in DevTools for hardcoded secrets
6. **Use VISTA Templates** for targeted testing
7. **Export Findings** for documentation

## 🎓 Learning Path

1. **Beginner**: Find hardcoded secrets in config.js
2. **Intermediate**: Exploit DOM XSS vulnerabilities
3. **Advanced**: Chain vulnerabilities for impact
4. **Expert**: Bypass client-side security controls

## 📞 Getting Help

- **Issues**: [GitHub Issues](../../issues)
- **Discussions**: [GitHub Discussions](../../discussions)
- **VISTA Docs**: [VISTA Repository](https://github.com/Adw0rm-sec/VISTA)

---

**Quick Reference Version**: 1.0.0  
**Last Updated**: 2024-02-17  
**Compatibility**: VISTA 2.10.23+, Burp Suite 2023.x+
