// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

//              solution

function remove (string) {
    if(string.endsWith('!')){
       return string.slice(0,string.length-1)
       }else{
         return string
       }
  }

//              solution

function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
  }