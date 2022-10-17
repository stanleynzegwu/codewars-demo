// In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

// The result should be a string of numbers, separated by comma and space.

// Example
// # first element: 1, difference: 2, how many: 5
// arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"

//                      solution

function arithmeticSequenceElements(a, d, n) {
    let val = a
      return Array(n).fill(0).map((_,index) => index == 0 ? a : val += d).join(', ')
  }

//                      solution

function arithmeticSequenceElements(a,r,n) {
    var ret = [a]
    while (--n) ret.push(a+=r);
    return ret.join(', ')
  }