// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

//          solution

function isIsogram(str){
    str = str.toLowerCase()
    arrStr = str.split('')
    filter = arrStr.filter((a,b) => arrStr.indexOf(a) === b)
    return ( (arrStr.length === filter.length) || (str == '') ) ? true : false
}

//          solution

function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }

  