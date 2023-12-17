//Build a function that returns an array of integers from n to 1 where n>0.

//Example : n=5 --> [5,4,3,2,1]

//                              solution

// const reverseSeq = n => {
//   let arr = []

//   while(n > 0){
//     arr.push(n)
//     n--
//   }
//   return arr
// };

const reverseSeq = n => {
    let arr = []
    if(n <= 0) return arr
    
    return [n].concat(reverseSeq(--n))
  };