const form = document.forms['save-me'];

// localStorage prefix
let prefix = 'autosave_fields';

function handleInput(e) {
  // Serialize the form fields
  let data = serialize(new FormData(form));

  // Stringify and save to localStorage
  localStorage.setItem(prefix, JSON.stringify(data));
}

function loadSaved() {
  // Get saved data from localStorage
  let saved = JSON.parse(localStorage.getItem(prefix));
  if (!saved) return;

  // Get all the fields in the form
  let fields = form.elements;

  // Loop through each field and return saved data
  for (let field of fields) {
    if (!saved[field.name]) continue;
    field.value = saved[field.name];
  }
}

function clearStorage() {
    localStorage.removeItem(prefix);
}

// Load saved data from localStorage
loadSaved();

form.addEventListener('input', handleInput);
form.addEventListener('submit', clearStorage);
