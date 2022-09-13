// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

//                  solution

function incrementString (strng) {
    if(!strng.length){
      return 1
    }else if(!Number(strng.slice(-1)) ){
       strng + '1'
    }
      
    let str = [...strng].filter(a => !isFinite(a))
    let num = [...strng].filter((a) => isFinite(a))
    let sum = Number(num.join('')) + 1
    while(String(sum).length < num.length){sum = '0'+sum}
    
    return str.join('') + sum   
}

