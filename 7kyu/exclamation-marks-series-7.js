// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

//                      solution
function remove(s){
    return s.split(' ').filter(i => i.split('!').length != 2).join(' ');
  }

//                     solution
function remove (string) {
    let fil = string.split(' ').filter(word => {
      return !word.includes('!') || (word.indexOf('!') !== word.lastIndexOf('!'))
    })
    return fil.join(' ')
  }