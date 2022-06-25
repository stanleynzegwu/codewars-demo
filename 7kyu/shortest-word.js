// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//          solution

function findShort(s){
    arr = s.split(' ')
    val = arr.map((a,b) => a.length)
    return Math.min(...val)
  }

//          solution

function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }

