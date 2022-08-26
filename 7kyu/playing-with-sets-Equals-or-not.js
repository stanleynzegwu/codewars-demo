// A Set lets you store unique values of any type. It comes with some useful methods like .add, .clear, .has . . . BUT some "Set operations" are missing, like . . .

// Equality

// Two sets ( A, B ) are considered "equal" if all elements of A are elements of B and all elements of B are elements of A no matter "order" of elements.

// Examples:
//   {1, 2} == {2, 1}
//   {1, 2} != {1, 2, 3}
// Task
// Create 2 functions, areEqual and notEqual, getting 2 sets as arguments and returning a true or false depending if these 2 sets are "equal" (respectively not equal) ie : if all elements of 1st set are elements of 2d and all elements of 2d set are elements of 1st.

// Examples:
// A  = new Set([1,2]);
// A2 = new Set([2,1]);
// B  = new Set([2,3]);

// areEqual(A,B)  // -> false
// areEqual(A,A2) // -> true
// notEqual(A,B)  // -> true

//                  solution

function areEqual(s1, s2){
    s = new Set([...s1.values()].concat([...s2.values()]))
    return (s.size == s1.size) && (s.size == s2.size)
  }
  
  function notEqual(s1, s2){
    s = new Set([...s1.values()].concat([...s2.values()]))
    return (s.size !== s1.size) || (s.size !== s2.size)
  }

//                solution

const areEqual = (s1,s2) => s1.size === s2.size && [...s1].every(e => s2.has(e));
const notEqual = (s1,s2) => !areEqual(s1,s2);

//                  solution

function areEqual(s1, s2){
    return [...s1].every(x => s2.has(x)) && [...s2].every(x => s1.has(x));
  }
  
  function notEqual(s1, s2){
    return !areEqual(s1, s2);
  }