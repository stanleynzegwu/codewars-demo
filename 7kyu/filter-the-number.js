// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

//                  solution

var FilterString = function(value) {
    return +[...value].filter(a => isFinite(a)).join('')
  }