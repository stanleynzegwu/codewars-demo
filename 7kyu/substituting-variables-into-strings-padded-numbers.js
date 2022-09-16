// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

//                  solution

function solution(value){
    value = String(value)
    while(value.length < 5) value = '0' + value
    return`Value is ${value}`
  }

//                  solution

const solution = value => 'Value is ' + value.toString().padStart(5, '0');

//                  solution

function solution(value){
    return "Value is " + ("00000" + value).slice(-5);
  }