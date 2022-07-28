// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

// Examples:
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)

// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)

// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)

// n = 0
// m = 1
// result - division by zero (refer to the specifications on how to handle this in your language)

//                  solution

function remainder(a, b){
    return a > b ? a % b : b % a;
  }

//                  solution

function remainder(a, b){
    // Divide the larger argument by the smaller argument and return the remainder
    var min = Math.min(a,b);
    var max = Math.max(a,b);
  
    return min ? max % min : NaN;
  }

//                  solution

function remainder(n, m){
    sorted = [n,m].sort((a,b) => a-b)
    val = sorted[1] % sorted[0]
    return (n > m && m == 0) || (m > n && n == 0)? NaN : val
  }