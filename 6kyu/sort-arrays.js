// Sort the given array of strings in alphabetical order, case insensitive. For example:

// ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
// ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

//                  solution
//solving with quicksort

sortme = function( names ){
    if(names.length < 2)return names
    
    let pivot = names[0]
    let left = []
    let right = []
    for(let i = 1; i < names.length; i++){
      names[i].toLowerCase() < pivot.toLowerCase() ? left.push(names[i]) : right.push(names[i])
    }
    
    return sortme(left).concat(pivot,sortme(right))
  }