# GitHub Repository Setup Guide

This guide will walk you through creating and setting up a GitHub repository for VulnBank.

## Prerequisites

- GitHub account (free)
- Git installed on your computer
- VulnBank files (already created)

## Step 1: Create GitHub Repository

### Option A: Via GitHub Website (Easiest)

1. **Go to GitHub**
   - Visit [github.com](https://github.com)
   - Login to your account

2. **Create New Repository**
   - Click the "+" icon (top right)
   - Select "New repository"

3. **Configure Repository**
   ```
   Repository name: vulnbank
   Description: Intentionally vulnerable web app for testing VISTA and security tools
   Visibility: Public (recommended for educational projects)
   
   ❌ Do NOT initialize with:
   - README (we already have one)
   - .gitignore (we already have one)
   - License (we already have one)
   ```

4. **Create Repository**
   - Click "Create repository"
   - Keep this page open (you'll need the commands)

### Option B: Via GitHub CLI

```bash
# Install GitHub CLI first: https://cli.github.com/
gh repo create vulnbank --public --description "Intentionally vulnerable web app for testing VISTA"
```

## Step 2: Initialize Local Git Repository

Open terminal in your VulnBank directory:

```bash
# Navigate to your project
cd /path/to/vulnbank

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: VulnBank v1.0.0 with 30+ vulnerabilities"

# Rename branch to main (if needed)
git branch -M main
```

## Step 3: Connect to GitHub

Use the commands from your GitHub repository page:

```bash
# Add remote repository
git remote add origin https://github.com/YOUR-USERNAME/vulnbank.git

# Push to GitHub
git push -u origin main
```

### If Using SSH (Alternative)

```bash
# Add remote with SSH
git remote add origin git@github.com:YOUR-USERNAME/vulnbank.git

# Push to GitHub
git push -u origin main
```

## Step 4: Configure Repository Settings

### 4.1 Add Repository Description

1. Go to your repository on GitHub
2. Click "⚙️ Settings"
3. Under "About", click the gear icon
4. Add:
   ```
   Description: Intentionally vulnerable banking web app for testing VISTA and security tools. 30+ client-side vulnerabilities including hardcoded secrets, DOM XSS, and exposed API keys.
   
   Website: https://github.com/Adw0rm-sec/VISTA
   
   Topics: security, vulnerable-app, penetration-testing, burp-suite, 
           xss, security-testing, educational, vista, bug-bounty, 
           web-security, owasp, security-tools
   ```

### 4.2 Enable Issues

1. Settings → General
2. Features section
3. ✅ Enable "Issues"

### 4.3 Enable Discussions (Optional)

1. Settings → General
2. Features section
3. ✅ Enable "Discussions"

### 4.4 Configure Security

1. **Security Policy**
   - Go to "Security" tab
   - Click "Security policy"
   - It will use your SECURITY.md file

2. **Dependabot Alerts** (Optional)
   - Settings → Security & analysis
   - Enable Dependabot alerts (if you add dependencies later)

### 4.5 Set Up GitHub Pages (Optional)

To host VulnBank directly from GitHub:

1. Settings → Pages
2. Source: Deploy from a branch
3. Branch: main
4. Folder: / (root)
5. Save

Your site will be available at:
`https://YOUR-USERNAME.github.io/vulnbank/`

⚠️ **Warning**: Only do this if you want public access. Add password protection or take down after testing.

## Step 5: Create Releases

### Create Your First Release

1. **Go to Releases**
   - Click "Releases" (right sidebar)
   - Click "Create a new release"

2. **Tag Version**
   ```
   Tag: v1.0.0
   Target: main
   ```

3. **Release Title**
   ```
   VulnBank v1.0.0 - Initial Release
   ```

4. **Release Description**
   ```markdown
   # VulnBank v1.0.0 - Initial Release
   
   Intentionally vulnerable banking web application for testing VISTA and security tools.
   
   ## 🎯 Features
   
   - 30+ client-side vulnerabilities
   - Hardcoded secrets and API keys (10+ instances)
   - DOM-based XSS vulnerabilities (10+ instances)
   - Exposed analytics keys (8+ services)
   - Authentication and authorization issues
   - Complete documentation and deployment guides
   
   ## 📦 What's Included
   
   - Full banking application interface
   - Test credentials and payloads
   - Hostinger deployment guide
   - Burp Suite + VISTA testing instructions
   - Security policy and contributing guidelines
   
   ## 🚀 Quick Start
   
   1. Download the release
   2. Extract files
   3. Run local server: `python3 -m http.server 8000`
   4. Configure Burp Suite proxy
   5. Test with VISTA extension
   
   ## 📚 Documentation
   
   - [README.md](README.md) - Complete overview
   - [DEPLOYMENT.md](DEPLOYMENT.md) - Hostinger deployment
   - [SECURITY.md](SECURITY.md) - Security policy
   
   ## ⚠️ Warning
   
   This is an intentionally vulnerable application. DO NOT deploy to production!
   
   ## 🔗 Related Projects
   
   - [VISTA](https://github.com/Adw0rm-sec/VISTA) - AI-Powered Security Testing for Burp Suite
   ```

5. **Publish Release**
   - Click "Publish release"

## Step 6: Add Repository Badges

Edit your README.md to add badges at the top:

```markdown
# VulnBank - Intentionally Vulnerable Web Application

![GitHub release (latest by date)](https://img.shields.io/github/v/release/YOUR-USERNAME/vulnbank)
![GitHub](https://img.shields.io/github/license/YOUR-USERNAME/vulnbank)
![GitHub issues](https://img.shields.io/github/issues/YOUR-USERNAME/vulnbank)
![GitHub stars](https://img.shields.io/github/stars/YOUR-USERNAME/vulnbank)
![GitHub forks](https://img.shields.io/github/forks/YOUR-USERNAME/vulnbank)
![Maintenance](https://img.shields.io/maintenance/yes/2024)

⚠️ **WARNING: This application contains intentional security vulnerabilities...**
```

Update and push:

```bash
# Edit README.md with badges
git add README.md
git commit -m "Add repository badges"
git push
```

## Step 7: Create Additional Branches (Optional)

```bash
# Create development branch
git checkout -b develop
git push -u origin develop

# Create feature branch example
git checkout -b feature/new-vulnerabilities
git push -u origin feature/new-vulnerabilities

# Return to main
git checkout main
```

## Step 8: Set Up Branch Protection (Optional)

1. Settings → Branches
2. Add rule for `main` branch
3. Configure:
   - ✅ Require pull request reviews before merging
   - ✅ Require status checks to pass
   - ✅ Require branches to be up to date

## Step 9: Add Collaborators (Optional)

1. Settings → Collaborators
2. Click "Add people"
3. Enter GitHub username
4. Select permission level

## Step 10: Promote Your Repository

### Add to VISTA Repository

1. Fork [VISTA repository](https://github.com/Adw0rm-sec/VISTA)
2. Add VulnBank to their README or documentation
3. Submit pull request

### Share on Social Media

```
🚀 Just released VulnBank v1.0.0!

An intentionally vulnerable banking app with 30+ client-side vulnerabilities 
for testing @VISTA and security tools.

✅ Hardcoded secrets
✅ DOM XSS
✅ Exposed API keys
✅ Auth issues

Perfect for testing Burp Suite extensions!

https://github.com/YOUR-USERNAME/vulnbank

#infosec #bugbounty #appsec #pentesting
```

### Submit to Lists

- [Awesome Vulnerable Apps](https://github.com/vavkamil/awesome-vulnerable-apps)
- [OWASP Vulnerable Web Applications Directory](https://owasp.org/www-project-vulnerable-web-applications-directory/)

## Common Git Commands

### Daily Workflow

```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Add: New SSRF vulnerability"

# Push to GitHub
git push

# Pull latest changes
git pull
```

### Working with Branches

```bash
# Create and switch to new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# Merge branch
git merge feature/new-feature

# Delete branch
git branch -d feature/new-feature
```

### Undoing Changes

```bash
# Discard local changes
git checkout -- filename

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

## Troubleshooting

### Issue: Permission Denied (publickey)

**Solution**: Set up SSH keys
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add to GitHub
# Settings → SSH and GPG keys → New SSH key
cat ~/.ssh/id_ed25519.pub
```

### Issue: Remote Already Exists

**Solution**: Remove and re-add
```bash
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/vulnbank.git
```

### Issue: Merge Conflicts

**Solution**: Resolve manually
```bash
# Pull latest changes
git pull

# Edit conflicted files
# Remove conflict markers (<<<<, ====, >>>>)

# Add resolved files
git add .

# Commit merge
git commit -m "Resolve merge conflicts"
```

## Repository Maintenance

### Regular Tasks

- [ ] Review and respond to issues
- [ ] Merge pull requests
- [ ] Update documentation
- [ ] Create releases for major updates
- [ ] Monitor for security issues
- [ ] Engage with community

### Versioning

Follow [Semantic Versioning](https://semver.org/):
- **Major (X.0.0)**: Breaking changes, new vulnerability categories
- **Minor (1.X.0)**: New vulnerabilities, backward-compatible features
- **Patch (1.0.X)**: Bug fixes, documentation updates

## Next Steps

1. ✅ Repository created and pushed
2. ✅ Settings configured
3. ✅ First release published
4. 📢 Share with community
5. 🤝 Accept contributions
6. 📈 Maintain and improve

## Resources

- [GitHub Docs](https://docs.github.com/)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub CLI](https://cli.github.com/)
- [Semantic Versioning](https://semver.org/)

## Questions?

Open an issue on your repository or check GitHub's documentation.

---

**Congratulations!** Your VulnBank repository is now live on GitHub! 🎉
