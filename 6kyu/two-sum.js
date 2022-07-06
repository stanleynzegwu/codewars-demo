// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

//                  my solution

function twoSum(numbers, target) {
    let arr = []
    for(let i = 0; i < numbers.length; i++){
      for(let j = 0; j < numbers.length; j++){
        if(numbers[i] + numbers[j] == target){
          arr.push(i,j)
        }
      }
    }
    return arr[0] == arr[1] ? arr.slice(2,4) : arr.slice(0,2)
  }

//                  solution

function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}

//                solution

function twoSum(nums,target){
    const arr = [];
    nums.map(function(x,ind1){
      nums.map(function(y,ind2){
        if(x + y == target && ind1 != ind2)
        arr.push(ind1,ind2)
      });
    });
    return [arr[0],arr[1]]
  }

//              solution

function twoSum(numbers, target) {
    console.log([numbers, target]);
    for (var i = 0;i<numbers.length;i++){
    for (var j = i+1;j<numbers.length;j++){
      if (numbers[i]+numbers[j]===target){
        return [i,j];
      }
  
    }
    }
  }