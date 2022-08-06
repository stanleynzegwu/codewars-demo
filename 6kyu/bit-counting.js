// Write a function that takes an integer as input, 
// and returns the number of bits that are equal to one in the binary representation of that number.
//  You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

//                          solution

var countBits = function(n) {
    val = n.toString(2)
    arr = val.split('')
    return arr.filter(a => a == 1).length
  };

//                          solution

countBits = n => n.toString(2).split('0').join('').length;
