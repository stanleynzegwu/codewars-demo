// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

// Example

// There are two each of types  and , and one sighting of type . Pick the lower of the two types seen twice: type .

//                  solution


const migratoryBirds = (arr) => {
    //Calculate the number of occurence for each number
    const numOccurences = arr.reduce((acc,c) => ((acc[c] ? acc[c] += 1 : acc[c] = 1),acc),{})
    const maxOccurence = Math.max(...Object.values(numOccurences))
      const filterArr = Object.entries(numOccurences).filter(([_,num]) => {
        return num === maxOccurence
    })
    //return num with the highest occurence, min if more than 1
    return Math.min(...filterArr.map(([key,_]) => Number(key)))
}

migratoryBirds([1,1,2,2,3])