// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

//          SOLUTION

function doubleChar(str) {
    str = str.split('')
    arr = []
    str.forEach(a => arr.push(a + a))
    return arr.join('')
  }

  
//          SOLUTION

const doubleChar = (str) => str.split("").map(c => c + c).join("")