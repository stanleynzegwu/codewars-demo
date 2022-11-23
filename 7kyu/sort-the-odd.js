// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
// Zero isn’t an odd number and you don’t need to move it. If you have an empty array, you need to return it.

//                          solution

function sort(arr){
    let odd = [...arr].filter(num => num % 2).sort((a,b) => a - b)
 
     return arr.map(num => num % 2 ? odd.shift() : num)
 }