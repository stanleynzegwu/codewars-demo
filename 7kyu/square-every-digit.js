// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

 //               SOLUTION

 function squareDigits(num){
    arr = []
    num = String(num).split('').forEach((a,b) => {
        arr.push(a**2)
    })
      return Number(arr.join(''))
  }

  //            solution

//   function squareDigits(num){
//     let result = num
//       .toString()
//       .split("")
//       .map( num => parseInt(num) )
//       .map( num => num * num )
//       .join("")
     
//     return parseInt(result)
//   }