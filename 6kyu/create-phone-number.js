// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

//                          solution

function createPhoneNumber(numbers){
    let arr = [numbers.slice(0,3),numbers.slice(3)]
    
    return `(${arr[0].join('')}) ${[...arr[1].slice(0,3),'-',...arr[1].slice(3)].join('')}`
    
  }