// Given a mixed array of number and string representations of integers, 
// add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

//              solution

function divCon(x){
    string = x.filter(a => !Number.isFinite(a)).reduce((acc,c) => acc + parseInt(c),0)
    num = x.filter(a => Number.isFinite(a)).reduce((acc,c) => acc + c,0)
    return num - string
  }

//              solution

function divCon(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
  }