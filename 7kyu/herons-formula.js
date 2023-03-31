// Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).

// Heron's formula:

//Math.sqrt(s∗(s−a)∗(s−b)∗(s−c))
// ​
 
// where
// s = a+b+c/2
// ​
 
// Output should have 2 digits precision.

//                              solution

function heron(a, b, c) {
    let s = (a+b+c)/2
    
    let val = Math.sqrt(s*(s-a)*(s-b)*(s-c))
    return Number(val.toFixed(2))
  }