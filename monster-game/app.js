const monsterDiv = document.querySelector('[data-js="monsters"]');

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
    ${monsters.map(function (monster, index) {

      return `
        <div class="grid" aria-live="polite">
          <button type="button" data-monster="${index}">
            <img alt="door ${index + 1}" src="images/door.svg">
          </button>
        </div>`;
    }).join('')}
  </div>`;
}

function handleClick(e) {
  // Get monster
  let doorBtn = e.target.closest('[data-monster]');
  if (!doorBtn) return;

  let monster = monsters[doorBtn.getAttribute('data-monster')];
  if (!monster) return;

  // Update html to show monster
  let image = document.createElement('img');
  let parentDiv = doorBtn.parentElement;

  image.src = `images/${monster}.svg`;
  image.alt = `${monsterInfo[monster][0]}`;
  parentDiv.insertAdjacentHTML('beforeend', `<p>${monsterInfo[monster][1]}</p>`);

  doorBtn.replaceWith(image);

  // Announce game over when socks found
  if (`${monster}` === 'sock') {
    alert('Oh, no - game over! You found the stinky socks. Refresh the page to play again.');
  }
}

renderMonsters(shuffle(monsters));

document.addEventListener('click', handleClick);
