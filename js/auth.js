// VULNERABILITY 10: Weak Authentication Logic

class AuthManager {
    constructor() {
        // VULNERABILITY: Hardcoded backup credentials
        this.backupCredentials = {
            username: "backup_admin",
            password: "Backup@2024!",
            apiKey: "backup_api_key_xyz789"
        };
    }

    // VULNERABILITY 11: Client-Side Authorization
    isAdmin() {
        // Never trust client-side checks!
        return localStorage.getItem('isAdmin') === 'true';
    }

    // VULNERABILITY 12: Weak Session Management
    createSession(username) {
        const sessionData = {
            username: username,
            loginTime: Date.now(),
            // VULNERABILITY: Predictable session token
            sessionToken: btoa(username + ":" + Date.now()),
            permissions: this.getPermissions(username)
        };
        
        // Store in localStorage - VULNERABILITY
        localStorage.setItem('session', JSON.stringify(sessionData));
        
        // Also store in cookie without HttpOnly flag - VULNERABILITY
        document.cookie = `session=${sessionData.sessionToken}; path=/`;
        
        return sessionData;
    }

    // VULNERABILITY 13: Exposed Permission System
    getPermissions(username) {
        const permissions = {
            "admin": ["read", "write", "delete", "admin", "transfer_unlimited"],
            "user": ["read", "write", "transfer_limited"],
            "guest": ["read"]
        };
        
        return permissions[username] || permissions["guest"];
    }

    // VULNERABILITY 14: No Rate Limiting Info
    checkRateLimit() {
        // Client-side rate limiting can be bypassed
        const attempts = parseInt(localStorage.getItem('loginAttempts') || '0');
        if (attempts > 100) {
            localStorage.setItem('loginAttempts', '0'); // Easy to reset
            return false;
        }
        return true;
    }

    // VULNERABILITY 15: Password Reset Token in URL
    generatePasswordResetLink(email) {
        const resetToken = btoa(email + ":" + Date.now());
        return `https://vulnbank.com/reset-password?token=${resetToken}&email=${email}`;
    }

    // VULNERABILITY 16: Exposed User Enumeration
    checkUserExists(username) {
        const users = ["admin", "user", "john", "sarah", "test", "alice", "bob"];
        return users.includes(username);
    }
}

window.authManager = new AuthManager();

// VULNERABILITY 17: Debug Functions Exposed
window.debugAuth = {
    showAllUsers: function() {
        return ["admin", "user", "john", "sarah", "test"];
    },
    showAllPasswords: function() {
        return {
            "admin": "admin123",
            "user": "password",
            "john": "john2024"
        };
    },
    bypassAuth: function() {
        localStorage.setItem('isAdmin', 'true');
        localStorage.setItem('authToken', window.bankingAPI.apiToken);
        console.log("Authentication bypassed!");
    }
};
