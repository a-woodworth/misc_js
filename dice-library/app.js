// For this project, create a roll library that exposes helper functions that roll dice in an assortment of sizes. Common dice sizes include: D2, D4, D6, D8, D10, D12, and D20.

// roll a 6-sided dice
// should return a number from 1-6
// roll.d6();

// roll a 20-sided dice
// should return a number from 1-20
// roll.d20();

let roll = (() => {
  // dice sizes
  let dice = {
    d2: [1, 2],
    d4: [1, 2, 3, 4],
    d6: [1, 2, 3, 4, 5, 6],
    d8: [1, 2, 3, 4, 5, 6, 7, 8],
    d10: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    d12: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    d20: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    weapons: ['knife', 'sword', 'nunchucks', 'staff', 'poison darts', 'bow and arrows']
  };

  /**
   * Randomly shuffle an array
   * https://stackoverflow.com/a/2450976/1293256
   * @param  {Array} array The array to shuffle
   * @return {Array}       The shuffled array
   */
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

  function rollDice(numSides) {
    if (!dice[numSides]) return 0;

    shuffle(dice[numSides]);
    return dice[numSides][0];
  }

  // roll a 2-sided dice
  function d2() {
    return rollDice('d2');
  };

  // roll a 4-sided dice
  function d4() {
    return rollDice('d4');
  };

  // roll a 6-sided dice
  function d6() {
    return rollDice('d6');
  };

  // roll a 8-sided dice
  function d8() {
    return rollDice('d8');
  };

  // roll a 10-sided dice
  function d10() {
    return rollDice('d10');
  };

  // roll a 12-sided dice
  function d12() {
    return rollDice('d12');
  };

  // roll a 20-sided dice
  function d20() {
    return rollDice('d20');
  };

  // roll a word dice - weapons
  function weapons() {
    return rollDice('weapons');
  };

  return  { d2, d4, d6, d8, d10, d12, d20, weapons };

})();

let d2 = roll.d2();
let d4 = roll.d4();
let d6 = roll.d6();
let d8 = roll.d8();
let d10 = roll.d10();
let d12 = roll.d12();
let d20 = roll.d20();
let weapons = roll.weapons();

console.log(d2, d4, d6, d8, d10, d12, d20, weapons);
