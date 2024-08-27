//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const checkbox = document.getElementById('checkbox');
    const submitButton = document.getElementById('submit');
    const existingButton = document.getElementById('existing');

    // Check if user details are already stored in localStorage
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
        existingButton.style.display = 'block';
    }

    // Handle form submission
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (checkbox.checked) {
            // Save details to localStorage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            // Remove details from localStorage
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        alert(`Logged in as ${username}`);
    });

    // Handle existing user login
    existingButton.addEventListener('click', function () {
        const existingUsername = localStorage.getItem('username');
        alert(`Logged in as ${existingUsername}`);
    });
});
