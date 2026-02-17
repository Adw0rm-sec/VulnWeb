// VULNERABILITY 3: Insecure API Implementation with Token Exposure

class BankingAPI {
    constructor() {
        // Hardcoded API tokens
        this.apiToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFkbWluIFVzZXIiLCJpYXQiOjE1MTYyMzkwMjIsInJvbGUiOiJhZG1pbiJ9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
        this.refreshToken = "refresh_token_abc123def456ghi789jkl012mno345pqr678stu901vwx234yz";
        this.sessionId = "sess_1234567890abcdefghijklmnopqrstuvwxyz";
    }

    // VULNERABILITY 4: Insecure Authentication Check
    async login(username, password) {
        // Client-side authentication - CRITICAL VULNERABILITY
        const validUsers = {
            "admin": "admin123",
            "user": "password",
            "john": "john2024",
            "sarah": "sarah@bank",
            "test": "test123"
        };

        if (validUsers[username] === password) {
            // Store sensitive data in localStorage - VULNERABILITY
            localStorage.setItem('authToken', this.apiToken);
            localStorage.setItem('refreshToken', this.refreshToken);
            localStorage.setItem('username', username);
            localStorage.setItem('sessionId', this.sessionId);
            localStorage.setItem('isAdmin', username === 'admin' ? 'true' : 'false');
            
            return {
                success: true,
                token: this.apiToken,
                user: {
                    username: username,
                    role: username === 'admin' ? 'admin' : 'user',
                    accountNumber: this.generateAccountNumber(),
                    ssn: "123-45-6789", // VULNERABILITY: Exposing SSN
                    balance: Math.floor(Math.random() * 100000)
                }
            };
        }
        
        return { success: false, message: "Invalid credentials" };
    }

    // VULNERABILITY 5: Predictable Account Number Generation
    generateAccountNumber() {
        return "ACC" + Date.now().toString().slice(-8);
    }

    // VULNERABILITY 6: No CSRF Protection
    async transfer(recipient, amount, note) {
        // Simulated transfer without CSRF token
        const data = {
            from: localStorage.getItem('username'),
            to: recipient,
            amount: amount,
            note: note,
            timestamp: new Date().toISOString(),
            authToken: localStorage.getItem('authToken')
        };

        console.log("Transfer data:", data); // VULNERABILITY: Logging sensitive data
        
        return {
            success: true,
            transactionId: "TXN" + Math.random().toString(36).substr(2, 9).toUpperCase(),
            data: data
        };
    }

    // VULNERABILITY 7: Exposed Internal API Endpoints
    getInternalEndpoints() {
        return {
            userManagement: "https://internal-api.vulnbank.com/admin/users",
            databaseAccess: "https://internal-api.vulnbank.com/db/query",
            backupSystem: "https://internal-api.vulnbank.com/backup/download",
            logsAccess: "https://internal-api.vulnbank.com/logs/view",
            configUpdate: "https://internal-api.vulnbank.com/config/update",
            // Debug endpoint with no authentication
            debugEndpoint: "https://api.vulnbank.com/debug?token=" + this.apiToken
        };
    }

    // VULNERABILITY 8: SQL Injection Vulnerable Endpoint (simulated)
    async searchTransactions(query) {
        // This would be vulnerable to SQL injection on the backend
        const sqlQuery = `SELECT * FROM transactions WHERE note LIKE '%${query}%'`;
        console.log("Executing query:", sqlQuery);
        return { query: sqlQuery };
    }
}

// Make API globally accessible
window.bankingAPI = new BankingAPI();

// VULNERABILITY 9: Exposed API Keys in Comments
/*
 * Production API Keys (DO NOT COMMIT):
 * - Stripe: sk_live_51HqK8xJ9YourStripeSecretKey123456789
 * - AWS: AKIAIOSFODNN7EXAMPLE
 * - Database: mongodb://admin:P@ssw0rd123!@prod-db.vulnbank.com:27017
 * 
 * Backup server: backup.vulnbank.com
 * SSH Key: ~/.ssh/vulnbank_prod_rsa
 */
