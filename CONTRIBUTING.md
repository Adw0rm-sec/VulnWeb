# Contributing to VulnBank

Thank you for your interest in contributing to VulnBank! This project aims to provide a comprehensive vulnerable web application for testing security tools like [VISTA](https://github.com/Adw0rm-sec/VISTA).

## How to Contribute

### Reporting Issues

If you find any problems or have suggestions:

1. Check if the issue already exists in [Issues](../../issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (if applicable)
   - Expected vs actual behavior
   - Screenshots (if relevant)

### Adding New Vulnerabilities

We welcome contributions of new vulnerability types:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/new-vulnerability-type
   ```

3. **Add your vulnerability**
   - Add code to appropriate JS file
   - Document the vulnerability type
   - Add comments explaining the vulnerability
   - Include references (OWASP, CWE, HackerOne reports)

4. **Update documentation**
   - Add to README.md vulnerability list
   - Include test instructions
   - Add example payloads if applicable

5. **Test your changes**
   - Verify the vulnerability is detectable
   - Test with VISTA if possible
   - Ensure existing functionality still works

6. **Submit a Pull Request**
   - Clear description of changes
   - Reference any related issues
   - Explain why the vulnerability is valuable for testing

### Vulnerability Guidelines

Good vulnerability contributions should:

- ✅ Be based on real-world vulnerabilities
- ✅ Be detectable by security tools
- ✅ Include clear documentation
- ✅ Have references to CVEs, OWASP, or bug bounty reports
- ✅ Be educational and demonstrate clear security concepts
- ❌ Not include actual malicious code
- ❌ Not compromise real systems or data

### Code Style

- Use clear, descriptive variable names
- Add comments explaining vulnerabilities
- Include vulnerability numbers (e.g., `// VULNERABILITY 31: ...`)
- Follow existing code structure
- Keep code readable and educational

### Example Contribution

```javascript
// VULNERABILITY 31: Prototype Pollution
// Reference: OWASP, CWE-1321
// Based on: HackerOne Report #XXXXXX

function mergeObjects(target, source) {
    // Vulnerable to prototype pollution
    for (let key in source) {
        target[key] = source[key];
    }
    return target;
}

// Exploit: mergeObjects({}, JSON.parse('{"__proto__":{"isAdmin":true}}'))
```

### Documentation Contributions

Help improve documentation:

- Fix typos or unclear instructions
- Add deployment guides for other platforms
- Improve testing instructions
- Add more XSS/injection payloads
- Translate documentation

### Testing Contributions

Help test VulnBank:

- Test with different security tools
- Verify vulnerabilities are detectable
- Test deployment on different platforms
- Report compatibility issues

## Development Setup

1. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/vulnbank.git
   cd vulnbank
   ```

2. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make changes and test**
   ```bash
   python3 -m http.server 8000
   # Test in browser at http://localhost:8000
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: Description of your changes"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template

## Commit Message Guidelines

Use clear, descriptive commit messages:

- `Add: New SSRF vulnerability in API endpoint`
- `Fix: Correct XSS payload in documentation`
- `Update: Improve deployment instructions`
- `Docs: Add testing guide for Burp Suite`

## Pull Request Process

1. Ensure your PR description clearly explains the changes
2. Reference any related issues
3. Update documentation as needed
4. Wait for review from maintainers
5. Address any requested changes
6. Once approved, your PR will be merged

## Code of Conduct

### Our Standards

- Be respectful and inclusive
- Focus on educational value
- Provide constructive feedback
- Help others learn about security

### Unacceptable Behavior

- Using vulnerabilities for malicious purposes
- Sharing exploits for active/unpatched systems
- Harassment or discriminatory language
- Publishing others' private information

## Questions?

- Open an issue for questions
- Tag with `question` label
- Check existing issues first

## Recognition

Contributors will be:
- Listed in README.md
- Credited in release notes
- Acknowledged in documentation

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for helping make VulnBank a better educational resource for the security community!
