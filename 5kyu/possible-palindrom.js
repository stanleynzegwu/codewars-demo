// A Palindrome is a string which reads the same backward or forward. Find the length of the longest palindrome you can get from the given string s by removing some (possibly zero) characters.

// Let's define the shortest palindrome string is the single character(length 1).

// Input/Output
// [input] string s

// A string consisting of lowercase and uppercase English letters, digits and symbols.

// 3 ≤ s.length ≤ 100

// [output] an integer

// A positive integer, the longest palindrome that can be obtained.

// Example
// For s = "foundpalindrome", the output should be 5.

// One of the possible palindromes that can be constructed is "onino". There are other palindromes of length 5, but none of greater length.

// For s = "abc", the output should be 1.

// There is no palindrome that length greater than 1.

//                                         solution

function possiblePalindrome(s) {
  if (s.length <= 1) return s.length;
  let pos = [possiblePalindrome(s.slice(1))];
  let last = s.lastIndexOf(s[0]);
  if (last) pos.push(2 + possiblePalindrome(s.slice(1, last)));
  return Math.max(...pos);
}