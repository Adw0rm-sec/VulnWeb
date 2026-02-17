# CI/CD Setup Guide for VulnBank

Complete guide to set up automated deployment from GitHub to Hostinger.

## 🎯 Overview

This CI/CD pipeline automatically deploys VulnBank to Hostinger whenever you push to the `main` branch.

**Workflows Created:**
1. **deploy.yml** - Main FTP deployment (automatic on push)
2. **deploy-ssh.yml** - SSH deployment (manual trigger only)
3. **test.yml** - Automated testing (runs on push/PR)

## 📋 Prerequisites

Before setting up CI/CD, you need:

1. ✅ GitHub repository (already done)
2. ✅ Hostinger hosting account
3. ✅ FTP or SSH access to Hostinger
4. ✅ Domain configured on Hostinger

## 🔧 Setup Instructions

### Step 1: Get Hostinger Credentials

#### Option A: FTP Credentials (Recommended - Works on all plans)

1. **Login to Hostinger hPanel**: https://hpanel.hostinger.com
2. **Go to**: Hosting → Manage → FTP Accounts
3. **Note down**:
   - **FTP Server**: Usually `ftp.yourdomain.com` or an IP like `123.456.789.0`
   - **FTP Username**: Your FTP username (e.g., `u123456789`)
   - **FTP Password**: Your FTP password
   - **FTP Port**: Usually `21`
   - **Remote Directory**: Usually `/public_html` or `/public_html/vulnbank`

#### Option B: SSH Credentials (Advanced - Requires Business/VPS plan)

1. **Login to Hostinger hPanel**
2. **Go to**: Advanced → SSH Access
3. **Enable SSH** if not already enabled
4. **Note down**:
   - **SSH Host**: Your domain or IP
   - **SSH Username**: Your SSH username
   - **SSH Port**: Usually `22`
   - **Remote Path**: `/home/username/public_html`

5. **Generate SSH Key** (on your local machine):
   ```bash
   ssh-keygen -t ed25519 -C "github-actions" -f ~/.ssh/hostinger_deploy
   cat ~/.ssh/hostinger_deploy.pub
   ```

6. **Add public key to Hostinger**:
   - Copy the public key content
   - In hPanel: SSH Access → Add SSH Key
   - Paste and save

### Step 2: Add GitHub Secrets

1. **Go to your GitHub repository**: https://github.com/Adw0rm-sec/VulnWeb

2. **Navigate to**: Settings → Secrets and variables → Actions

3. **Click**: "New repository secret"

4. **Add the following secrets**:

#### For FTP Deployment (deploy.yml):

| Secret Name | Value | Example |
|-------------|-------|---------|
| `FTP_SERVER` | Your FTP server address | `ftp.yourdomain.com` or `123.456.789.0` |
| `FTP_USERNAME` | Your FTP username | `u123456789` |
| `FTP_PASSWORD` | Your FTP password | `YourSecurePassword123!` |
| `FTP_PORT` | FTP port (optional) | `21` |
| `FTP_SERVER_DIR` | Remote directory | `/public_html/` or `/public_html/vulnbank/` |
| `SITE_URL` | Your website URL | `https://yourdomain.com` |

#### For SSH Deployment (deploy-ssh.yml):

| Secret Name | Value | Example |
|-------------|-------|---------|
| `SSH_HOST` | Your SSH host | `yourdomain.com` or `123.456.789.0` |
| `SSH_USERNAME` | Your SSH username | `u123456789` |
| `SSH_PRIVATE_KEY` | Your private SSH key | Content of `~/.ssh/hostinger_deploy` |
| `SSH_REMOTE_PATH` | Remote directory | `/home/username/public_html/` |
| `SITE_URL` | Your website URL | `https://yourdomain.com` |

### Step 3: Configure Deployment

#### Choose Your Deployment Method

**Method 1: FTP Deployment (Automatic)**
- Uses `deploy.yml` workflow
- Triggers automatically on push to `main`
- Works with all Hostinger plans
- Simpler setup

**Method 2: SSH Deployment (Manual)**
- Uses `deploy-ssh.yml` workflow
- Manual trigger only (via GitHub Actions UI)
- Requires SSH access (Business/VPS plans)
- More secure and faster

### Step 4: Test the Deployment

#### Test FTP Deployment:

1. **Make a small change** to any file (e.g., add a comment)
   ```bash
   echo "<!-- Test deployment -->" >> index.html
   git add index.html
   git commit -m "Test: CI/CD deployment"
   git push origin main
   ```

2. **Watch the deployment**:
   - Go to: https://github.com/Adw0rm-sec/VulnWeb/actions
   - Click on the latest workflow run
   - Monitor the deployment progress

3. **Verify deployment**:
   - Visit your Hostinger domain
   - Check if changes are live

#### Test SSH Deployment:

1. **Go to**: https://github.com/Adw0rm-sec/VulnWeb/actions

2. **Click**: "Deploy to Hostinger (SSH)" workflow

3. **Click**: "Run workflow" button

4. **Select**: Environment (production/staging)

5. **Click**: "Run workflow"

6. **Monitor**: The deployment progress

## 🔄 How It Works

### Automatic Deployment (FTP)

```
Push to main → GitHub Actions triggers → Run tests → Deploy via FTP → Site updated
```

**Workflow Steps:**
1. ✅ Checkout code from repository
2. ✅ Validate all required files exist
3. ✅ Create deployment package
4. ✅ Upload to Hostinger via FTP
5. ✅ Verify deployment success
6. ✅ Send notification

