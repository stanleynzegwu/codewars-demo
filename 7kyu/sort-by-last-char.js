// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

//                  solution

function last(x){
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
  }

//                  solution

const lastChar = (str) => (str[str.length - 1] || '');
const sorter = (a, b) => lastChar(a).localeCompare(lastChar(b));
const last = (str) => str.split(' ').sort(sorter);

//                    solution

const last = ( $ ) => $.split(' ').sort((a,b)=> a.slice(-1) > b.slice(-1))

//                      solution

function last (words) {
    return words.split(' ').sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)))
  }
