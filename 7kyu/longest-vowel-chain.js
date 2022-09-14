// The vowel substrings in the word codewarriors are o,e,a,io. 
// The longest of these has a length of 2. 
// Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, 
// return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

//              solution

function solve(s) {
    let cur = 0
    let max = 0
    for (let i = 0; i < s.length; ++i) {
      if ("aeiou".includes(s[i])) {
        cur++
        if (cur > max) {
          max = cur
        }
      } else {
        cur = 0
      }
    }
    return max
  }

//              solution

function solve(s){
    let vowels = ['a','e','i','o','u'];
    let count = 0;
    let highestCount = 0;
    for (let i = 0; i < s.length -1; i++) {
      if (vowels.includes(s[i]) && vowels.includes(s[i + 1])) {
        count++;
      } else {
        if (highestCount < count) highestCount = count;
        count = 1;
      }
    }
    return highestCount;
  }