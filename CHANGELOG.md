# Changelog

All notable changes to VulnBank will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-02-17

### Added
- Initial release of VulnBank
- 30+ intentional client-side vulnerabilities
- Complete banking application interface
- Hardcoded secrets and API keys (10+ instances)
  - AWS credentials
  - Stripe API keys
  - Firebase configuration
  - JWT secrets
  - Admin credentials
  - OAuth secrets
  - Database connection strings
- DOM-based XSS vulnerabilities (10+ instances)
  - innerHTML injection
  - URL parameter reflection
  - postMessage vulnerabilities
  - eval() usage
  - document.write exploits
- Exposed analytics keys (8+ services)
  - Google Analytics
  - Facebook Pixel
  - Mixpanel
  - Segment
  - Amplitude
  - Hotjar
  - Intercom
  - Sentry
- Authentication vulnerabilities
  - Client-side authentication logic
  - Weak session management
  - Predictable tokens
  - User enumeration
- Data exposure issues
  - Sensitive data in localStorage
  - Console logging of secrets
  - PII tracking
  - Excessive fingerprinting
- Complete documentation
  - README with vulnerability catalog
  - Deployment guide for Hostinger
  - Security policy
  - Contributing guidelines
- Test credentials and payloads
- robots.txt for search engine blocking
- .htaccess for optional password protection

### Documentation
- Comprehensive README.md
- Detailed DEPLOYMENT.md for Hostinger
- SECURITY.md with responsible use guidelines
- CONTRIBUTING.md for community contributions
- LICENSE (MIT)

### Testing
- Compatible with VISTA Burp Suite extension
- Tested with Burp Suite Professional/Community
- Verified vulnerability detection
- Cross-browser compatible

## [Unreleased]

### Planned Features
- Additional SSRF vulnerabilities
- More SSTI examples
- XXE vulnerabilities
- CORS misconfigurations
- WebSocket vulnerabilities
- GraphQL injection examples
- JWT manipulation examples
- OAuth flow vulnerabilities
- File upload vulnerabilities
- Path traversal examples

### Planned Improvements
- Docker deployment option
- Automated testing scripts
- CI/CD integration examples
- Additional deployment guides (AWS, Azure, Netlify)
- Video tutorials
- Interactive vulnerability explanations
- Difficulty levels (beginner, intermediate, advanced)

---

## Version History

### Version Numbering

- **Major version (X.0.0)**: Significant changes, new vulnerability categories
- **Minor version (1.X.0)**: New vulnerabilities, features, or improvements
- **Patch version (1.0.X)**: Bug fixes, documentation updates, minor tweaks

### How to Upgrade

Since VulnBank is a static application:

1. **Backup your current deployment** (if any)
2. **Download the latest release** from GitHub
3. **Replace files** on your server
4. **Test the deployment** to ensure everything works
5. **Review CHANGELOG** for new vulnerabilities

### Compatibility

- **Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Burp Suite**: Community Edition 2023.x+, Professional 2023.x+
- **VISTA**: Version 2.10.23+
- **Hosting**: Any static web hosting (Hostinger, Netlify, GitHub Pages, etc.)

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to contribute to VulnBank.

## Questions?

Open an issue on GitHub for questions or suggestions.
