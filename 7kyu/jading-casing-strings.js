// check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

//          solution

String.prototype.toJadenCase = function () { 
    return this.split(' ').map((e,i) => e.replace(e.charAt(0),e.charAt(0).toUpperCase())).join(' ')
  }

//              SOLUTION

// String.prototype.toJadenCase = function () { 
//     return this.split(" ").map(function(word){
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(" ");
//   }

//              solution

// String.prototype.toJadenCase = function() {
//     return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
//   };