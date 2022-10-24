// Can you mirror the properties on an object?

// Given an object with properties with no value

// abc: -
// arara: -
// xyz: -
// Return a new object that have the properties with its mirrored key!

// abc: cba
// arara: arara
// xyz: zyx
// "You cannot change the original object, because if you did that the reflection would change."

//                      solution

var mirror = obj => {
    let expected = Object.entries(obj).map(([key,value]) => [key,key.split('').reverse().join('')])
    return Object.fromEntries(expected)
  };

//                  solution

let mirror = obj => {
    return Object.keys(obj).reduce((m, k) => {
      m[k] = k.split('').reverse().join('');
      return m;
    }, {});
  };