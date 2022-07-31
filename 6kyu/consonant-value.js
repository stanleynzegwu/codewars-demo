// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
// For C: do not mutate input.

// More examples in test cases. Good luck!

//                      solution

const solve = s =>
  Math.max(...s.split(/[aeiou]+/).map(val => [...val].reduce((pre, val) => pre + val.charCodeAt() - 96, 0)));

//                      solution


function solve(s) {
    vowel = 'aeiou'
    str = ''
    for(char of s){
      if(vowel.includes(char)){
        str += ' '
      }else{
        str += char
      }
    }
    arr = str.split(' ').filter(a => a != '')
    numberArr = arr.map(a => {
      sum = 0
      for(let i =0; i < a.length;i++){
        sum += a.charCodeAt(i)-96
      }
      return sum
    })
    return Math.max.apply(null,numberArr)
  };

  //                solution

  function solve(s) {
    let arr = s.replace(/[aeiou]/gi, ' ')
               .split(' ')
               .filter(x => x != '')
               .map(x => x.split('')
                          .map(y => y.charCodeAt() - 96)
                          .reduce((a,b) => a + b ))
    return Math.max(...arr)
  };

//                  solution

const solve = s => Math.max(
    ...s.split(/[aeiou]/g)
      .filter(e => e)
      .map(e => e.split``.reduce((r, e) => r + e.charCodeAt() - 96, 0))
  );

