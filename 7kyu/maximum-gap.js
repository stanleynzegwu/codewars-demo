// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives and negatives also zeros_

// Repetition of numbers in the array/list could occur.

// The Maximum Gap is computed Regardless the sign.

// Input >> Output Examples
// maxGap ({13,10,5,2,9}) ==> return (4)
// Explanation:
// The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .

//                          solution

function maxGap (numbers){
    let sorted = numbers.sort((a,b) => a - b).reverse()
    let map = sorted.map((el,i) =>el - sorted[i + 1])
    return Math.max(...map.slice(0,map.length-1))
  }

//                      solution

function maxGap (numbers){
    const sorted = numbers.sort((a, b) => a - b)
    return sorted.reduce((t, x, i) => sorted[i + 1] - x > t ? sorted[i + 1] - x : t, 0)
  }