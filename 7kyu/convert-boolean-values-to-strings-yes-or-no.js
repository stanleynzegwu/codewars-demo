// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//          SOLUTION

function boolToWord( bool ){
    return Boolean(bool) === true ? 'Yes' : 'No'
  }

//          SOLUTION

// function boolToWord( bool ){
//     if(Boolean(bool) === true){
//         return 'yes'
//     }else{
//         return 'no'
//     }
//   }

//              SOLUTION

// function boolToWord( bool ){
//     return bool ? 'Yes':'No';
//   }

//              SOLUTION

// function boolToWord( bool ){
//     if (bool) {
//       return 'Yes';
//     } else {
//       return 'No';
//     }
//   }