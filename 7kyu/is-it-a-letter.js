// Complete the code which should return true if the given object is a single ASCII letter
//  (lower or upper case), false otherwise.

//                  solution

String.prototype.isLetter = function() {
    if(this.length > 1) return false
    return  (this.toLowerCase().charCodeAt(0) >= 97) && (this.toLowerCase().charCodeAt(0) <= 122)
  }