### Manual Deployment (SSH)

```
Manual trigger → GitHub Actions runs → Deploy via SSH/rsync → Site updated
```

**Workflow Steps:**
1. ✅ Checkout code
2. ✅ Setup SSH connection
3. ✅ Sync files via rsync
4. ✅ Cleanup SSH keys
5. ✅ Confirm deployment

### Automated Testing

```
Push/PR → Run tests → Validate HTML → Check vulnerabilities → Test server
```

**Test Steps:**
1. ✅ Validate HTML structure
2. ✅ Verify vulnerabilities present
3. ✅ Check file structure
4. ✅ Validate documentation
5. ✅ Test local server

## 📊 Monitoring Deployments

### View Deployment Status

1. **Go to**: https://github.com/Adw0rm-sec/VulnWeb/actions

2. **See**:
   - ✅ Green checkmark = Successful deployment
   - ❌ Red X = Failed deployment
   - 🟡 Yellow dot = In progress

### View Deployment Logs

1. Click on any workflow run
2. Click on the job name (e.g., "Deploy VulnBank to Hostinger")
3. Expand steps to see detailed logs

### Deployment Notifications

The workflow will show:
- Commit hash deployed
- Who triggered the deployment
- Deployment timestamp
- Success/failure status

## 🛠️ Customization

### Change Deployment Trigger

Edit `.github/workflows/deploy.yml`:

```yaml
# Deploy only on tags
on:
  push:
    tags:
      - 'v*'

# Deploy on specific branch
on:
  push:
    branches:
      - production
```

### Exclude Files from Deployment

Edit the `exclude` section in `deploy.yml`:

```yaml
exclude: |
  **/.git*
  **/node_modules/**
  **/tests/**
  **/*.test.js
```

### Add Build Steps

If you need to build/compile before deployment:

```yaml
- name: Build project
  run: |
    npm install
    npm run build
```

### Add Notifications

Add Slack/Discord notifications:

```yaml
- name: Notify Slack
  if: success()
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

## 🔒 Security Best Practices

### Secrets Management

✅ **DO**:
- Store all credentials as GitHub Secrets
- Use different credentials for staging/production
- Rotate credentials regularly
- Use SSH keys instead of passwords when possible

❌ **DON'T**:
- Commit credentials to repository
- Share secrets in plain text
- Use the same password everywhere
- Leave default credentials

### Deployment Security

1. **Use HTTPS**: Ensure your site uses SSL
2. **Limit Access**: Only deploy from protected branches
3. **Review Changes**: Use pull requests before merging
4. **Monitor Logs**: Check deployment logs regularly

## 🐛 Troubleshooting

### Deployment Fails with "Connection Refused"

**Problem**: Can't connect to FTP/SSH server

**Solutions**:
1. Verify FTP_SERVER/SSH_HOST is correct
2. Check if port is correct (21 for FTP, 22 for SSH)
3. Ensure firewall allows GitHub Actions IPs
4. Test credentials manually from your computer

### Deployment Succeeds but Site Not Updated

**Problem**: Files uploaded but not visible

**Solutions**:
1. Check FTP_SERVER_DIR is correct (should end with `/`)
2. Verify you're uploading to the right directory
3. Check file permissions on Hostinger
4. Clear browser cache and check again

### "Permission Denied" Error

**Problem**: No write access to directory

**Solutions**:
1. Verify FTP/SSH username has write permissions
2. Check directory ownership on Hostinger
3. Ensure remote directory exists
4. Contact Hostinger support if needed

### Files Missing After Deployment

**Problem**: Some files not uploaded

**Solutions**:
1. Check the `exclude` list in workflow
2. Verify files exist in repository
3. Check deployment logs for errors
4. Ensure file names don't have special characters

### SSH Key Authentication Fails

**Problem**: SSH deployment can't authenticate

**Solutions**:
1. Verify SSH_PRIVATE_KEY is complete (including headers)
2. Check public key is added to Hostinger
3. Ensure key format is correct (no extra spaces/newlines)
4. Test SSH connection manually first

## 📈 Advanced Features

### Multi-Environment Deployment

Deploy to staging and production:

```yaml
on:
  push:
    branches:
      - main        # Deploy to production
      - develop     # Deploy to staging
```

### Rollback on Failure

Add rollback capability:

```yaml
- name: Backup current deployment
  run: |
    # Create backup before deploying
    
- name: Rollback on failure
  if: failure()
  run: |
    # Restore from backup
```

### Deployment Approval

Require manual approval:

```yaml
environment:
  name: production
  url: https://yourdomain.com
```

Then configure environment protection rules in GitHub.

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [FTP-Deploy-Action](https://github.com/SamKirkland/FTP-Deploy-Action)
- [Hostinger Help Center](https://support.hostinger.com)
- [SSH Key Setup Guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

## ✅ Checklist

Before going live:

- [ ] GitHub Secrets configured
- [ ] FTP/SSH credentials tested
- [ ] Test deployment successful
- [ ] Site accessible at domain
- [ ] SSL certificate active
- [ ] Deployment logs reviewed
- [ ] Rollback plan in place
- [ ] Team notified of CI/CD setup

## 🆘 Getting Help

If you encounter issues:

1. Check deployment logs in GitHub Actions
2. Review this documentation
3. Test credentials manually
4. Contact Hostinger support
5. Open an issue on GitHub

---

**CI/CD Pipeline Status**: Ready to deploy! 🚀

**Next Steps**: Configure GitHub Secrets and test your first deployment.
