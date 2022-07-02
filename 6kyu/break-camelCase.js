// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//          SOLUTION

function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }

//          solution

const solution = string => {
    return [...string].map((char) => {
      return (char === char.toUpperCase()) ? ` ${char}` : char;
    }).join('');
  }

//              solution

function solution(string) {
    let res = "";
    let letters = string.split("");
    letters.forEach(letter=>{
      if(letter.toUpperCase() == letter)
        res+=" "+letter
      else
        res+=letter
    })
    return res;
}