// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//              solution

function countPositivesSumNegatives(input) {
    if(input == null || input == 0){
      return []
    }else{
      positiveArr = input.filter(a => Math.sign(a) === 1)
      negativeArr = input.filter(a => Math.sign(a) === -1)
      poLen = positiveArr.length
      sum = negativeArr.reduce((acc,c) => acc + c,0)
      arr = []
      arr.push(poLen)
      arr.push(sum)
      return arr
    }
      
}

