// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

//                  solution

var encryptThis = function(text) {
    str = text.split(' ')
    return str.map(a => {
      arr = a.split('')
      arr[0] = arr[0].charCodeAt()
      second = arr[1]
      last = arr[arr.length-1]
      arr[1] = last
      arr[arr.length-1] = second
      return arr.join('')
    }).join(' ')
  }
