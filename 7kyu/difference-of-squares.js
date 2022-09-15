// Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.

// Example
// For example, when n = 10:

// The square of the sum of the numbers is:

// (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025

// The sum of the squares of the numbers is:

// 12 + 22 + 32 + 42 + 52 + 62 + 72 + 82 + 92 + 102 = 385

// Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbes is: 3025 - 385 = 2640

//                      solution

function differenceOfSquares(n){
    let arr = []
    
    for(let i = 1; i <= n; i++){
      arr.push(i)
    }
    let totalSumSquared = Math.pow(arr.reduce((acc,c) => acc + c,0),2)
    let sumindivSquared = arr.reduce((acc,c) => acc + (c**2),0)
    return totalSumSquared - sumindivSquared
  }

//                      solution

function differenceOfSquares(x){
    let sum = 0, squareSum = 0
    for (let i =1 ; i <= x; i++) {
      sum += i*i;
      squareSum += i;
    }
    return squareSum*squareSum - sum;
  }

  