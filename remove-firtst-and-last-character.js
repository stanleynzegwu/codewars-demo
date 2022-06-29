// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
//  You're given one parameter, the original string.
//  You don't have to worry with strings with less than two characters.

//              SOLUTION

function removeChar(str){
    newStr = str.split('')
     newStr.shift()
     newStr.pop()
     return newStr.join('')
     };

//          solution

function removeChar(str) {
    return str.slice(1, -1);
  }

  //     solution

  function removeChar(str){
    return str.substring(1, str.length-1);
   };