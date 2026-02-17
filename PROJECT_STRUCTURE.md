# VulnBank Project Structure

Complete overview of all files and directories in the VulnBank project.

## 📁 Directory Tree

```
vulnbank/
├── .github/                          # GitHub configuration
│   ├── ISSUE_TEMPLATE/              # Issue templates
│   │   ├── bug_report.md           # Bug report template
│   │   ├── feature_request.md      # Feature request template
│   │   └── question.md             # Question template
│   ├── workflows/                   # GitHub Actions
│   │   └── static-check.yml        # Automated file checks
│   └── PULL_REQUEST_TEMPLATE.md    # PR template
│
├── css/                             # Stylesheets
│   └── styles.css                  # Main application styles
│
├── js/                              # JavaScript files
│   ├── analytics.js                # Analytics & tracking vulnerabilities
│   ├── api.js                      # API implementation vulnerabilities
│   ├── app.js                      # DOM XSS vulnerabilities
│   ├── auth.js                     # Authentication vulnerabilities
│   └── config.js                   # Hardcoded secrets & API keys
│
├── .gitignore                       # Git ignore rules
├── .htaccess                        # Apache configuration
├── CHANGELOG.md                     # Version history
├── CONTRIBUTING.md                  # Contribution guidelines
├── DEPLOYMENT.md                    # Hostinger deployment guide
├── GITHUB_SETUP.md                  # GitHub repository setup
├── GIT_COMMANDS.md                  # Git command reference
├── LICENSE                          # MIT License
├── PROJECT_STRUCTURE.md             # This file
├── QUICK_REFERENCE.md               # Quick reference card
├── README.md                        # Main documentation
├── SECURITY.md                      # Security policy
├── SETUP_CHECKLIST.md               # Setup checklist
├── SUMMARY.md                       # Project summary
├── index.html                       # Main application page
├── payloads.txt                     # Test payloads collection
└── robots.txt                       # Search engine blocking
```

## 📄 File Descriptions

### Application Files (6 files)

#### index.html
- **Purpose**: Main application page
- **Size**: ~3 KB
- **Description**: Banking interface with login, dashboard, transfer, profile, and support sections
- **Features**: Responsive design, multiple pages, form handling

#### css/styles.css
- **Purpose**: Application styling
- **Size**: ~2 KB
- **Description**: Modern, responsive CSS with gradient backgrounds
- **Features**: Flexbox layout, animations, mobile-friendly

#### js/config.js
- **Purpose**: Configuration with hardcoded secrets
- **Size**: ~3 KB
- **Vulnerabilities**: 20+ hardcoded API keys and secrets
- **Contains**: AWS, Stripe, Firebase, JWT, OAuth, database credentials

#### js/api.js
- **Purpose**: API implementation
- **Size**: ~2 KB
- **Vulnerabilities**: Insecure authentication, exposed endpoints, SQL injection
- **Contains**: Login logic, transfer functions, internal endpoints

#### js/auth.js
- **Purpose**: Authentication management
- **Size**: ~2 KB
- **Vulnerabilities**: Client-side auth, weak sessions, predictable tokens
- **Contains**: Session management, permission checks, debug functions

#### js/app.js
- **Purpose**: Main application logic
- **Size**: ~3 KB
- **Vulnerabilities**: 10+ DOM XSS vulnerabilities
- **Contains**: Form handlers, DOM manipulation, postMessage handlers

#### js/analytics.js
- **Purpose**: Analytics and tracking
- **Size**: ~3 KB
- **Vulnerabilities**: Exposed analytics keys, PII tracking, fingerprinting
- **Contains**: 8+ analytics service integrations, data collection

### Documentation Files (11 files)

#### README.md
- **Purpose**: Main project documentation
- **Size**: ~8 KB
- **Sections**: Purpose, vulnerabilities, testing, deployment, credentials
- **Audience**: All users

#### DEPLOYMENT.md
- **Purpose**: Hostinger deployment guide
- **Size**: ~12 KB
- **Sections**: Step-by-step deployment, troubleshooting, configuration
- **Audience**: Users deploying to Hostinger

