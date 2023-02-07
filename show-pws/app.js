// Get input fields
const passwordCheckbox = document.querySelector('[data-js="toggle-passwords"]');
const passwords = document.querySelectorAll('[type="password"]');

// Show or hide passwords
function togglePasswords() {
  passwords.forEach(password => {
    if ( passwordCheckbox.checked ) {
      password.setAttribute('type', 'text');
    } else {
      password.setAttribute('type', 'password');
    }
  });
}

// Listen for checkbox change
passwordCheckbox.addEventListener('change', togglePasswords);
