// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

//              solution

function toCamelCase(str){
    str = str.split(str.includes('-') ? '-' : '_')
    fVal = str.shift()
    val = str.map(a => {
      b = a.split('')
      b[0] = b[0].toUpperCase()
      return b.join('')
    })
    val.unshift(fVal)
    return val.join('')
  }



