// Practice
// Complete challenging Kata to earn honor and ranks. Re-train to hone technique
// Freestyle Sparring
// Take turns remixing and refactoring others code through Kumite
// Community
// Leaderboards
// Achieve honor and move up the global leaderboards
// Chat
// Join our Discord server and chat with your fellow code warriors
// Discussions
// View our Github Discussions board to discuss general Codewars topics
// About
// Docs
// Learn about all of the different aspects of Codewars
// Blog
// Read the latest news from Codewars and the community
// Stan_nz Avatar
// 4 kyu
// 1,309
// 6 kyu
// Numbers of Letters of Numbers
// 1394796% of 364901 of 2,083marbiru1 Issue Reported
//  JavaScript
// Node v18.x
// VIM
// EMACS
// Instructions
// Output
// If we write out the digits of "60" as English words we get "sixzero"; the number of letters in "sixzero" is seven. The number of letters in "seven" is five. The number of letters in "five" is four. The number of letters in "four" is four: we have reached a stable equilibrium.

// Note: for integers larger than 9, write out the names of each digit in a single word (instead of the proper name of the number in English). For example, write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).

// For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium:

// Examples
// numbersOfLetters(60) --> ["sixzero", "seven", "five", "four"]
// numbersOfLetters(1) --> ["one", "three", "five", "four"]

//                                      solution

const mapNumToWords = {
    '0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four',
    '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine'
  };
  
  function numToWords(num) {
    let word = '';
    for (let x of String(num)) {
      word += mapNumToWords[x];
    }
    return word;
  }
  
  function numbersOfLetters(integer) {
    let arr = [];
    let word = numToWords(integer);
  
    while (true) {
      arr.push(word);
      let wordLength = numToWords(word.length);
  
      if (wordLength === 'four') {
        arr.push(wordLength);
        break;
      }
  
      word = wordLength;
    }
  
    return arr;
  }