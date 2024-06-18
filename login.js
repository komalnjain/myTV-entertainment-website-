const loginForm = document.getElementById('login-form');
const errorMessage = document.querySelector('.error-message');
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function() {
  // Toggle password visibility
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;
  this.classList.toggle('fa-eye-slash');
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = loginForm.username.value;
  const password = loginForm.password.value;

  // Replace this with your logic to validate credentials against a database or other source
  if (username === 'admin' && password === 'password123') {
    // Login successful
    window.location.href = "index.html"; // Redirect to index.html on successful login
  } else {
    errorMessage.textContent = 'Invalid username or password';
  }
});
