// In this Kata, you will be given an array of unique elements, 
//and your task is to rearrange the values so that the first max value is followed by the first minimum, 
//followed by second max value then second min value, etc.

// For example:

// solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

// More examples in the test cases.

// Good luck!

//                  solution

function solve(arr){
    var minMax = [];
    arr.sort((a,b)=>a-b);
    for(var i = 0, j = arr.length-1; i <= j; i++,j--){
      if(i != j) minMax.push(arr[j]), minMax.push(arr[i]);
      else minMax.push(arr[i]);
    }
    return minMax;
  }

//                  solution

function solve(arr){
    let array = []
    let dsc = arr.sort((a,b) => b - a)
    while(dsc.length){
      array.push(dsc.splice(0,1)[0],dsc.splice(-1,1)[0])
    }
  return array.filter(a => a !== undefined)
};