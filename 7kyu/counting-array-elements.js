// Write a function that takes an array and counts the number of each unique element present.

// count(['james', 'james', 'john']) 
// #=> { 'james': 2, 'john': 1}

//                  solution

function count(array){
    obj = {}
   array.forEach(a => obj[a] ? obj[a] += 1 : obj[a] = 1)
   return obj
 }

//                   solution

function count(array){
    return array.reduce((stack, value) =>{
      return stack[value] ? stack[value]++ : stack[value] = 1, stack;
    }, {});
  }