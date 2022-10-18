// Bob is a lazy man.

// He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1

//                  solution

function countLettersAndDigits(input) {
    let filterded = input.toLowerCase().split('').filter(l => 
    (l.charCodeAt(0) >= 48 && l.charCodeAt(0) <= 57) || (l.charCodeAt(0) >= 97 && l.charCodeAt(0) <= 122))
    
    return filterded.length
  }