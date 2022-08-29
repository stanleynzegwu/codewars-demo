// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6
//                      solution

function calc(x){
    return x
      .split('')
      .map(c => c.charCodeAt(0))
      .join('')
      .split('')
      .map(Number)
      .filter(x => x === 7)
      .length * 6
  }

//                  solution

function calc(x){
    let str = ''
    let result = 0
    for(let i = 0; i < x.length; i++) {
      str += String(x.charCodeAt(i))
    }
    for(let i = 0; i < str.length; i++) {
      if (str[i] === '7') {
        result += 6
      }
    }
    return result
  }