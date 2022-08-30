// Your task is simply to count the total number of lowercase letters in a string.

// Examples
// lowercaseCount("abc"); ===> 3

// lowercaseCount("abcABC123"); ===> 3

// lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

// lowercaseCount(""); ===> 0;

// lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

// lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26

//                  solution

function lowercaseCount(str){
    if(str.length < 1) return 0
  return str.charCodeAt(0) > 96 && str.charCodeAt(0) < 123 ? 1 + lowercaseCount(str.slice(1)) : 0 + lowercaseCount(str.slice(1))
}

//                  solution

function lowercaseCount(str) {
    return Array.from(str).reduce((n, c) => n + ("a" <= c && c <= "z" ? 1 : 0), 0)
  }