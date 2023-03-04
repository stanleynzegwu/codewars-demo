// Given an array, return the difference between the count of even numbers and the count of odd numbers. 0 will be considered an even number.

// For example:
// solve([0,1,2,3]) = 0 because there are two even numbers and two odd numbers. Even - Odd = 2 - 2 = 0.  
// Let's now add two letters to the last example:

// solve([0,1,2,3,'a','b']) = 0. Again, Even - Odd = 2 - 2 = 0. Ignore letters. 
// The input will be an array of lowercase letters and numbers only.

// In some languages (Haskell, C++, and others), input will be an array of strings:

// solve ["0","1","2","3","a","b"] = 0 

//                                 solution

function solve(a){
  const arr = [[],[]]
  a.forEach((a,b) => {
    if((Number.isFinite(a)) && (a % 2)){
      arr[0].push(a)
    }else if((Number.isFinite(a)) && !(a % 2)){
      arr[1].push(a)
    }
  })
  
  return arr[1].length - arr[0].length
};