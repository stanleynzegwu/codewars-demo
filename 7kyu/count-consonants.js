// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

//                solution

function consonantCount(str) {
    const vowel = 'aeiou'
    
    const isConsonant = (l) => {
      return l.charCodeAt(0) >= 97 && l.charCodeAt(0) <= 122
    }
    return str.toLowerCase().split('').reduce((acc,c) => {
      return acc + (vowel.includes(c) ? 0 : isConsonant(c) ? 1 : 0 )
    },0)
}