const textarea = document.querySelector('.js-textarea');
const wordCount = document.querySelector('.js-words');
const charCount = document.querySelector('.js-chars');

function countWordsAndCharacters() {
  // Get character and top-level word count
  const currentLength = textarea.value.length;
  const originalText = textarea.value;
  let text = '';

  text = text + originalText;

  // Filter out currency symbols, emojis, numbers, and punctuation
  // using MDN Unicode property escapes and regex
  const regexNonWords = /\p{Sc}|\p{P}|\p{Emoji_Presentation}/gu;
  const regexNumbers = /\d+/g;
  // Replace multiple blank spaces
  const regexSpaces = /\s+/g;
  
  let filtered = text
    .replace(regexNonWords, '')
    .replace(regexNumbers, '')
    .replace(regexSpaces, ' ').trim();

  const words = filtered.split(' ').filter(word => word !== '');

  charCount.textContent = `${currentLength}`;
  wordCount.textContent = `${words.length}`;
}

textarea.addEventListener('input', () => {
  countWordsAndCharacters();
});

// Text Examples
// 'Let's order a pepperoni 🍕 – with extra 🧀! $9.99 special at mystic pizza.'
// 'French Connection: Comment ça va? Bonne après-midi. Je suis désolé.''
// '     space   mountain  gap    '
// 'Pi is 3.1415926539 but its value is not a word.'
