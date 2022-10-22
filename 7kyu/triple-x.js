// Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

// tripleX("abraxxxas") → true
// tripleX("xoxotrololololololoxxx") → false
// tripleX("softX kitty, warm kitty, xxxxx") → true
// tripleX("softx kitty, warm kitty, xxxxx") → false
// Note :

// capital X's do not count as an occurrence of "x".
// if there are no "x"'s then return false

//                  solution

function tripleX(str){
    //split the str into array and findIndex 'x', findIndex return the first index
    //if findIndex returns -1 then return false because no string 'x' in the array
    let firstIndex = str.split('').findIndex(num => num === 'x')
    if(firstIndex === -1) return false
    
    let [a,b] = str.split('').splice(firstIndex + 1,2);
    return a === 'x' && b == "x" ? true : false
  }

//                  solution

const tripleX = str => { 
    let x = str.indexOf('x')
    return x > -1 && x === str.indexOf('xxx') 
}