// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

//              SOLUTION

// function findUniq(arr) {
//     s = [...new Set(arr)]
//      array = []
     
//      for(let i = 0;i < arr.length; i++){
//        if(arr[i] == arr[arr.length - 1]){
//          array.push(arr[i])
//        }else if(arr[i] == arr[1]){
//          array.push(arr[i])
//        }else if(arr[i] == arr[arr.length - 1]){
//          array.push(arr[i])
//      }
       
//      if(array[0] === s[0]){
//        s.shift(s[0])
//      }else{
//        s.pop(s[s.length - 1])
//      }
//      return s[0]
//    }
//      }

     
//              SOLUTION

function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
  }

//          solution

function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
  }