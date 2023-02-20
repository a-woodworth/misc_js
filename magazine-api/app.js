const magazineURL = 'https://vanillajsacademy.com/api/dragons.json';
const publication = document.querySelector('.js-magazine');
const divWrapper = document.querySelector('.js-articles');

// Fetch data
async function getArticles() {
  try {
    const response = await fetch(magazineURL);

    // If the call failed, throw an error
    if (!response.ok) {
      throw response.status;
    }

    const data = await response.json();

    // Display magazine name
    publication.innerHTML = `${data.publication}`;

    // Display magazine articles
    renderArticlesHTML(data.articles);

  } catch(error) {
    console.warn('Looks like there was a problem!', error);
    publication.innerHTML = `🐉`
    divWrapper.innerHTML = `Sorry, guess a dragon ate today's stories.`;
  }
}

function renderArticlesHTML(articles){
  const articlesHTMLString = articles.map(article => {
    
    return `
      <article class="card">
        <h2 class="card__title">
          <a href="${article.url}">
            ${article.title}
          </a>
        </h2>
        <div class="card__byline">
          <small>
            <em><span>By <a href="#" rel="author">${article.author}</a></span></em><br>
            <time datetime="${article.pubdate.slice(-4)}">${article.pubdate}</time>
          </small>
        </div>
        <p class="card__copy">
          ${article.article}
        </p>
      </article>
    `
  }).join('');
  divWrapper.innerHTML = articlesHTMLString;
}

getArticles();
