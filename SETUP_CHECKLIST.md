# VulnBank Setup Checklist

Complete guide to get VulnBank from local files to live GitHub repository.

## ✅ Pre-Setup Checklist

- [ ] Git installed on your computer
- [ ] GitHub account created
- [ ] Text editor installed (VS Code, Sublime, etc.)
- [ ] All VulnBank files downloaded/created
- [ ] Terminal/Command Prompt access

## 📋 Phase 1: Local Setup

### Step 1: Verify Files
- [ ] Navigate to VulnBank directory
- [ ] Verify all files are present:
  - [ ] index.html
  - [ ] css/styles.css
  - [ ] js/config.js
  - [ ] js/api.js
  - [ ] js/auth.js
  - [ ] js/app.js
  - [ ] js/analytics.js
  - [ ] README.md
  - [ ] DEPLOYMENT.md
  - [ ] All other documentation files

### Step 2: Test Locally
- [ ] Open terminal in VulnBank directory
- [ ] Run: `python3 -m http.server 8000`
- [ ] Open browser to `http://localhost:8000`
- [ ] Verify application loads correctly
- [ ] Test login with: admin / admin123
- [ ] Navigate through all pages
- [ ] Stop server (Ctrl+C)

## 🐙 Phase 2: GitHub Repository Setup

