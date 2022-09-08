// Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

// s1 = "A aaaa bb c"

// s2 = "& aaa bbb c d"

// s1 has 4 'a', 2 'b', 1 'c'

// s2 has 3 'a', 3 'b', 1 'c', 1 'd'

// So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

// We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

// The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

// In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

// Hopefully other examples can make this clearer.

// s1 = "my&friend&Paul has heavy hats! &"
// s2 = "my friend John has many many friends &"
// mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1="Are the kids at home? aaaaa fffff"
// s2="Yes they are here! aaaaa fffff"
// mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
// Note for Swift, R, PowerShell
// The prefix =: is replaced by E:

// s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// mix(s1, s2) --> "1:mmmmmm/E:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/E:ee/E:ss"

//                  solution

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

function mix(s1, s2) {
  return alphabet
    .map(char => {
      const s1Count = s1.split('').filter(x => x === char).length,
            s2Count = s2.split('').filter(x => x === char).length,
            maxCount = Math.max(s1Count, s2Count);

      return {
        char: char,
        count: maxCount,
        src: maxCount > s1Count ? '2' : maxCount > s2Count ? '1' : '='
      };
    })
    .filter(c => c.count > 1)
    .sort((objA, objB) => objB.count - objA.count || (objA.src + objA.char > objB.src + objB.char ? 1 : -1))
    .map(c => `${c.src}:${c.char.repeat(c.count)}`)
    .join('/');
}

//                  solution

const sanitise = string => {
    return string
            .split('')
            .filter(Boolean)
            .filter(c => 'abcdefghijklmnopqrstuvwxyz'.indexOf(c) > -1)
            .filter(c => string.match(new RegExp(c, 'g')).length > 1)
            .join('');
  }
  
  const group = string => {
    return string.split('').sort().reduce((acc, c, i, arr) => {
      if (!acc[c]) acc[c] = arr.slice(arr.indexOf(c), arr.lastIndexOf(c) + 1).length;
      return acc;
    }, {});
  }
  
  const alphaSort = (a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  }
  
  const sort = (a, b) => {
    const comparator = a.split(':')[1].length - b.split(':')[1].length;
    return comparator !== 0 ? comparator : alphaSort(a, b);
  }
  
  const repeat = (c, n) => {
    return Array(n + 1).join(c)
  }
  
  function mix(s1, s2) {
    const group1 = group(sanitise(s1));
    const group2 = group(sanitise(s2));
    const keys = [...Object.keys(group1), ...Object.keys(group2)];
  
    return keys
      .filter((c, i, arr) => arr.indexOf(c) === i)
      .reduce((output, k) => {
        const len1 = group1[k] || 0;
        const len2 = group2[k] || 0;
  
        if (len1 === len2) {
          return [...output, `=:${repeat(k, len1)}`];
        }
        else if (len1 > len2) {
          return [...output, `1:${repeat(k, len1)}`];
        }
        else {
          return [...output, `2:${repeat(k, len2)}`];
        }
        return output;
      }, [])
      .sort(sort)
      .reverse()
      .join('/');
  }

  //                    solution

  const mix = (s1, s2) =>
  [...`abcdefghijklmnopqrstuvwxyz`].map(val => [val, s1.split(val).length - 1, s2.split(val).length - 1])
    .filter(([a, b, c]) => b > 1 || c > 1)
    .map(([a, b, c]) => [a, b > c ? `1` : b < c ? `2` : `=`, Math.max(b, c)])
    .sort((a, b) => b[2] - a[2] || a[1].charCodeAt() - b[1].charCodeAt() || a[0].charCodeAt() - b[0].charCodeAt())
    .map(([a, b, c]) => `${b}:${a.repeat(c)}`).join(`/`);