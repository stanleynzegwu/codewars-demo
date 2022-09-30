// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

//                  solution

let caseConverter = (l) => l == l.toLowerCase() ? l.toUpperCase() :
l.toLowerCase()

function stringTransformer(str) {
  return str.split(' ').map(word => word.split('').map(l => {
    return caseConverter(l)
  }).join('')).reverse().join(' ')
}

//                  solution

function stringTransformer(str) {
    return str
      .split(' ')
      .reverse()
      .join(' ')
      .split('')
      .map(v => v == v.toUpperCase() ?
        v.toLowerCase() :
        v.toUpperCase())
      .join('');
  }