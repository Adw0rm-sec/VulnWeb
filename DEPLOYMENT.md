# Hostinger Deployment Guide for VulnBank

## Quick Start

### Step 1: Prepare Your Files
1. Download/clone the VulnBank repository
2. Ensure you have all files:
   - index.html
   - css/styles.css
   - js/config.js
   - js/api.js
   - js/auth.js
   - js/app.js
   - js/analytics.js
   - robots.txt
   - .htaccess

### Step 2: Get Hostinger Account
1. Visit [Hostinger.com](https://www.hostinger.com)
2. Choose a hosting plan:
   - **Single Shared Hosting** ($2-3/month) - Perfect for this
   - **Premium Shared Hosting** - More features
   - **VPS** - If you need more control
3. Complete registration and payment

### Step 3: Access Hostinger Control Panel
1. Login to [hPanel](https://hpanel.hostinger.com)
2. Navigate to your hosting account
3. Click "Manage" next to your domain

## Deployment Method 1: File Manager (Recommended for Beginners)

### Step-by-Step Instructions

1. **Open File Manager**
   - In hPanel, click "File Manager" under "Files" section
   - You'll see the file browser interface

2. **Navigate to public_html**
   - Click on `public_html` folder
   - This is your web root directory
   - Delete any default files (index.html, etc.)

3. **Upload VulnBank Files**
   - Click "Upload Files" button (top right)
   - Select all VulnBank files and folders
   - Wait for upload to complete (progress bar will show)

4. **Verify Structure**
   Your `public_html` should look like:
   ```
   public_html/
   ├── index.html
   ├── robots.txt
   ├── .htaccess
   ├── css/
   │   └── styles.css
   └── js/
       ├── config.js
       ├── api.js
       ├── auth.js
       ├── app.js
       └── analytics.js
   ```

5. **Set Permissions** (usually automatic)
   - Files: 644
   - Directories: 755
   - Right-click → Permissions if needed

6. **Test Your Site**
   - Visit: `http://yourdomain.com`
   - Or: `http://your-subdomain.hostinger.com`

## Deployment Method 2: FTP (FileZilla)

### Prerequisites
- Download [FileZilla](https://filezilla-project.org/) (free FTP client)

### Get FTP Credentials

1. In hPanel, go to "FTP Accounts"
2. Note your credentials:
   - **Host**: ftp.yourdomain.com (or IP address)
   - **Username**: Usually your domain or account name
   - **Password**: Set or retrieve from hPanel
   - **Port**: 21 (standard FTP)

### Connect and Upload

1. **Open FileZilla**
   - File → Site Manager → New Site

2. **Enter Connection Details**
   ```
   Protocol: FTP
   Host: ftp.yourdomain.com
   Port: 21
   Encryption: Use explicit FTP over TLS if available
   Logon Type: Normal
   User: your-ftp-username
   Password: your-ftp-password
   ```

3. **Connect**
   - Click "Connect"
   - Accept certificate if prompted

4. **Upload Files**
   - Left panel: Your local VulnBank folder
   - Right panel: Navigate to `/public_html`
   - Drag and drop all files from left to right
   - Wait for transfer to complete

5. **Verify Upload**
   - Check all files are present in `/public_html`
   - Verify folder structure is maintained

## Deployment Method 3: SSH/Git (Advanced)

### Prerequisites
- SSH access (available on Business/VPS plans)
- Git installed on server

### Steps

1. **Enable SSH in hPanel**
   - Go to "Advanced" → "SSH Access"
   - Enable SSH and note credentials

2. **Connect via SSH**
   ```bash
   ssh username@yourdomain.com
   # Or use IP: ssh username@123.456.789.0
   ```

3. **Navigate to Web Root**
   ```bash
   cd public_html
   ```

4. **Option A: Upload via Git**
   ```bash
   # If you have a Git repository
   git clone https://github.com/yourusername/vulnbank.git temp
   mv temp/* .
   mv temp/.htaccess .
   rm -rf temp
   ```

5. **Option B: Upload via SCP**
   ```bash
   # From your local machine
   scp -r vulnbank/* username@yourdomain.com:~/public_html/
   ```

## Post-Deployment Configuration

### 1. Enable SSL Certificate (Recommended)

1. In hPanel, go to "SSL"
2. Select your domain
3. Click "Install SSL" (free Let's Encrypt)
4. Wait 5-10 minutes for activation
5. Test: `https://yourdomain.com`

### 2. Configure Domain (if using subdomain)

If you want a custom subdomain:
1. Go to "Domains" in hPanel
2. Click "Create Subdomain"
3. Enter: `vulnbank.yourdomain.com`
4. Point to `/public_html`

### 3. Update Configuration (Optional)

Edit `js/config.js` if you need to update URLs:
```javascript
API_BASE_URL: "https://yourdomain.com/api",
```

### 4. Add Security Warning Banner

Create a visible warning on the page. Edit `index.html` after `<header>`:
```html
<div style="background:#ff0000;color:#fff;padding:10px;text-align:center;">
    ⚠️ WARNING: This is an intentionally vulnerable application for security testing only!
</div>
```

### 5. Password Protection (Recommended)

1. **Create .htpasswd file**
   - In hPanel File Manager, create `.htpasswd` in `/public_html`
   - Or use online generator: [htpasswd generator](https://hostingcanada.org/htpasswd-generator/)

2. **Generate password hash**
   ```
   testuser:$apr1$xyz$hashedpassword
   ```

3. **Update .htaccess**
   Uncomment the password protection section:
   ```apache
   AuthType Basic
   AuthName "VulnBank Testing Area"
   AuthUserFile /home/username/public_html/.htpasswd
   Require valid-user
   ```

## Testing Your Deployment

### 1. Basic Access Test
```bash
# Test if site is accessible
curl -I https://yourdomain.com

# Should return 200 OK
```

### 2. File Access Test
Visit these URLs:
- `https://yourdomain.com/` (main page)
- `https://yourdomain.com/js/config.js` (should load)
- `https://yourdomain.com/css/styles.css` (should load)

### 3. Burp Suite Test

1. **Configure Burp Proxy**
   - Proxy → Options → 127.0.0.1:8080

2. **Configure Browser**
   - Set proxy to 127.0.0.1:8080
   - Install Burp CA certificate

3. **Browse Your Site**
   - Visit `https://yourdomain.com`
   - Interact with all features
   - Check Burp HTTP History

4. **Verify VISTA Detection**
   - Open VISTA extension in Burp
   - Check Traffic Monitor tab
   - Verify vulnerabilities are detected

## Troubleshooting

### Issue: 403 Forbidden
**Solution**: Check file permissions
```bash
# Via SSH
chmod 644 index.html
chmod 755 css js
chmod 644 css/* js/*
```

### Issue: 404 Not Found
**Solution**: Verify files are in correct location
- Files must be in `/public_html`, not a subdirectory
- Check file names are correct (case-sensitive)

### Issue: CSS/JS Not Loading
**Solution**: Check paths in index.html
- Paths should be relative: `css/styles.css` not `/css/styles.css`
- Clear browser cache

### Issue: SSL Not Working
**Solution**: 
- Wait 10-15 minutes after SSL installation
- Clear browser cache
- Check SSL status in hPanel

### Issue: Can't Access via FTP
**Solution**:
- Verify FTP credentials in hPanel
- Check firewall isn't blocking port 21
- Try passive mode in FileZilla

## Hostinger-Specific Tips

### Free Features You Get
- Free SSL certificate (Let's Encrypt)
- Free subdomain (yourname.hostinger.com)
- File Manager (no FTP client needed)
- 99.9% uptime guarantee
- 24/7 support

### Resource Limits (Shared Hosting)
- **Disk Space**: 30-100GB (plenty for VulnBank)
- **Bandwidth**: Usually unlimited
- **Inodes**: 250,000+ (file count limit)
- **CPU/RAM**: Shared, but sufficient for static site

### Performance Optimization
1. Enable Cloudflare (free in hPanel)
2. Enable browser caching in .htaccess
3. Compress files (gzip)

### Backup Your Site
1. hPanel → Backups
2. Create manual backup before testing
3. Download backup to local machine

## Security Considerations

⚠️ **IMPORTANT REMINDERS**

1. **This is a vulnerable application**
   - Do not use for real banking
   - Do not store real user data
   - Do not leave running indefinitely

2. **Add robots.txt** (already included)
   - Prevents search engine indexing

3. **Monitor Access Logs**
   - hPanel → Statistics → Access Logs
   - Watch for unusual activity

4. **Set Up Alerts**
   - Monitor bandwidth usage
   - Check for abuse

5. **Take Down After Testing**
   - Delete files when done
   - Or password protect

## Cost Estimate

### Hostinger Pricing (as of 2024)
- **Single Shared**: $2.99/month (48-month plan)
- **Premium Shared**: $3.99/month
- **Business Shared**: $4.99/month

### What You Need
- **Minimum**: Single Shared Hosting
- **Recommended**: Premium (includes free domain)

### Total Cost for Testing
- 1 month: ~$10 (monthly billing)
- 3 months: ~$15 (better rate)
- Or use free trial if available

## Alternative Free Options

If you want to test before paying:

1. **Netlify** (Free tier)
   - Drag and drop deployment
   - Free SSL
   - Custom domain support

2. **GitHub Pages** (Free)
   - Push to GitHub repository
   - Enable Pages in settings
   - Access via username.github.io

3. **Vercel** (Free tier)
   - Connect GitHub repo
   - Automatic deployments
   - Free SSL

4. **Local Testing**
   - Python: `python3 -m http.server 8000`
   - Node: `npx http-server`
   - PHP: `php -S localhost:8000`

## Support Resources

- **Hostinger Knowledge Base**: https://support.hostinger.com
- **Hostinger Live Chat**: Available 24/7 in hPanel
- **Community Forum**: https://www.hostinger.com/forum
- **Video Tutorials**: YouTube - "Hostinger Tutorials"

## Next Steps After Deployment

1. ✅ Verify site is accessible
2. ✅ Test through Burp Suite
3. ✅ Run VISTA analysis
4. ✅ Document findings
5. ✅ Test vulnerability detection
6. ✅ Export VISTA reports
7. ✅ Clean up when done

## Questions?

If you encounter issues:
1. Check Hostinger support docs
2. Contact Hostinger live chat
3. Review this guide's troubleshooting section
4. Check VISTA documentation

---

**Remember**: This is for educational and testing purposes only. Always follow responsible disclosure practices and never deploy vulnerable applications to production environments with real user data.
