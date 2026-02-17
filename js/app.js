// VULNERABILITY 18-25: Multiple DOM-Based XSS Vulnerabilities

// Global state
let currentUser = null;

// VULNERABILITY 18: DOM XSS via innerHTML
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    
    // VULNERABILITY: Using location.hash without sanitization
    if (location.hash) {
        const message = location.hash.substring(1);
        // DOM XSS vulnerability
        document.getElementById('loginMessage').innerHTML = decodeURIComponent(message);
    }
}

// VULNERABILITY 19: DOM XSS in Login Handler
document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const result = await window.bankingAPI.login(username, password);
    
    if (result.success) {
        currentUser = result.user;
        
        // VULNERABILITY: DOM XSS - unsanitized user input in innerHTML
        document.getElementById('loginMessage').innerHTML = 
            `<div class="success">Welcome back, ${username}!</div>`;
        
        // VULNERABILITY: Reflecting user input without encoding
        document.getElementById('welcomeMessage').innerHTML = 
            `<h3>Welcome, ${username}!</h3><p>Last login: ${new Date().toLocaleString()}</p>`;
        
        document.getElementById('balance').textContent = `$${result.user.balance.toLocaleString()}`;
        
        setTimeout(() => showSection('dashboard'), 1000);
    } else {
        // VULNERABILITY: Reflecting error messages
        document.getElementById('loginMessage').innerHTML = 
            `<div class="error">Login failed for user: ${username}</div>`;
    }
});

// VULNERABILITY 20: DOM XSS in Transfer Handler
document.getElementById('transferForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const recipient = document.getElementById('recipient').value;
    const amount = document.getElementById('amount').value;
    const note = document.getElementById('note').value;
    
    const result = await window.bankingAPI.transfer(recipient, amount, note);
    
    if (result.success) {
        // VULNERABILITY: DOM XSS - unsanitized note field
        document.getElementById('transferMessage').innerHTML = 
            `<div class="success">
                Transfer successful!<br>
                To: ${recipient}<br>
                Amount: $${amount}<br>
                Note: ${note}<br>
                Transaction ID: ${result.transactionId}
            </div>`;
    }
});

// VULNERABILITY 21: DOM XSS in Profile Update
document.getElementById('updateProfileForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const displayName = document.getElementById('displayName').value;
    const email = document.getElementById('email').value;
    
    // VULNERABILITY: DOM XSS via innerHTML
    document.getElementById('profileData').innerHTML = 
        `<div class="success">
            Profile updated!<br>
            Name: ${displayName}<br>
            Email: ${email}
        </div>`;
});

// VULNERABILITY 22: DOM XSS in Support Chat
document.getElementById('supportForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const message = document.getElementById('supportMessage').value;
    const chatDiv = document.getElementById('supportChat');
    
    // VULNERABILITY: DOM XSS - chat messages not sanitized
    chatDiv.innerHTML += 
        `<div class="chat-message">
            <strong>You:</strong> ${message}
        </div>`;
    
    // Simulate bot response
    setTimeout(() => {
        chatDiv.innerHTML += 
            `<div class="chat-message">
                <strong>Support Bot:</strong> Thank you for your message: "${message}". 
                A representative will contact you soon.
            </div>`;
    }, 1000);
    
    document.getElementById('supportMessage').value = '';
});

// VULNERABILITY 23: DOM XSS via URL Parameters
window.addEventListener('load', function() {
    const urlParams = new URLSearchParams(window.location.search);
    
    // VULNERABILITY: Reflecting URL parameters without sanitization
    if (urlParams.has('message')) {
        const msg = urlParams.get('message');
        document.body.innerHTML += `<div style="padding:20px;background:yellow;">${msg}</div>`;
    }
    
    if (urlParams.has('user')) {
        const user = urlParams.get('user');
        document.getElementById('username').value = user;
    }
    
    // VULNERABILITY: eval() with user input
    if (urlParams.has('debug')) {
        eval(urlParams.get('debug'));
    }
});

// VULNERABILITY 24: postMessage Handler without Origin Check
window.addEventListener('message', function(event) {
    // VULNERABILITY: No origin validation
    // Should check: if (event.origin !== "https://trusted-domain.com") return;
    
    if (event.data.action === 'updateBalance') {
        // VULNERABILITY: DOM XSS via postMessage
        document.getElementById('balance').innerHTML = event.data.balance;
    }
    
    if (event.data.action === 'showMessage') {
        // VULNERABILITY: DOM XSS via postMessage
        document.body.innerHTML += `<div>${event.data.message}</div>`;
    }
    
    if (event.data.action === 'executeCode') {
        // VULNERABILITY: Code execution via postMessage
        eval(event.data.code);
    }
});

// VULNERABILITY 25: document.write with user input
function showNotification(text) {
    // VULNERABILITY: document.write can be exploited
    document.write(`<div class="notification">${text}</div>`);
}

// VULNERABILITY 26: Insecure Direct Object Reference
function loadUserProfile(userId) {
    // VULNERABILITY: No authorization check
    fetch(`/api/users/${userId}`)
        .then(r => r.json())
        .then(data => {
            document.getElementById('profileData').innerHTML = 
                `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        });
}

// VULNERABILITY 27: Exposed Sensitive Functions
window.adminFunctions = {
    deleteUser: function(userId) {
        console.log("Deleting user:", userId);
        return fetch(`/api/admin/users/${userId}`, { method: 'DELETE' });
    },
    getAllUsers: function() {
        return fetch('/api/admin/users/all');
    },
    executeQuery: function(sql) {
        return fetch('/api/admin/query', {
            method: 'POST',
            body: JSON.stringify({ query: sql })
        });
    }
};
