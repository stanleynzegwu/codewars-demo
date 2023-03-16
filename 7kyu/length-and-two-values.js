// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []

//                          solution

function alternate(n, firstValue, secondValue){
    const arr = Array(n).fill(0)
    return arr.map((_,i) => i % 2 ? secondValue : firstValue)
  }