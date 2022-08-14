// Find the sum of the odd numbers within an array,
//  after cubing the initial integers. 
//  The function should return undefined if any of the values aren't numbers.

//                  solution

function cubeOdd(arr) {
    return !arr.every(a => Number.isInteger(a)) ? undefined : arr.map(a => a**3)
    .filter(a => a%2).reduce((acc,c) => acc + c,0)
  }

//                  solution

let cubeOdd = a => {
    var isNumeric = a.every(x=>!isNaN(x))
    return isNumeric ? a.filter(n=>n%2).reduce((s,n)=>s+(n*n*n),0) : undefined
  }