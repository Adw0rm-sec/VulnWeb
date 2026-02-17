# Security Policy

## ⚠️ Important Notice

**VulnBank is an INTENTIONALLY VULNERABLE application designed for educational and security testing purposes.**

This application contains deliberate security vulnerabilities and should NEVER be deployed in production environments or used with real user data.

## Purpose

VulnBank is designed to:
- Test security scanning tools (like [VISTA](https://github.com/Adw0rm-sec/VISTA))
- Provide hands-on security training
- Demonstrate real-world vulnerabilities
- Help developers understand common security mistakes

## Intended Use

✅ **Appropriate Use:**
- Security tool testing and validation
- Educational purposes and training
- Penetration testing practice
- Security research in controlled environments
- Bug bounty tool development

❌ **Inappropriate Use:**
- Production deployments
- Storing real user data
- Processing real financial transactions
- Any use with actual sensitive information
- Malicious purposes or unauthorized testing

## Responsible Disclosure

### For VulnBank Itself

Since this is an intentionally vulnerable application, we do NOT accept security vulnerability reports for the vulnerabilities that are intentionally included.

However, if you discover:
- Unintended vulnerabilities beyond the documented ones
- Issues with the documentation
- Problems with the deployment process
- Security concerns with the repository itself

Please report them by:
1. Opening a GitHub issue
2. Labeling it with `security`
3. Providing clear details

### For VISTA or Related Tools

If you discover vulnerabilities in VISTA or related security tools while using VulnBank, please follow their respective security policies:
- [VISTA Security Policy](https://github.com/Adw0rm-sec/VISTA/security/policy)

## Deployment Security

If you deploy VulnBank for testing:

### Required Precautions

1. **Isolate the Environment**
   - Use a separate, isolated server
   - Do not deploy on shared infrastructure
   - Keep away from production networks

2. **Access Control**
   - Implement password protection (see .htaccess)
   - Use IP whitelisting if possible
   - Limit access to authorized testers only

3. **Prevent Indexing**
   - Use the included robots.txt
   - Add noindex meta tags
   - Block search engine crawlers

4. **Monitor Access**
   - Review access logs regularly
   - Set up alerts for unusual activity
   - Monitor bandwidth usage

5. **Time-Limited Deployment**
   - Deploy only when actively testing
   - Take down immediately after testing
   - Do not leave running indefinitely

6. **No Real Data**
   - Never use real credentials
   - Never store actual user information
   - Never process real financial data
   - Use only test/dummy data

### Recommended .htaccess Configuration

```apache
# Password protection
AuthType Basic
AuthName "Restricted Testing Area"
AuthUserFile /path/to/.htpasswd
Require valid-user

# IP Whitelist (optional)
Order Deny,Allow
Deny from all
Allow from YOUR.IP.ADDRESS.HERE
```

### Recommended robots.txt (included)

```
User-agent: *
Disallow: /
```

## Legal Considerations

### Authorization Required

- Only test systems you own or have explicit permission to test
- Obtain written authorization before testing third-party systems
- Comply with all applicable laws and regulations
- Follow responsible disclosure practices

### Disclaimer

The creators and contributors of VulnBank:
- Are NOT responsible for misuse of this software
- Are NOT liable for any damages caused by this software
- Do NOT endorse unauthorized testing or malicious use
- Provide this software "AS IS" without warranty

### Terms of Use

By using VulnBank, you agree to:
- Use it only for legal, authorized purposes
- Not deploy it in production environments
- Not use it with real user data
- Take full responsibility for your use of the software
- Comply with all applicable laws and regulations

## Reporting Misuse

If you discover VulnBank being misused:

1. **Do NOT interact with the deployment**
2. **Document the misuse** (URL, screenshots, etc.)
3. **Report to the hosting provider** if applicable
4. **Notify us** by opening a GitHub issue

## Security Best Practices for Users

### Before Deployment

- [ ] Read all documentation thoroughly
- [ ] Understand all vulnerabilities included
- [ ] Plan your testing scope
- [ ] Prepare isolated environment
- [ ] Set up access controls

### During Testing

- [ ] Monitor access logs
- [ ] Use only test data
- [ ] Document findings
- [ ] Keep deployment isolated
- [ ] Limit access to authorized users

### After Testing

- [ ] Take down the deployment
- [ ] Delete all test data
- [ ] Review and document findings
- [ ] Share learnings responsibly
- [ ] Do not publish live URLs

## Educational Resources

To learn more about the vulnerabilities in VulnBank:

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [PortSwigger Web Security Academy](https://portswigger.net/web-security)
- [HackerOne Disclosed Reports](https://hackerone.com/hacktivity)
- [CWE Top 25](https://cwe.mitre.org/top25/)

## Contact

For security-related questions or concerns:
- Open a GitHub issue with the `security` label
- Do NOT email security vulnerabilities (this is an intentionally vulnerable app)

## Updates

This security policy may be updated periodically. Check back regularly for changes.

---

**Last Updated:** 2024

**Remember:** VulnBank is a tool for learning and testing. Use it responsibly, legally, and ethically.
