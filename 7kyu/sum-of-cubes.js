// Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

//                  solution

function sumCubes(n){
    sum = 0
    let i = 1
    while(i <= n){
      sum += i**3
      i++
    }
    return sum
  }

//                  solution

function sumCubes(n) {
    return (n * (n + 1) / 2) ** 2;
  }

//                  solution

const sumCubes = n => [...Array(n + 1).keys()].reduce((r, i) => r + i ** 3);