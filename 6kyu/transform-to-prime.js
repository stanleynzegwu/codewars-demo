// Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .

// Notes
// List size is at least 2 .

// List's numbers will only positives (n > 0) .

// Repetition of numbers in the list could occur .

// The newer list's sum should equal the closest prime number .

// Input >> Output Examples
// 1- minimumNumber ({3,1,2}) ==> return (1)
// Explanation:
// Since , the sum of the list's elements equal to (6) , the minimum number to be inserted to transform the sum to prime number is (1) , which will make the sum of the List equal the closest prime number (7) .
// 2-  minimumNumber ({2,12,8,4,6}) ==> return (5)
// Explanation:
// Since , the sum of the list's elements equal to (32) , the minimum number to be inserted to transform the sum to prime number is (5) , which will make the sum of the List equal the closest prime number (37) .
// 3- minimumNumber ({50,39,49,6,17,28}) ==> return (2)
// Explanation:
// Since , the sum of the list's elements equal to (189) , the minimum number to be inserted to transform the sum to prime number is (2) , which will make the sum of the List equal the closest prime number (191) .

//                      solution

function isPrime(n) {
    for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
      if(n % i == 0)
        return false
    }
    return true
  }

function minimumNumber(numbers){
  let sum = numbers.reduce((acc,c) => acc + c,0)
  //if the sum is a prime, then return 0 because no number needs to be added
  if(isPrime(sum)) return 0
  //if the sum isn't prime,check the number that needs to be added to make the sum a prime
  let num = 0
  do{
    num += 1
    sum += 1
  }while(!isPrime(sum))
    return num
  
}

//                      solution

function minimumNumber(numbers){
    let sum = numbers.reduce((a,b) => a + b)
    for(let i = sum; ; i++) {
      if(prime(i)) return i - sum
    }
    function prime(a) {
      if(a < 2) return false
      if(a % 2 === 0) return a === 2
      for(let i = 3; i * i < a; i += 2) {
        if(a % i === 0) return false
      }
      return true
    }
  }