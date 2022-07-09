// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

//              solution

function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}

//              solution

var isTriangle = (a,b,c) => Math.max(a,b,c)<(a+b+c)/2

//              solution

function isTriangle(a,b,c) {
    if(a > 0 && b > 0 && c > 0) {
      if(a < b + c && b < a + c && c < a + b) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
     return false;
    }
  }
  
  console.log(isTriangle(1,2,2));
  console.log(isTriangle(-1,2,2));
  console.log(isTriangle(-1,-2,2));
  console.log(isTriangle(4,5,2));
  console.log(isTriangle(0,5,2));
  console.log(isTriangle(0,0,0));