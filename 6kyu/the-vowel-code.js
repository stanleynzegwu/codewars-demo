// Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

//                      solution

function encode(string) {
    vowel = {'a': 1,'e':2,'i':3,'o':4,'u':5}
    str = ''
    for(l of string){
      vowel[l] ? str += vowel[l] : str += l
    }
    return str
  }
  
  function decode(string) {
    vowel = {1:'a', 2:'e', 3:'i', 4:'o', 5:'u'}
    str = ''
    for(l of string){
      vowel[l] ? str += vowel[l] : str += l
    }
    return str
  }

//                 solution

const table = ['a', 'e', 'i', 'o', 'u']
const encode = string => string.split('').map(x => table.indexOf(x) + 1 || x).join('')
const decode = string => string.split('').map(x => table[Number(x) - 1] || x).join('')

