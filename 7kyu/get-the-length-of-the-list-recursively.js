// Write funcion lenR which returns the length of a given list. Try no to cheat and provide recursive solution.

//                                          solution

function lenR(x) {
    if(x.length < 1) return 0
    
    return lenR(x.slice(0,-1)) + 1
  }