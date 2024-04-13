// DESCRIPTION:
// Who knows the nursery rhyme Ten Green Bottles?

// Lyrics:

// Ten green bottles hanging on the wall,
// Ten green bottles hanging on the wall,
// And if one green bottle should accidentally fall,
// There'll be nine green bottles hanging on the wall.

// Nine green bottles hanging on the wall,
// Nine green bottles hanging on the wall,
// And if one green bottle should accidentally fall,
// There'll be eight green bottles hanging on the wall. 

// Eight green bottles hanging on the wall...
// Seven green bottles hanging on the wall...
// ...

// One green bottle hanging on the wall,
// One green bottle hanging on the wall,
// If that one green bottle should accidentally fall,
// There'll be no green bottles hanging on the wall.
// Task
// Write some amazing code to reproduce the above lyrics starting from n green bottles!

// parameter n is 1 to 10
// newline terminates every line (including the last)
// don't forget the blank lines between the verses

//                          solution

const word = n => ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'][n];

const nBottles = n => word(n) + ` green bottle${n === 1 ? '' : 's'}`;

const titleCase = word => word[0].toUpperCase() + word.slice(1);

const range = n => [...Array(n).keys()].map(x => x + 1).reverse();

const refrain = n => {
  const bottles = nBottles(n);
  return [
    `${titleCase(bottles)} hanging on the wall,\n`,
    `${titleCase(bottles)} hanging on the wall,\n`,
    `${n === 1 ? 'If that' : 'And if'} one green bottle should accidentally fall,\n`,
    `There'll be ${nBottles(n - 1)} hanging on the wall.\n`,
  ].join('');
}

const tenGreenBottles = n => range(n).map(refrain).join('\n');