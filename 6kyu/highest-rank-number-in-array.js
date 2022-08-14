// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

//                  solution

function highestRank(arr){
    let obj = {}
    arr.forEach(a => {
      obj[a] ? obj[a] += 1 : obj[a] = 1
    })
    objArr = Object.values(obj)
    h = objArr.sort((a,b) => b-a)[0]
      val = []
      for(let prop in obj){
          if(obj[prop] == h) val.push(prop)
      }
      return Number(Math.max.apply(null,val))
  }


