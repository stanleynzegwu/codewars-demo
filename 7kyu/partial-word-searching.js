// Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

// The method takes two parameters, the query string and the array of strings to search, and returns an array.

// If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

//                      solution

function wordSearch(query, seq){
    let fil = seq.filter(str => str.toLowerCase().includes(query.toLowerCase()))
    return fil.length ? fil : ["Empty"]
  }