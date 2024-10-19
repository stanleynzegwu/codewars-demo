// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

//                      solution

// function repeats(arr){
//     const filteredArr = arr.filter((num,idx) => {
//       return arr.indexOf(num) === arr.lastIndexOf(num)
//     })
    
//     return filteredArr.reduce((acc,c) => acc + c,0)
//   };

function repeats(arr) {
    const freqMap = {};
    
    // First pass: count occurrences
    arr.forEach(num => {
      freqMap[num] = (freqMap[num] || 0) + 1;
    });
    
    // Second pass: sum the numbers that occur only once
    return arr.reduce((acc, num) => {
      if (freqMap[num] === 1) acc += num;
      return acc;
    }, 0);
  }
  