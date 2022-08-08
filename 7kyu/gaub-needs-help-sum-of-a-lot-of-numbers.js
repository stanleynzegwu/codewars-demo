// Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.

// Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; so, he can astonish his teacher and rescue his recreation interval.

// Here's, an example:

// f(n=100) // returns 5050 
// It's your duty to verify that n is a valid positive integer number. If not, please, return false (None for Python, null for C#, 0 for COBOL).

// Note: the goal of this kata is to invite you to think about some 'basic' mathematic formula and how you can do performance optimization on your code. 

// Advanced - experienced users should try to solve it in one line, without loops, or optimizing the code as much as they can.

//                      solution

function f(n){
    return (parseInt(n) === n && n > 0) ? n*(n+1)/2 : false;
  };

//                      solution

function f(n){
    return Number.isInteger(n) && n > 0 ? n * (n + 1) / 2 : false;
  };

  //                solution

  function f(n){
    /* This problem can be solved using the summation function in math "n * (n + 1) / 2"
     * Number must be greater than 0 and NOT a decimal hence n % 1 must equal to 0
     * Wrapped up in a beautiful ternary expression you get:
     */
      
    return (n % 1 !== 0 || n <= 0)? false : (((n + 1) * n) / 2) ;
  };