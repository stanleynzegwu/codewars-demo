// Move all exclamation marks to the end of the sentence

// Examples
// remove("Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!!"
// remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
// remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
// remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"

//                                  solution

function remove (string) {
    let str = ''
    let num = 0
    for(let l of string){
      l === '!' ? num++ : str += l
    }
      return `${str}${'!'.repeat(num)}`
  }