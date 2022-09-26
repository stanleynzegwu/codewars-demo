// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

// Example:

// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false
// Try to avoid using the % (modulo) operator.

//                  solution

function divisibleByThree(str){
//use split to convert the string to array of individual strings
//use reduce array method to sum all the digits(each current value will be converted to number), then divide by 3

    let val = str.split('').reduce((acc,c) => acc + +c,0)/3
    //then check if the computed val is an integer or not an integer
    return Number.isInteger(val)
  }