const textarea = document.querySelector('.js-textarea');
const charCount = document.querySelector('.js-count');

function countCharacters() {
  const currentLength = textarea.value.length;

  return charCount.innerText = `${currentLength}`;
}

textarea.addEventListener('input', countCharacters);
