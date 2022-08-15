// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

//                  solution

function generateShape(integer){
    str = ''
    for(let i = 1; i <=integer; i++){
      str += `${'+'.repeat(integer)}\n`
    }
    return str.slice(0,-1)
  }

//                  solution

function generateShape(n){
    return ("+".repeat(n)+"\n").repeat(n).trim()
  }