// Build a function that returns an array of integers from n to 1 where n>0.

//Example : n=5 --> [5,4,3,2,1]

//     MY SOLUTION 

const reverseSeq = n => {
    let arr = []
          for(let i = 1; i<= n; i++){
              arr.push(i)
          }
      arr = arr.sort((a,b) => b-a)
      return arr
  }

  