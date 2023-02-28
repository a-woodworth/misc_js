const magazineURL = 'https://vanillajsacademy.com/api/dragons.json';
const authorsURL = 'https://vanillajsacademy.com/api/dragons-authors.json';
const publication = document.querySelector('.js-magazine');
const divWrapper = document.querySelector('.js-articles');

// Fetch data
async function fetchMagazineData() {
  const [articlesResponse, authorsResponse] = await Promise.all([
    fetch(magazineURL),
    fetch(authorsURL)
  ]);

  const articlesData = await articlesResponse.json();
  const authorsData = await authorsResponse.json();

  return [articlesData, authorsData];
}

fetchMagazineData()
  .then(([articlesData, authorsData]) => {

  // Display magazine name
  publication.innerHTML = `${articlesData.publication}`;

  // Display magazine articles and author bios
  renderArticlesHTML(articlesData.articles, authorsData.authors);

}).catch(error => {
  console.warn('Looks like there was a problem!', error);
  renderFail();
});

function renderArticlesHTML(articles, authors) {
  // If there are no articles to show
  if (!articles || articles.length < 1) {
    renderFail();
    return;
  }

  const articlesHTMLString = articles.map(article => {
    let author = getAuthorBios(article.author, authors);
     
    return `
      <article class="card">
        <h2 class="card__title">
          <a href="${article.url}">
            ${article.title}
          </a>
        </h2>
        <div class="card__byline">
          <p><em>
            By ${author ? `${author.author}<br> ${author.bio}` : article.author}
          </p></em>
        </div>
        <hr>
        <p class="card__copy">
          ${article.article}
        </p>
      </article>
    `
  }).join('');
  const cleanedString = cleanHTML(articlesHTMLString);
  divWrapper.innerHTML = cleanedString;
}

function getAuthorBios(name, authors) {
  return authors.find(author => {
    return author.author === name;
  });
}

function renderFail() {
  publication.innerHTML = `🐉`
  divWrapper.innerHTML = `Sorry, guess a dragon ate today's stories.`;
}
