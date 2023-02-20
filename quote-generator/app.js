const quotesURL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const quoteBlock = document.querySelector('.js-quote');
const quoteBtn = document.querySelector('.js-quote-btn');
const initialQuote = `Fishing relaxes me. It's like yoga, except I still get to kill something.`;
const allQuotes = [];

// Fetch data
async function generateQuote() {
  const response = await fetch(quotesURL, { cache: 'no-store' });

  try {
    // If the call failed, throw an error
    if (!response.ok) {
      throw response.status;
    }

    // Get the data
    const data = await response.json();
    let quote = data[0];

    // Remove duplicate quotes
    checkForDuplicate(quote);

  } catch(error) {
    console.warn('Looks like there was a problem!', error);
    quoteBlock.textContent = `Sorry, something went wrong. Try again.`;
  }
}

function checkForDuplicate(quote) {
  let incomingQuote = quote;

  // Limit return to 50 new quotes before repeating any again
  if (allQuotes.length > 49) {
    allQuotes.shift();
  }
  
  // Check to see if new api quote has already been displayed
  if ( allQuotes.includes(incomingQuote) || allQuotes.includes(initialQuote) ) {
    generateQuote();
    return;
  } 

  allQuotes.push(incomingQuote);
  return quoteBlock.textContent = `${incomingQuote}`;
}

// Start with initial Ron Swanson quote loaded on page
quoteBlock.textContent = initialQuote;

quoteBtn.addEventListener('click', () => {
  generateQuote();
  quoteBlock.setAttribute('aria-live', 'polite');
});
