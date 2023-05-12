// You have an array of numbers 1 through n (where 1 <= n <= 10). The array needs to be formatted correctly for the person reading the countdown of a spaceship launch.

// Unfortunately, the person reading the countdown only knows how to read strings. After the array is sorted correctly make sure it's in a format he can understand.

// Between each number should be a space and after the final number (n) should be the word 'liftoff!'

//                          solution

function liftoff(instructions){
    const sortedArr = instructions.sort((a,b) => b - a)
    return [...sortedArr,'liftoff!'].join(' ')
  }