#### GITHUB_SETUP.md
- **Purpose**: GitHub repository setup guide
- **Size**: ~10 KB
- **Sections**: Repository creation, configuration, releases, promotion
- **Audience**: Repository owners

#### GIT_COMMANDS.md
- **Purpose**: Git command reference
- **Size**: ~8 KB
- **Sections**: Common commands, workflows, troubleshooting
- **Audience**: Git users

#### QUICK_REFERENCE.md
- **Purpose**: Quick reference card
- **Size**: ~5 KB
- **Sections**: Commands, credentials, payloads, testing
- **Audience**: Active testers

#### SETUP_CHECKLIST.md
- **Purpose**: Complete setup checklist
- **Size**: ~7 KB
- **Sections**: 10 phases with detailed steps
- **Audience**: New users

#### SUMMARY.md
- **Purpose**: Project summary
- **Size**: ~6 KB
- **Sections**: Features, statistics, achievements
- **Audience**: Overview seekers

#### PROJECT_STRUCTURE.md
- **Purpose**: File structure documentation
- **Size**: ~4 KB (this file)
- **Sections**: Directory tree, file descriptions
- **Audience**: Developers

#### SECURITY.md
- **Purpose**: Security policy
- **Size**: ~5 KB
- **Sections**: Responsible use, deployment security, legal
- **Audience**: All users

#### CONTRIBUTING.md
- **Purpose**: Contribution guidelines
- **Size**: ~4 KB
- **Sections**: How to contribute, code style, PR process
- **Audience**: Contributors

#### CHANGELOG.md
- **Purpose**: Version history
- **Size**: ~3 KB
- **Sections**: Releases, changes, planned features
- **Audience**: Users tracking changes

### Configuration Files (8 files)

#### .gitignore
- **Purpose**: Git ignore rules
- **Size**: ~500 bytes
- **Ignores**: OS files, editor files, logs, temp files

#### .htaccess
- **Purpose**: Apache web server configuration
- **Size**: ~400 bytes
- **Features**: Optional password protection, security headers

#### robots.txt
- **Purpose**: Search engine blocking
- **Size**: ~50 bytes
- **Content**: Disallow all crawlers

#### LICENSE
- **Purpose**: MIT License with disclaimer
- **Size**: ~1.5 KB
- **Type**: MIT License (educational use)

#### payloads.txt
- **Purpose**: Test payload collection
- **Size**: ~5 KB
- **Contains**: 50+ XSS, SQL injection, and other payloads

### GitHub Configuration (5 files)

#### .github/ISSUE_TEMPLATE/bug_report.md
- **Purpose**: Bug report template
- **Fields**: Description, steps to reproduce, environment

#### .github/ISSUE_TEMPLATE/feature_request.md
- **Purpose**: Feature request template
- **Fields**: Description, use case, references

#### .github/ISSUE_TEMPLATE/question.md
- **Purpose**: Question template
- **Fields**: Question, context, what tried

#### .github/PULL_REQUEST_TEMPLATE.md
- **Purpose**: Pull request template
- **Fields**: Description, changes, testing, checklist

#### .github/workflows/static-check.yml
- **Purpose**: GitHub Actions workflow
- **Checks**: File existence, HTML validation, vulnerability presence

## 📊 File Statistics

### By Type
- **Application Files**: 7 (HTML, CSS, JS)
- **Documentation**: 11 (Markdown)
- **Configuration**: 8 (Various)
- **GitHub Templates**: 5 (Markdown, YAML)
- **Total Files**: 31

### By Size Category
- **Small** (< 1 KB): 5 files
- **Medium** (1-5 KB): 15 files
- **Large** (5-10 KB): 8 files
- **Extra Large** (> 10 KB): 3 files

### By Language
- **JavaScript**: 5 files (~15 KB)
- **Markdown**: 16 files (~75 KB)
- **HTML**: 1 file (~3 KB)
- **CSS**: 1 file (~2 KB)
- **YAML**: 1 file (~1 KB)
- **Other**: 7 files (~3 KB)

### Lines of Code
- **JavaScript**: ~1,500 lines
- **HTML**: ~100 lines
- **CSS**: ~150 lines
- **Documentation**: ~2,500 lines
- **Total**: ~4,250 lines

## 🎯 File Purpose Matrix

