// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

//                  solution

function checkThreeAndTwo(array) {
    let obj = array.reduce((acc,c) => {
      return acc[c] ? acc[c] += 1 : acc[c] = 1,acc
    },{})
    let arr = Object.values(obj)
    return (arr[0] == 3) && (arr[1] == 2) || (arr[1] == 3) && (arr[0] == 2)
  }


