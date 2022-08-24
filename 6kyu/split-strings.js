// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

//                  solution

function solution(str){
    str = str.length%2 ? str += '_' : str
    arr = []
    strArr = [...str]
    while(strArr.length){
      arr.push(''.concat(...strArr.splice(0,2)))
    }
    return arr
  }

//                  solution

function solution(str){
    arr = [];
    for(var i = 0; i < str.length; i += 2){
      second = str[i+1] || '_';
      arr.push(str[i] + second);
    }
    return arr;
  }