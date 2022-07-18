// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

//                  solution

function deleteNth(arr,n){
    arr1 = []
    obj = {}
    arr.forEach(a => {
      if(!obj[a]){
        obj[a] = 1
        arr1.push(a)
      }else if(obj[a] < n){
        obj[a] += 1
        arr1.push(a)
      }
    })
    return arr1
  }

//                  solution

function deleteNth(arr,x){
    var obj = {}
    return arr.filter(function(number){
      obj[number] = obj[number] ? obj[number] + 1 : 1
      return obj[number] <= x
    })
  }

//              solution

const deleteNth = (a, x) => {
    let m = {};
    return a.filter( v => (m[v] = m[v]+1||1) <= x );
  }