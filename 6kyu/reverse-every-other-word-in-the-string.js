/*Reverse every other word in a given string,
then return the string. Throw away any leading or trailing whitespace,
while ensuring there is exactly one space between each word. 
Punctuation marks should be treated as if they are a part of the word in this kata.*/

//                                   solution

function reverse(str){
    return str.split(' ').map((a,b) => b%2 ? a.split('')
    .reverse().join('') : a).filter(a => a != '').join(' ')
                             
  }

//                              solution

function reverse(str){
  
    let arr = str.split(" "); 
  
    for(var i = 1; i<arr.length; i+=2){
        arr[i] = arr[i].split('').reverse().join(""); 
    }
    
    return arr.join(" ").trim(); 
    
  }