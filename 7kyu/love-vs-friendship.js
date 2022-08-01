// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.

//              solution

const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)

//              solution

function wordsToMarks(str)
{
  var sum = 0;
  for (let i = 0; i < str.length; i++)
    sum += str.charCodeAt(i) - 96;
  return sum;
}