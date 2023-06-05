// Write a function that outputs the transpose of a matrix - a new matrix where the columns and rows of the original are swapped.

// For example, the transpose of:

// | 1 2 3 |
// | 4 5 6 |
// is

// | 1 4 |
// | 2 5 |
// | 3 6 |
// The input to your function will be an array of matrix rows. You can assume that each row has the same length, and that the height and width of the matrix are both positive.

//                                 solution

const firstElement = (arr) => {
  return arr.splice(0,1)
}

function transpose(matrix) {
  let array = []
 
 while(matrix[0].length){
    const reduce = matrix.reduce((acc,c) => {
   return acc.concat(firstElement(c))
 },[])
    
    array.push(reduce)
 }
  
  return array
}