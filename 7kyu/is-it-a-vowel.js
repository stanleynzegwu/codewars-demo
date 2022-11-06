// Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.

//                  solution

String.prototype.vowel = function() {
    return this.length === 1 ? ['A','E','O','I','U'].some( x => x === this[0].toUpperCase()) : false
  }