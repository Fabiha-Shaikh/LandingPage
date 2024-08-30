const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send a POST request to the login.php script
    fetch('login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `username=${username}&password=${password}`
    })
    .then(response => response.text())
    .then((message) => {
        if (message === 'success') {
            // Login successful, redirect to the dashboard
            window.location.href = 'dashboard.php';
        } else {
            // Login failed, display an error message
            errorMessage.textContent = message;
        }
    })
    .catch((error) => {
        console.error(error);
    });
});