const alphabet13 = { A: 'N', B: 'O', C: 'P', D: 'Q', E: 'R', F: 'S', G: 'T', H: 'U', I: 'V', J: 'W', K: 'X', L: 'Y', M: 'Z', N: 'A', O: 'B', P: 'C', Q: 'D', R: 'E', S: 'F', T: 'G', U: 'H', V: 'I', W: 'J', X: 'K', Y: 'L', Z: 'M' };

function rot13(str) {
  const originalString = str.split('');
  const decodedString = [];
  originalString.forEach((letter, index) => {
    const isLetterRegex = /[A-Z]/g;
    if (isLetterRegex.test(letter) === true) {
      decodedString.push(alphabet13[letter]);
    } else {
      decodedString.push(letter);
    }
  });
  return decodedString.join('');
}

rot13("SERR PBQR PNZC");
console.log(rot13("SERR PBQR PNZC"));
