# 🏦 VulnBank - Intentionally Vulnerable Web Application

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/YOUR-USERNAME/vulnbank)](https://github.com/YOUR-USERNAME/vulnbank/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/YOUR-USERNAME/vulnbank)](https://github.com/YOUR-USERNAME/vulnbank/issues)
[![GitHub stars](https://img.shields.io/github/stars/YOUR-USERNAME/vulnbank)](https://github.com/YOUR-USERNAME/vulnbank/stargazers)
[![Maintenance](https://img.shields.io/maintenance/yes/2024)](https://github.com/YOUR-USERNAME/vulnbank)

⚠️ **WARNING: This application contains intentional security vulnerabilities for educational and testing purposes only. DO NOT deploy to production or use with real data!**

<p align="center">
  <img src="https://img.shields.io/badge/Vulnerabilities-30+-red" alt="30+ Vulnerabilities">
  <img src="https://img.shields.io/badge/VISTA-Compatible-blue" alt="VISTA Compatible">
  <img src="https://img.shields.io/badge/Burp%20Suite-Tested-green" alt="Burp Suite Tested">
</p>

---

## 📋 Table of Contents

- [Purpose](#purpose)
- [Quick Start](#quick-start)
- [Implemented Vulnerabilities](#implemented-vulnerabilities)
- [File Structure](#file-structure)
- [Testing with VISTA](#testing-with-vista)
- [Local Deployment](#local-deployment-options)
- [Hostinger Deployment](#hostinger-deployment-guide)
- [Test Credentials](#test-credentials)
- [XSS Test Payloads](#xss-test-payloads)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Purpose

VulnBank is designed to test the [VISTA (Vulnerability Insight & Strategic Test Assistant)](https://github.com/Adw0rm-sec/VISTA) Burp Suite extension's ability to detect real-world client-side vulnerabilities through AI-powered traffic analysis.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/vulnbank.git
cd vulnbank

# Start local server
python3 -m http.server 8000

# Configure Burp Suite proxy (127.0.0.1:8080)
# Install VISTA extension in Burp Suite
# Browse to http://localhost:8000
# Watch VISTA detect vulnerabilities!
```

**Test Credentials**: `admin` / `admin123` or `user` / `password`

## Implemented Vulnerabilities

### 1. Hardcoded Secrets & API Keys (10+ instances)
- AWS credentials (Access Key ID & Secret Key)
- Database connection strings with passwords
- Stripe API keys (secret & publishable)
- Google Maps API key
- SendGrid API key
- Twilio credentials
- Firebase configuration
- JWT secrets
- Admin credentials
- OAuth client secrets
- Slack webhook URLs
- Multiple third-party service tokens

### 2. DOM-Based XSS Vulnerabilities (10+ instances)
- innerHTML with unsanitized user input
- URL hash parameter reflection
- URL query parameter reflection
- postMessage handler without origin validation
- document.write with user input
- eval() with URL parameters
- Chat message reflection
- Profile update reflection
- Transfer note reflection
- Login error message reflection

### 3. Exposed API Keys in Analytics (8+ services)
- Google Analytics tracking IDs
- Facebook Pixel ID
- Mixpanel token
- Segment write key
- Amplitude API key
- Hotjar ID
- Intercom App ID
- Sentry DSN

### 4. Authentication & Authorization Issues
- Client-side authentication logic
- Hardcoded user credentials
- Predictable session tokens
- Weak password reset mechanism
- User enumeration vulnerability
- No CSRF protection
- Insecure session management
- Client-side authorization checks

### 5. Data Exposure Issues
- Sensitive data in localStorage
- SSN exposure in responses
- Logging sensitive data to console
- Tracking PII in analytics
- Password values tracked in analytics
- Form data exposure
- Cookie data exposure

### 6. Additional Vulnerabilities
- Predictable account number generation
- SQL injection vulnerable endpoints (simulated)
- Exposed internal API endpoints
- Debug functions in production
- Insecure Direct Object References
- Excessive fingerprinting
- No rate limiting
- Exposed admin functions

## File Structure

```
vulnbank/
├── index.html          # Main application page
├── css/
│   └── styles.css      # Application styling
├── js/
│   ├── config.js       # Hardcoded secrets & API keys
│   ├── api.js          # API implementation with vulnerabilities
│   ├── auth.js         # Weak authentication logic
│   ├── app.js          # DOM XSS vulnerabilities
│   └── analytics.js    # Analytics tracking with data exposure
└── README.md           # This file
```

## Testing with VISTA

### Setup Instructions

1. **Install Burp Suite** (Community or Professional)
2. **Install VISTA Extension**
   - Download from [VISTA GitHub](https://github.com/Adw0rm-sec/VISTA)
   - Load in Burp Suite: Extender → Extensions → Add
3. **Configure AI Provider** in VISTA
   - OpenAI (GPT-4)
   - Azure OpenAI
   - OpenRouter (FREE options available)

### Testing Steps

1. **Start Burp Suite** with VISTA extension loaded
2. **Configure Browser** to use Burp as proxy (127.0.0.1:8080)
3. **Host the Application** (see deployment options below)
4. **Browse the Application** through Burp proxy:
   - Visit all pages (Login, Dashboard, Transfer, Profile, Support)
   - Submit forms with test data
   - Interact with all features
5. **Monitor VISTA Traffic Tab**:
   - Watch real-time AI analysis
   - Review detected vulnerabilities
   - Check severity ratings
   - Export findings

### Expected VISTA Detections

VISTA should identify:
- ✅ Hardcoded API keys and secrets in JavaScript files
- ✅ DOM-based XSS vulnerabilities
- ✅ Exposed authentication tokens
- ✅ Insecure data storage (localStorage)
- ✅ Missing security headers
- ✅ Client-side authentication logic
- ✅ Sensitive data exposure in console logs
- ✅ Insecure postMessage handlers
- ✅ CSRF vulnerabilities
- ✅ Information disclosure

## Local Deployment Options

### Option 1: Python HTTP Server (Simplest)
```bash
# Navigate to project directory
cd vulnbank

# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Access at: http://localhost:8000
```

### Option 2: Node.js HTTP Server
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server -p 8000

# Access at: http://localhost:8000
```

### Option 3: PHP Built-in Server
```bash
php -S localhost:8000
```

### Option 4: VS Code Live Server
1. Install "Live Server" extension
2. Right-click index.html
3. Select "Open with Live Server"

## Hostinger Deployment Guide

### Prerequisites
- Hostinger account (shared hosting or VPS)
- FTP client (FileZilla) or use Hostinger File Manager
- Domain name (optional)

### Deployment Steps

#### Method 1: File Manager (Easiest)

1. **Login to Hostinger**
   - Go to hpanel.hostinger.com
   - Login with your credentials

2. **Access File Manager**
   - Navigate to: Hosting → Manage → File Manager
   - Go to `public_html` directory

3. **Upload Files**
   - Click "Upload Files"
   - Select all VulnBank files (index.html, css/, js/)
   - Wait for upload to complete

4. **Set Permissions**
   - Ensure files have 644 permissions
   - Directories should have 755 permissions

5. **Access Your Site**
   - Visit: `http://yourdomain.com`
   - Or: `http://your-hostinger-subdomain.com`

#### Method 2: FTP Upload

1. **Get FTP Credentials**
   - Hostinger hPanel → Hosting → Manage
   - Find FTP details (hostname, username, password)

2. **Connect with FileZilla**
   - Host: ftp.yourdomain.com
   - Username: your-ftp-username
   - Password: your-ftp-password
   - Port: 21

3. **Upload Files**
   - Navigate to `/public_html` on remote
   - Upload all VulnBank files
   - Maintain directory structure

4. **Verify Upload**
   - Check all files are present
   - Test by visiting your domain

#### Method 3: Git Deployment (Advanced)

1. **Enable SSH** (if available on your plan)
2. **Connect via SSH**
   ```bash
   ssh username@yourdomain.com
   ```

3. **Clone Repository**
   ```bash
   cd public_html
   git clone https://github.com/yourusername/vulnbank.git .
   ```

### Post-Deployment Configuration

1. **Update URLs** (if needed)
   - Edit `js/config.js`
   - Update API_BASE_URL to your domain

2. **Configure HTTPS** (Recommended even for testing)
   - Hostinger hPanel → SSL
   - Enable free SSL certificate
   - Force HTTPS redirect

3. **Test All Features**
   - Browse through Burp Suite proxy
   - Verify VISTA can analyze traffic
   - Check all vulnerabilities are accessible

### Hostinger-Specific Notes

- **Shared Hosting**: Perfect for this static application
- **Resource Limits**: No issues (static HTML/JS/CSS)
- **PHP Not Required**: Pure client-side application
- **Database Not Required**: All data is simulated client-side
- **SSL Certificate**: Free with Hostinger
- **Subdomain**: Can use free Hostinger subdomain for testing

### Security Reminder for Deployment

⚠️ **IMPORTANT**: 
- Add `robots.txt` to prevent search engine indexing
- Consider password-protecting the directory
- Add disclaimer banner on the page
- Monitor for abuse
- Take down after testing is complete

Create `robots.txt`:
```
User-agent: *
Disallow: /
```

Create `.htaccess` for password protection:
```apache
AuthType Basic
AuthName "Restricted Access"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

## Test Credentials

Use these credentials to test the application:

- **Admin**: username: `admin`, password: `admin123`
- **User**: username: `user`, password: `password`
- **John**: username: `john`, password: `john2024`
- **Sarah**: username: `sarah`, password: `sarah@bank`
- **Test**: username: `test`, password: `test123`

## XSS Test Payloads

Try these in various input fields:

```html
<img src=x onerror=alert('XSS')>
<script>alert('XSS')</script>
<svg onload=alert('XSS')>
'"><script>alert(String.fromCharCode(88,83,83))</script>
```

URL-based XSS:
```
http://localhost:8000/?message=<img src=x onerror=alert('XSS')>
http://localhost:8000/#<script>alert('XSS')</script>
http://localhost:8000/?debug=alert('XSS')
```

## Educational Use Only

This application is created solely for:
- Security testing tool validation
- Security training and education
- Penetration testing practice
- Vulnerability scanner testing
- Bug bounty tool development

**DO NOT**:
- Deploy to production environments
- Use with real user data
- Leave publicly accessible long-term
- Use for malicious purposes

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

Ways to contribute:
- 🐛 Report bugs or issues
- ✨ Suggest new vulnerabilities
- 📝 Improve documentation
- 🧪 Add test payloads
- 🔧 Fix bugs or improve code

## 📊 Project Stats

- **Vulnerabilities**: 30+
- **Files**: 5 JavaScript files, 1 HTML, 1 CSS
- **Size**: ~50KB total
- **Dependencies**: None (pure vanilla JS)
- **Browsers**: Chrome, Firefox, Safari, Edge

## 🌟 Star History

If you find VulnBank useful, please consider giving it a star! ⭐

## 📢 Community

- **Issues**: [Report bugs or request features](../../issues)
- **Discussions**: [Join the conversation](../../discussions)
- **Pull Requests**: [Contribute code](../../pulls)

## 🔗 Related Projects

- [VISTA](https://github.com/Adw0rm-sec/VISTA) - AI-Powered Security Testing Assistant for Burp Suite
- [OWASP WebGoat](https://github.com/WebGoat/WebGoat) - Deliberately insecure application
- [DVWA](https://github.com/digininja/DVWA) - Damn Vulnerable Web Application
- [Juice Shop](https://github.com/juice-shop/juice-shop) - OWASP Juice Shop

## 📄 License

MIT License - For educational purposes only. See [LICENSE](LICENSE) for details.

## ⚠️ Disclaimer

The creators and contributors of VulnBank are not responsible for any misuse of this software. This tool is provided for educational purposes only. Users must ensure they have proper authorization before testing any systems and must comply with all applicable laws and regulations.

## 📞 Support

- 📖 [Documentation](README.md)
- 🚀 [Deployment Guide](DEPLOYMENT.md)
- 🔒 [Security Policy](SECURITY.md)
- 🤝 [Contributing Guidelines](CONTRIBUTING.md)
- 📝 [Changelog](CHANGELOG.md)

## 🙏 Acknowledgments

- Inspired by real-world vulnerabilities from HackerOne reports
- Built for testing [VISTA](https://github.com/Adw0rm-sec/VISTA)
- Based on OWASP guidelines and security research
- Thanks to the security community for responsible disclosure

---

<p align="center">
  Made with ❤️ for the security community
</p>

<p align="center">
  <a href="#-table-of-contents">Back to Top</a>
</p>
