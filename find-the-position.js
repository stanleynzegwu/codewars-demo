// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

//               solution

function position(letter){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
  }

//                  solution

position = l => `Position of alphabet: ${l.charCodeAt() - 96}`;

//                  solution

function position(letter) {
    return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
  }