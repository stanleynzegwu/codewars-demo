// Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

// Note: This includes any characters

// Examples
// 'abbbbc'  => 'abc'    #  answer: 3
// 'abbcca'  => 'abca'   #  answer: 2
// 'ab cca'  => 'ab ca'  #  answer: 1

//              solution

function countRepeats(str) {
    let arr = str.split('');
    
    arr = arr.filter((char, idx) => char !== arr[idx + 1]);
    
    return str.length - arr.length;
  }