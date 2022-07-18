// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//              solution
//ofcourse there are easierways but i just decided to solve it using objects
function findOdd(A) {
    obj = {}
    let n
    A.forEach((a,b) => {
      if(!obj[a]){
        obj[a] = 1
      }else{obj[a] += 1}
    })
    for(el in obj){
      if(obj[el] % 2 != 0) n = el
    }
  return Number(n)
  }

//            solution

function findOdd(A) {
  let obj = {}
  A.forEach(a => {
    if(!obj[a]){
      obj[a] = 1
    }else{
      obj[a] += 1
    }
  })
  for(let prop in obj){
      if(obj[prop] % 2 != 0) return Number(prop)
  }
}

  //            solution

  function findOdd(A) {
    var obj = {};
    A.forEach(function(el){
      obj[el] ? obj[el]++ : obj[el] = 1;
    });
    
    for(prop in obj) {
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
  }

//              solution
//  don't freak out,Lol
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