### Step 1: Create GitHub Repository
- [ ] Go to [github.com](https://github.com)
- [ ] Click "+" → "New repository"
- [ ] Repository name: `vulnbank`
- [ ] Description: "Intentionally vulnerable web app for testing VISTA and security tools"
- [ ] Visibility: Public
- [ ] **DO NOT** initialize with README, .gitignore, or license
- [ ] Click "Create repository"
- [ ] Keep this page open

### Step 2: Initialize Local Git
```bash
cd /path/to/vulnbank
git init
git add .
git commit -m "Initial commit: VulnBank v1.0.0 with 30+ vulnerabilities"
git branch -M main
```

- [ ] Commands executed successfully
- [ ] No errors displayed

### Step 3: Connect to GitHub
```bash
# Replace YOUR-USERNAME with your GitHub username
git remote add origin https://github.com/YOUR-USERNAME/vulnbank.git
git push -u origin main
```

- [ ] Remote added successfully
- [ ] Files pushed to GitHub
- [ ] Refresh GitHub page to see files

## ⚙️ Phase 3: Repository Configuration

### Step 1: Update README Badges
- [ ] Edit README.md
- [ ] Replace `YOUR-USERNAME` with your actual GitHub username in badge URLs
- [ ] Save file
- [ ] Commit and push:
```bash
git add README.md
git commit -m "Update: Replace placeholder username in badges"
git push
```

### Step 2: Configure Repository Settings
- [ ] Go to repository on GitHub
- [ ] Click "Settings"
- [ ] Under "About" (right sidebar):
  - [ ] Add description
  - [ ] Add website: `https://github.com/Adw0rm-sec/VISTA`
  - [ ] Add topics: `security`, `vulnerable-app`, `penetration-testing`, `burp-suite`, `xss`, `security-testing`, `educational`, `vista`, `bug-bounty`, `web-security`, `owasp`, `security-tools`
  - [ ] Click "Save changes"

### Step 3: Enable Features
- [ ] Settings → General → Features
- [ ] ✅ Enable "Issues"
- [ ] ✅ Enable "Discussions" (optional)
- [ ] ✅ Enable "Projects" (optional)
- [ ] Click "Save changes"

### Step 4: Configure Security
- [ ] Go to "Security" tab
- [ ] Verify SECURITY.md is recognized
- [ ] Settings → Security & analysis
- [ ] Enable available security features

## 🏷️ Phase 4: Create First Release

### Step 1: Create Tag
```bash
git tag -a v1.0.0 -m "VulnBank v1.0.0 - Initial Release"
git push origin v1.0.0
```

- [ ] Tag created locally
- [ ] Tag pushed to GitHub

### Step 2: Create GitHub Release
- [ ] Go to repository on GitHub
- [ ] Click "Releases" (right sidebar)
- [ ] Click "Create a new release"
- [ ] Choose tag: `v1.0.0`
- [ ] Release title: `VulnBank v1.0.0 - Initial Release`
- [ ] Copy description from CHANGELOG.md
- [ ] Click "Publish release"
- [ ] Verify release is published

## 📄 Phase 5: Documentation Review

### Verify All Documentation
- [ ] README.md displays correctly
- [ ] DEPLOYMENT.md is accessible
- [ ] SECURITY.md is in Security tab
- [ ] CONTRIBUTING.md is accessible
- [ ] LICENSE is recognized by GitHub
- [ ] All links work correctly

### Test Issue Templates
- [ ] Go to "Issues" → "New issue"
- [ ] Verify templates appear:
  - [ ] Bug Report
  - [ ] Feature Request
  - [ ] Question
- [ ] Templates load correctly

### Test PR Template
- [ ] Create test branch
- [ ] Make small change
- [ ] Push and create PR
- [ ] Verify PR template loads
- [ ] Close/delete test PR

## 🧪 Phase 6: Testing

### Local Testing
- [ ] Clone repository to new location
```bash
cd /tmp
git clone https://github.com/YOUR-USERNAME/vulnbank.git
cd vulnbank
python3 -m http.server 8000
```
- [ ] Application works from fresh clone
- [ ] All files present
- [ ] No errors

### Burp Suite Testing
- [ ] Install Burp Suite (if not already)
- [ ] Install VISTA extension
- [ ] Configure browser proxy (127.0.0.1:8080)
- [ ] Browse VulnBank through proxy
- [ ] Verify VISTA detects vulnerabilities
- [ ] Check Traffic Monitor tab
- [ ] Export findings

## 🚀 Phase 7: Deployment (Optional)

### Hostinger Deployment
- [ ] Sign up for Hostinger account
- [ ] Login to hPanel
- [ ] Open File Manager
- [ ] Navigate to public_html
- [ ] Upload all VulnBank files
- [ ] Verify file structure
- [ ] Test: http://yourdomain.com
- [ ] Enable SSL certificate
- [ ] Test: https://yourdomain.com

### GitHub Pages (Alternative)
- [ ] Settings → Pages
- [ ] Source: Deploy from branch
- [ ] Branch: main
- [ ] Folder: / (root)
- [ ] Save
- [ ] Wait 2-3 minutes
- [ ] Visit: https://YOUR-USERNAME.github.io/vulnbank/

## 📢 Phase 8: Promotion

### Share on Social Media
- [ ] Twitter/X post
- [ ] LinkedIn post
- [ ] Reddit (r/netsec, r/websecurity)
- [ ] Discord communities
- [ ] Slack communities

### Submit to Lists
- [ ] [Awesome Vulnerable Apps](https://github.com/vavkamil/awesome-vulnerable-apps)
- [ ] OWASP Vulnerable Web Applications Directory
- [ ] Security tool directories

### Notify VISTA Team
- [ ] Create issue on VISTA repository
- [ ] Mention VulnBank as testing resource
- [ ] Provide link to repository

## 🔧 Phase 9: Maintenance Setup

### Enable Notifications
- [ ] Watch your repository
- [ ] Enable email notifications for:
  - [ ] Issues
  - [ ] Pull requests
  - [ ] Discussions

### Set Up Branch Protection (Optional)
- [ ] Settings → Branches
- [ ] Add rule for `main`
- [ ] Configure protection rules
- [ ] Save changes

### Create Development Branch
```bash
git checkout -b develop
git push -u origin develop
```
- [ ] Development branch created
- [ ] Pushed to GitHub

## ✨ Phase 10: Final Verification

### Repository Checklist
- [ ] All files visible on GitHub
- [ ] README displays correctly with badges
- [ ] License recognized by GitHub
- [ ] Topics/tags added
- [ ] Description added
- [ ] Issues enabled
- [ ] First release published
- [ ] Security policy visible

### Functionality Checklist
- [ ] Application loads correctly
- [ ] All pages accessible
- [ ] Login works with test credentials
- [ ] Forms submit correctly
- [ ] Console shows vulnerabilities
- [ ] DevTools shows hardcoded secrets

### Documentation Checklist
- [ ] All documentation files present
- [ ] Links work correctly
- [ ] Code examples are correct
- [ ] Instructions are clear
- [ ] No placeholder text remaining

### Testing Checklist
- [ ] Tested locally
- [ ] Tested with Burp Suite
- [ ] Tested with VISTA
- [ ] Vulnerabilities detected
- [ ] No unexpected errors

## 🎉 Completion

### You're Done When:
- [x] Repository is public on GitHub
- [x] All files are pushed
- [x] First release is published
- [x] Documentation is complete
- [x] Application is tested
- [x] VISTA detects vulnerabilities

### Next Steps:
1. Monitor for issues and PRs
2. Respond to community feedback
3. Plan future enhancements
4. Share with security community
5. Maintain and improve

## 📊 Success Metrics

Track these over time:
- [ ] GitHub stars
- [ ] Forks
- [ ] Issues opened
- [ ] Pull requests
- [ ] Community engagement
- [ ] VISTA detection rate

## 🆘 Troubleshooting

### Common Issues

**Issue**: Git push fails
- Solution: Check remote URL with `git remote -v`
- Solution: Verify GitHub credentials
- Solution: Try SSH instead of HTTPS

**Issue**: Files not showing on GitHub
- Solution: Verify files are committed: `git status`
- Solution: Check if pushed: `git log origin/main`
- Solution: Refresh GitHub page

**Issue**: Badges not displaying
- Solution: Replace YOUR-USERNAME with actual username
- Solution: Wait a few minutes for GitHub to update
- Solution: Clear browser cache

**Issue**: Application not working
- Solution: Check browser console for errors
- Solution: Verify all files are present
- Solution: Check file paths in index.html

## 📞 Getting Help

If you encounter issues:
1. Check this checklist again
2. Review GITHUB_SETUP.md
3. Check GIT_COMMANDS.md
4. Search GitHub documentation
5. Ask in GitHub Discussions
6. Create an issue

## 📚 Additional Resources

- [GITHUB_SETUP.md](GITHUB_SETUP.md) - Detailed GitHub setup
- [GIT_COMMANDS.md](GIT_COMMANDS.md) - Git command reference
- [DEPLOYMENT.md](DEPLOYMENT.md) - Hostinger deployment
- [QUICK_REFERENCE.md](QUICK_REFERENCE.md) - Quick reference card

---

## ✅ Final Checklist Summary

- [ ] Phase 1: Local Setup (2 steps)
- [ ] Phase 2: GitHub Repository Setup (3 steps)
- [ ] Phase 3: Repository Configuration (4 steps)
- [ ] Phase 4: Create First Release (2 steps)
- [ ] Phase 5: Documentation Review (3 sections)
- [ ] Phase 6: Testing (2 sections)
- [ ] Phase 7: Deployment (optional)
- [ ] Phase 8: Promotion (3 sections)
- [ ] Phase 9: Maintenance Setup (3 sections)
- [ ] Phase 10: Final Verification (4 checklists)

**Total Estimated Time**: 1-2 hours

---

**Congratulations!** Once all items are checked, your VulnBank repository is complete and ready for the community! 🎉
