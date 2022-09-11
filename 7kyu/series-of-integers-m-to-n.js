// Write a function that accepts two arguments and generates a sequence containing the integers from the first argument to the second inclusive.

// Input
// Pair of integers greater than or equal to 0. The second argument will always be greater than or equal to the first.

// Example
// generateIntegers(2, 5) // --> [2, 3, 4, 5]

//                  solution

function generateIntegers(m, n) {
    return Array((n-m)+1).fill(0).map(a => m++)
  }

//                  solution

function generateIntegers(m, n) {
    var arr = [];
    while(m <= n) {
      arr.push(m);
      m++;
    }
    return arr;
  }