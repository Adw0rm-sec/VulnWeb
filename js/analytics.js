// VULNERABILITY 28-30: Analytics and Tracking Vulnerabilities

// VULNERABILITY 28: Multiple Exposed Analytics Keys
const ANALYTICS_CONFIG = {
    // Google Analytics
    GA_TRACKING_ID: "UA-123456789-1",
    GA_MEASUREMENT_ID: "G-XXXXXXXXXX",
    
    // Facebook Pixel
    FB_PIXEL_ID: "1234567890123456",
    
    // Mixpanel
    MIXPANEL_TOKEN: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
    
    // Segment
    SEGMENT_WRITE_KEY: "abcdefghijklmnopqrstuvwxyz123456",
    
    // Amplitude
    AMPLITUDE_API_KEY: "1234567890abcdefghijklmnopqrstuv",
    
    // Hotjar
    HOTJAR_ID: "1234567",
    HOTJAR_SV: "6",
    
    // Intercom
    INTERCOM_APP_ID: "abcd1234",
    
    // Sentry
    SENTRY_DSN: "https://1234567890abcdef@o123456.ingest.sentry.io/1234567"
};

// VULNERABILITY 29: Tracking Sensitive User Data
class AnalyticsTracker {
    constructor() {
        this.sessionId = this.generateSessionId();
    }

    generateSessionId() {
        return 'sess_' + Math.random().toString(36).substr(2, 9);
    }

    // VULNERABILITY: Logging PII and sensitive data
    trackEvent(eventName, data) {
        const eventData = {
            event: eventName,
            timestamp: new Date().toISOString(),
            sessionId: this.sessionId,
            userId: localStorage.getItem('username'),
            // VULNERABILITY: Sending sensitive data to analytics
            authToken: localStorage.getItem('authToken'),
            userAgent: navigator.userAgent,
            screenResolution: `${screen.width}x${screen.height}`,
            language: navigator.language,
            platform: navigator.platform,
            cookies: document.cookie,
            localStorage: JSON.stringify(localStorage),
            ...data
        };

        // Send to multiple analytics services
        this.sendToGoogleAnalytics(eventData);
        this.sendToMixpanel(eventData);
        this.sendToCustomEndpoint(eventData);
        
        // VULNERABILITY: Console logging sensitive data
        console.log("Analytics Event:", eventData);
    }

    sendToGoogleAnalytics(data) {
        // Simulated GA tracking
        console.log("Sending to GA:", ANALYTICS_CONFIG.GA_TRACKING_ID, data);
    }

    sendToMixpanel(data) {
        // Simulated Mixpanel tracking
        console.log("Sending to Mixpanel:", ANALYTICS_CONFIG.MIXPANEL_TOKEN, data);
    }

    sendToCustomEndpoint(data) {
        // VULNERABILITY: Sending to unencrypted endpoint
        fetch('http://analytics.vulnbank.com/track', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': 'analytics_api_key_12345'
            },
            body: JSON.stringify(data)
        }).catch(err => console.log("Analytics error:", err));
    }

    // VULNERABILITY 30: Fingerprinting with excessive data collection
    collectFingerprint() {
        return {
            userAgent: navigator.userAgent,
            language: navigator.language,
            languages: navigator.languages,
            platform: navigator.platform,
            hardwareConcurrency: navigator.hardwareConcurrency,
            deviceMemory: navigator.deviceMemory,
            screenResolution: `${screen.width}x${screen.height}`,
            colorDepth: screen.colorDepth,
            pixelRatio: window.devicePixelRatio,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            timezoneOffset: new Date().getTimezoneOffset(),
            plugins: Array.from(navigator.plugins).map(p => p.name),
            canvas: this.getCanvasFingerprint(),
            webgl: this.getWebGLFingerprint(),
            fonts: this.detectFonts(),
            localStorage: localStorage.length > 0,
            sessionStorage: sessionStorage.length > 0,
            indexedDB: !!window.indexedDB,
            cpuClass: navigator.cpuClass,
            doNotTrack: navigator.doNotTrack,
            // VULNERABILITY: Collecting battery status
            battery: navigator.getBattery ? 'supported' : 'not supported'
        };
    }

    getCanvasFingerprint() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.textBaseline = 'top';
        ctx.font = '14px Arial';
        ctx.fillText('VulnBank', 2, 2);
        return canvas.toDataURL();
    }

    getWebGLFingerprint() {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl');
        if (!gl) return null;
        
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        return {
            vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
            renderer: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
        };
    }

    detectFonts() {
        const fonts = ['Arial', 'Verdana', 'Times New Roman', 'Courier New', 'Georgia'];
        return fonts.filter(font => document.fonts.check(`12px "${font}"`));
    }
}

// Initialize analytics
window.analytics = new AnalyticsTracker();

// VULNERABILITY: Auto-track all clicks with sensitive data
document.addEventListener('click', function(e) {
    window.analytics.trackEvent('click', {
        element: e.target.tagName,
        id: e.target.id,
        class: e.target.className,
        text: e.target.innerText,
        path: window.location.pathname,
        // VULNERABILITY: Tracking form data
        formData: e.target.closest('form') ? 
            new FormData(e.target.closest('form')).entries() : null
    });
});

// VULNERABILITY: Track all input changes
document.addEventListener('input', function(e) {
    window.analytics.trackEvent('input', {
        field: e.target.name || e.target.id,
        // VULNERABILITY: Logging actual input values including passwords
        value: e.target.value,
        type: e.target.type
    });
});

// Track page load with fingerprint
window.addEventListener('load', function() {
    window.analytics.trackEvent('page_load', {
        fingerprint: window.analytics.collectFingerprint(),
        referrer: document.referrer,
        url: window.location.href
    });
});

// VULNERABILITY: Exposed analytics API
window.trackCustomEvent = function(name, data) {
    window.analytics.trackEvent(name, data);
};
