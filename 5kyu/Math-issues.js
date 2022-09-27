// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()

//                  solution
Math.round = function(number) {
    return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number) ;
  };
  
  Math.ceil = function(number) {
    return (parseInt(number) === number) ? number : parseInt(number) + 1;
  };
  
  Math.floor = function(number) {
    return parseInt(number);
  };


//                   solution

Math.round = function(number) {
    let arr = String(number).split(".").map((a,b) => b == 0 || a.length === 0 ? a : a.split("")[0])
     return arr[1] >= 5 ? +arr[0] + 1 : Number(arr[0])
  };
  
  Math.ceil = function(number) {
    let arr = String(number).split(".")
    return arr[1] > 0 ? +arr[0] + 1 : +arr[0]
  };
  
  Math.floor = function(number) {
    let arr = String(number).split(".")
    return +arr[0]
  };

