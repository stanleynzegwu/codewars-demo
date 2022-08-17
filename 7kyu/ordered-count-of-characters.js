// Count the number of occurrences of each character and 
// return it as a list of tuples in order of appearance.
//  For empty output return an empty list.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

//                  solution

const orderedCount = function (text) {
    let map = new Map()
    for(l of text){
      if(map.has(l)){
       map.set(l,map.get(l) + 1)
      }else{
        map.set(l,1)
      }
    }
    return Array.from(map)
  }

//                  solution

const orderedCountt = s =>
  Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));

//                 solution

const orderedCoun = (text) =>{
    // Implement me!
    const arr = [...new Set([...text])]
    return arr.map(el => [el, [...text].filter(e => e === el).length]);
  }