// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

//          SOLUTION

function oddOrEven(array) {
    sum = array.reduce((acc,c) => acc + c,0)
     if(sum % 2 === 0){
         return 'even'
     }else if(sum % 2 !== 0){
         return 'odd'
     }else{
         return 'even'
     }
 }

 //         SOLUTION 

//  const oddOrEven = a => a.reduce((s,n)=> s + n,0)%2 == 0 ? "even" : "odd"

//          solution

// function oddOrEven(arr) {
//     return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
//   }