// Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"

//                  solution

function sevenAte9(str) {
    let arr = [...str]
    return arr.filter((a,b) => !((a === '9') && (arr[b-1] === '7') && (arr[b+1] === '7'))).join('')
  }



