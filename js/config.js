// VULNERABILITY 1: Hardcoded API Keys and Secrets
// Multiple exposed credentials that should never be in client-side code

const CONFIG = {
    // AWS Credentials - CRITICAL EXPOSURE
    AWS_ACCESS_KEY_ID: "AKIAIOSFODNN7EXAMPLE",
    AWS_SECRET_ACCESS_KEY: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    AWS_REGION: "us-east-1",
    AWS_S3_BUCKET: "vulnbank-documents",
    
    // Database Connection String - CRITICAL
    DB_CONNECTION_STRING: "mongodb://admin:P@ssw0rd123!@prod-db.vulnbank.com:27017/banking",
    
    // API Keys for Third-Party Services
    STRIPE_SECRET_KEY: "sk_live_51HqK8xJ9YourStripeSecretKey123456789",
    STRIPE_PUBLISHABLE_KEY: "pk_live_51HqK8xJ9YourPublishableKey",
    
    GOOGLE_MAPS_API_KEY: "AIzaSyDxVxKGsL9YourGoogleMapsAPIKey123",
    GOOGLE_ANALYTICS_ID: "UA-123456789-1",
    
    SENDGRID_API_KEY: "SG.YourSendGridAPIKey.1234567890abcdefghijklmnop",
    
    TWILIO_ACCOUNT_SID: "AC1234567890abcdef1234567890abcdef",
    TWILIO_AUTH_TOKEN: "your_twilio_auth_token_here_123456",
    
    // Firebase Configuration - EXPOSED
    FIREBASE_API_KEY: "AIzaSyBxYourFirebaseAPIKey123456789",
    FIREBASE_AUTH_DOMAIN: "vulnbank-app.firebaseapp.com",
    FIREBASE_PROJECT_ID: "vulnbank-app",
    FIREBASE_STORAGE_BUCKET: "vulnbank-app.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "123456789012",
    FIREBASE_APP_ID: "1:123456789012:web:abcdef123456",
    
    // JWT Secret - CRITICAL VULNERABILITY
    JWT_SECRET: "super_secret_jwt_key_that_should_be_on_server_only_2024!",
    JWT_EXPIRY: "24h",
    
    // Admin Credentials - EXTREMELY CRITICAL
    ADMIN_USERNAME: "admin",
    ADMIN_PASSWORD: "Admin@2024!Secure",
    ADMIN_API_KEY: "admin_api_key_12345_DO_NOT_SHARE",
    
    // Internal API Endpoints
    API_BASE_URL: "https://api.vulnbank.com/v1",
    INTERNAL_API_URL: "https://internal-api.vulnbank.com",
    ADMIN_PANEL_URL: "https://admin.vulnbank.com/dashboard",
    
    // Encryption Keys
    ENCRYPTION_KEY: "aes256_encryption_key_32_chars!",
    ENCRYPTION_IV: "initialization_vector_16b",
    
    // OAuth Secrets
    GITHUB_CLIENT_ID: "Iv1.a1b2c3d4e5f6g7h8",
    GITHUB_CLIENT_SECRET: "1234567890abcdef1234567890abcdef12345678",
    
    GOOGLE_OAUTH_CLIENT_ID: "123456789012-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com",
    GOOGLE_OAUTH_CLIENT_SECRET: "GOCSPX-YourGoogleOAuthClientSecret",
    
    // Slack Webhook
    SLACK_WEBHOOK_URL: "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXX",
    
    // Private Keys (PEM format in comments - still exposed!)
    // PRIVATE_KEY: "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEA...\n-----END RSA PRIVATE KEY-----"
    
    // Feature Flags
    DEBUG_MODE: true,
    ENABLE_LOGGING: true,
    LOG_SENSITIVE_DATA: true
};

// Export for use in other files
window.APP_CONFIG = CONFIG;

// VULNERABILITY 2: Exposed Internal Comments
// TODO: Remove these credentials before production deployment
// FIXME: This file should not be in the client bundle
// NOTE: Admin password was changed to Admin@2024!Secure on 2024-01-15
// WARNING: These keys are also in the backup file at /backup/config.old.js
