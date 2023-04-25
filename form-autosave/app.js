const form = document.forms['save-me'];

// localStorage prefix
let prefix = 'autosave_';

function handleInput(e) {
  let field = e.target;

  // Only save the field if it has an ID
  if (!field.id) return;

  // Save field to localStorage
  localStorage.setItem(prefix + field.id, field.value);
}

function loadSaved() {
  // Get all of the fields in the form
  let fields = form.elements;

  // Loop through each field and return saved data
  for (let field of fields) {
    let saved = localStorage.getItem(prefix + field.id);
    if (!saved) continue;
    field.value = saved;
  }
}

function clearStorage() {
  // Get all of the fields in the form
  let fields = form.elements;

  // Loop through each field and remove it from storage
  for (let field of fields) {
    localStorage.removeItem(prefix + field.id);
  }
}

// Load saved data from localStorage
loadSaved();

form.addEventListener('input', handleInput);
form.addEventListener('submit', clearStorage);
