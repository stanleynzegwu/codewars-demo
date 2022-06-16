// A hero is on his way to the castle to complete his mission.
// However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, 
//our hero has no idea how many bullets he should carry..
// Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise

//      MY SOLUTION

// function hero(bullets, dragons){
//     if(bullets >= (dragons * 2) ){
//       return true
//   }else{
//       return false}
//   }

//MY SOLUTION 2(SOLVING WITH TERNARY)

// const hero = (bullets, dragons) => (bullets >= (dragons * 2) ) ? 'true' : 'false'

// MY SOLUTION 3

const hero = (bullets,dragons) => (bullets >= (dragons * 2) )|| false // THE OR operator(||) is looking for the 
// first truthy value,and if there is no truthy value, it returns the last value.