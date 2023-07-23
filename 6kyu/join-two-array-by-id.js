// Write a function joinArraysById in JavaScript that takes two arrays, arr1 and arr2, as input. Each array contains objects that have an id field with an integer value. The function should merge arr1 and arr2 based on their id key and return a new array, joinedArray, as the result.

// The joinedArray should be formed by following these rules:

// The length of joinedArray should be equal to the length of unique id values from both arrays combined.
// The objects with unique id values from arr1 and arr2 should be included in the joinedArray without modification.
// If two objects share the same id, their properties should be merged into a single object:
// If a key only exists in one object, include that key-value pair in the merged object.
// If a key exists in both objects, the value from arr2 should override the value from arr1.
// The joinedArray should be sorted in ascending order based on the id key.
// Example 1:

// const arr1 = [
//   { id: 1, x: 1 },
//   { id: 2, x: 9 },
// ]
// const arr2 = [{ id: 3, x: 5 }]

// console.log(joinArraysById(arr1, arr2))
// // Output: [
// //   { "id": 1, "x": 1 },
// //   { "id": 2, "x": 9 },
// //   { "id": 3, "x": 5 }
// // ]
// In the above example, there are no duplicate ids, so arr1 is simply concatenated with arr2.

// Example 2:

// const arr1 = [
//   { id: 1, x: 2, y: 3 },
//   { id: 2, x: 3, y: 6 },
// ]
// const arr2 = [
//   { id: 2, x: 10, y: 20 },
//   { id: 3, x: 0, y: 0 },
// ]

// console.log(joinArraysById(arr1, arr2))
// // Output: [
// //   { "id": 1, "x": 2, "y": 3 },
// //   { "id": 2, "x": 10, "y": 20 },
// //   { "id": 3, "x": 0, "y": 0 }
// // ]
// In the above example, the objects with id=1 and id=3 are included in the result array without modification. The two objects with id=2 are merged together, and the keys from arr2 override the values from arr1.

// Example 3:

// const arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }]
// const arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }]

// console.log(joinArraysById(arr1, arr2))
// // Output: [
// //   { "id": 1, "b": { "c": 84 }, "v": [1, 3], "y": 48 }
// // ]
// In the above example, the two objects with id=1 are merged together. The values for the keys "b" and "v" are taken from arr2, and since the key "y" only exists in arr1, its value is taken from arr1.

// Notes:

// The solution should handle the inclusion of original items in the merged array. If necessary, the objects can be shallow or deep copies, as long as the modifications mentioned above are applied.
// The solution should distinguish between null, undefined, and missing values


//                          solution

function joinArraysById(arr1, arr2) {
  const mergedObj = {}
  arr1.forEach(a => mergedObj[a.id] = a)
  arr2.forEach(a => mergedObj[a.id] = {...mergedObj[a.id], ...a})
  return Object.values(mergedObj)
}