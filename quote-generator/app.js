const quotesURL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const quoteBlock = document.querySelector('.js-quote');
const quoteBtn = document.querySelector('.js-quote-btn');
const initialQuote = `Fishing relaxes me. It's like yoga, except I still get to kill something.`;
const allQuotes = [];

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
      
      // Remove duplicate quotes
      checkForDuplicate(quote);
    })
    .catch(error => {
      console.warn('Looks like there was a problem!', error);
      quoteBlock.textContent = `Sorry, something went wrong. Try again.`;
    });
}

function checkForDuplicate(quote) {
  let incomingQuote = quote;

  // Store first quote if allQuotes array is empty
  if (allQuotes.length === 0) {
    allQuotes.push(incomingQuote);
    return quoteBlock.textContent = `${incomingQuote}`;
  }
  
  // Check to see if new api quote has already been displayed
  if ( allQuotes.includes(incomingQuote) || allQuotes.includes(initialQuote) ) {
    generateQuote();
  } else {
    allQuotes.push(incomingQuote);
    return quoteBlock.textContent = `${incomingQuote}`;
  }
}

// Start with initial Ron Swanson quote loaded on page
quoteBlock.textContent = initialQuote;

quoteBtn.addEventListener('click', () => {
  generateQuote();
  quoteBlock.setAttribute('aria-live', 'polite');
});