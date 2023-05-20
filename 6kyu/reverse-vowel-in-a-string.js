// In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
// For simplicity, you can treat the letter y as a consonant, not a vowel.

//                                  solution

function reverseVowels(str) {
  //return true if the letter is a vowel
  const isVowel = (l) => 'AEIOUaeiou'.includes(l)
  
  const arr = str.split('')
  let reversedStr = arr.filter(l => isVowel(l)).reverse()
  return arr.map(l => isVowel(l) ? reversedStr.splice(0,1) : l).join('')
}