// When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

// Example:

// 'red white blue' //returns string value of white

// 'red blue gold' //returns gold

//                  solution

function longestWord(stringOfWords){
    let arr = stringOfWords.split(' ')
    let map = arr.map(word => word.length)
    let max = Math.max(...map)
    return arr[map.lastIndexOf(max)]
  }

//                  solution

function longestWord(str){
    return str.split(' ').sort((b, a) => b.length - a.length).pop();
  }