const quotesURL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const quoteBlock = document.querySelector('.js-quote');
const quoteBtn = document.querySelector('.js-quote-btn');

// Fetch data
function generateQuote() {
  fetch(quotesURL, { cache: 'no-store' })
    .then(response => {
    // If the response is successful, get the JSON
      if (response.ok) {
        return response.json();
      } 
      // Otherwise, throw an error  
      throw response.status;
     })
    .then(data => {
      let quote = data[0];
      
      quoteBlock.textContent = `${quote}`;
    })
    .catch(error => {
      console.warn('Looks like there was a problem!', error);
      quoteBlock.textContent = `Sorry, something went wrong. Try again.`;
    });
}

// Start with initial Ron Swanson quote loaded on page
quoteBlock.textContent = 
  `Fishing relaxes me. It's like yoga, except I still get to kill something.`

quoteBtn.addEventListener('click', () => {
  generateQuote();
  quoteBlock.setAttribute('aria-live', 'polite');
});
