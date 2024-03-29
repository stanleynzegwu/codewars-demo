// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// Note: The output array should be sorted alphabetically by key name.

//                          solution

function convertHashToArray(hash){
    return Object.entries(hash).sort(([key,value],b) => key.localeCompare(b))
  }