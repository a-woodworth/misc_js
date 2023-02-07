// Get input fields
const passwordCheckbox = document.querySelector('[data-js="toggle-password"]');
const password = document.querySelector('#password');

function togglePassword() {
  if ( passwordCheckbox.checked ) {
    password.setAttribute('type', 'text');
  } 
  else {
    password.setAttribute('type', 'password');
  }
}

// Listen for checkbox change
passwordCheckbox.addEventListener('change', togglePassword);
