// Given a node object representing a binary tree:

// Node:
//   value: <int>,
//   left: <Node> or null,
//   right: <Node> or null
// write a function that returns the sum of all values, including the root. Absence of a node will be indicated with a null value.

// Examples:

// 10
// | \
// 1  2
// => 13

// 1
// | \
// 0  0
//     \
//      2
// => 3

//https://www.codewars.com/kata/5800580f8f7ddaea13000025/train/javascript

//                  solution

// return the sum of all values in the tree, including the root
function sumTheTreeValues(root){
    //convert object to array
    let objToArray = (obj) => Object.values(obj)
    
    return objToArray(root).reduce((acc,c) => {
      return acc + (c === null ? 0 : typeof c === 'number' ? c : sumTheTreeValues(c))
    },0)
  }