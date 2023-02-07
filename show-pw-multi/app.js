const body = document.body;

function togglePasswords(e) {
  if (e.target.matches('[data-js="toggle-password"]')) {
    const closestForm = e.target.closest('form');
    const passwords = closestForm.querySelectorAll('[data-js="password"]');

    passwords.forEach(password => {
      if ( e.target.checked ) {
          password.setAttribute('type', 'text');
      } else {
        password.setAttribute('type', 'password');
      }
    });
  }
}

body.addEventListener('click', togglePasswords);
