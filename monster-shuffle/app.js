const monsterDiv = document.querySelector('[data-js="monsters"]');
const shuffleBtn = document.querySelector('.js-monster-btn');

// The monsters and socks
let monsters = [
  'monster1',
  'monster2',
  'monster3',
  'monster4',
  'monster5',
  'monster6',
  'monster7',
  'monster8',
  'monster9',
  'monster10',
  'monster11',
  'sock'
];

// Alt tags and names
const monsterInfo = {
  'monster1': ['A yellow, creepy, stinging flea monster', 'Stan'],
  'monster2': ['A bulbous-headed, yellow cyclops', 'Bob'],
  'monster3': ['A sharp-toothed, crocodile-looking green monster', 'Steve'],
  'monster4': ['A red four-armed, giant slug monster', 'Becky'],
  'monster5': ['A spiky-headed, sad green cyclops', 'Jenna'],
  'monster6': ['A horned, triangle-shaped green cyclops', 'Lena'],
  'monster7': ['An octopus-armed, purple cyclops', 'Marie'],
  'monster8': ['A purple, oval, cyclops with a meh emoji expression', 'Max'],
  'monster9': ['A blue, flying, ant-like monster', 'Frannie'],
  'monster10': ['A blue, two-eyed, creepy-crawly monster', 'Frida'],
  'monster11': ['A dark gray, smiling Yeti monster', 'JoJo'],
  'sock': ['pair of socks', 'Yuck! Stinky Socks']
}

const shuffledMonsters = Array.from(monsters);

function shuffle (array) {

  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;

}

function renderMonsters(monsters) {
  monsterDiv.innerHTML = 
  `<div class="row">
    ${monsters.map(function (monster) {

      let altTag = monsterInfo[monster][0];
      let name = monsterInfo[monster][1];

      return `
        <div class="grid">
          <img alt="${altTag}" src="images/${monster}.svg">
          <p class="name">${name}</p>
        </div>`;
    }).join('')}
  </div>`;
}

shuffleBtn.addEventListener('click', () => {
  shuffle(shuffledMonsters);
  renderMonsters(shuffledMonsters);
  monsterDiv.setAttribute('aria-live', 'polite');
});

renderMonsters(monsters);
