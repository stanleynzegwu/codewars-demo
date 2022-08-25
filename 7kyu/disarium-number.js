// Definition
// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

// Task
// Given a number, Find if it is Disarium or not .

//              solution

function disariumNumber(n){
    let number = n.toString();
    let sum = 0;
    
    for (let i=0; i<number.length; i++){
      sum += Math.pow(number[i], i+1);
    }
    
    return n === sum ? "Disarium !!" : "Not !!";
  }

//              solution

const disariumNumber = n => `${n === n
    .toString()
    .split``
    .reduce((r, e, i) => r + e ** (i + 1), 0) ?
    'Disarium' : 
    'Not'} !!`;