### For Users
| File | Purpose | Priority |
|------|---------|----------|
| README.md | Overview | High |
| QUICK_REFERENCE.md | Quick start | High |
| DEPLOYMENT.md | Deploy guide | Medium |
| SECURITY.md | Safety info | High |
| payloads.txt | Test data | Medium |

### For Contributors
| File | Purpose | Priority |
|------|---------|----------|
| CONTRIBUTING.md | Guidelines | High |
| GIT_COMMANDS.md | Git help | Medium |
| PROJECT_STRUCTURE.md | Overview | Medium |
| CHANGELOG.md | History | Low |

### For Repository Owners
| File | Purpose | Priority |
|------|---------|----------|
| GITHUB_SETUP.md | Setup guide | High |
| SETUP_CHECKLIST.md | Checklist | High |
| SUMMARY.md | Overview | Medium |
| .github/* | Templates | High |

## 🔍 File Dependencies

### index.html depends on:
- css/styles.css
- js/config.js
- js/api.js
- js/auth.js
- js/app.js
- js/analytics.js

### js/app.js depends on:
- js/config.js (APP_CONFIG)
- js/api.js (bankingAPI)
- js/auth.js (authManager)

### js/api.js depends on:
- js/config.js (APP_CONFIG)

### js/analytics.js depends on:
- js/config.js (ANALYTICS_CONFIG)

## 📝 Maintenance Notes

### Files to Update Regularly
1. **CHANGELOG.md** - After each release
2. **README.md** - When adding features
3. **payloads.txt** - When discovering new payloads
4. **SECURITY.md** - When security practices change

### Files to Update Before Release
1. **CHANGELOG.md** - Add release notes
2. **README.md** - Update version badges
3. **SUMMARY.md** - Update statistics

### Files That Rarely Change
1. **LICENSE** - Only if changing license
2. **robots.txt** - Static content
3. **.gitignore** - Only when adding new file types
4. **index.html** - Core structure stable

## 🚀 Quick File Access

### Most Important Files
1. **README.md** - Start here
2. **index.html** - The application
3. **js/config.js** - Main vulnerabilities
4. **DEPLOYMENT.md** - How to deploy

### For Testing
1. **payloads.txt** - Test payloads
2. **QUICK_REFERENCE.md** - Quick commands
3. **js/app.js** - XSS vulnerabilities
4. **js/api.js** - API vulnerabilities

### For Setup
1. **SETUP_CHECKLIST.md** - Step-by-step
2. **GITHUB_SETUP.md** - GitHub setup
3. **GIT_COMMANDS.md** - Git commands
4. **.gitignore** - What to ignore

## 📦 Distribution

### Files to Include in Release
- ✅ All application files (HTML, CSS, JS)
- ✅ README.md
- ✅ DEPLOYMENT.md
- ✅ SECURITY.md
- ✅ LICENSE
- ✅ robots.txt
- ✅ .htaccess
- ✅ payloads.txt

### Files for Repository Only
- .github/* (templates and workflows)
- GITHUB_SETUP.md
- GIT_COMMANDS.md
- SETUP_CHECKLIST.md
- SUMMARY.md
- PROJECT_STRUCTURE.md
- .gitignore

## 🔄 File Update Frequency

### Daily/Weekly
- None (stable project)

### Monthly
- CHANGELOG.md (if changes made)
- README.md (if features added)

### Quarterly
- SECURITY.md (review best practices)
- CONTRIBUTING.md (update guidelines)

### Yearly
- LICENSE (verify year)
- All documentation (review accuracy)

## 📈 Growth Potential

### Possible Future Files
- DOCKER.md (Docker deployment)
- API.md (API documentation)
- TESTING.md (Testing guide)
- ARCHITECTURE.md (Technical architecture)
- FAQ.md (Frequently asked questions)
- ROADMAP.md (Future plans)

### Possible Future Directories
- tests/ (Automated tests)
- docs/ (Additional documentation)
- examples/ (Usage examples)
- scripts/ (Utility scripts)
- docker/ (Docker configuration)

---

**Total Project Size**: ~100 KB  
**Total Files**: 31  
**Total Directories**: 5  
**Last Updated**: 2024-02-17
