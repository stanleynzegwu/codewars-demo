// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

//                      solution

function boredom(staff){
    let score = Object.entries(staff).reduce((acc,[name,dept]) => {
      return acc + (dept == 'accounts' ? 1 : dept == 'finance' ? 2 : dept == 'canteen' ? 
            10 : dept == 'regulation' ? 3 : dept == 'trading' ? 6 : dept == 'change' ?
            6 : dept == 'IS' ? 8 : dept == 'retail' ? 5 : dept == 'cleaning' ? 4 : 
            25)
    },0)
    
    return score <= 80 ? 'kill me now' : score < 100 ? 'i can handle this' : 'party time!!'
  }

//                      solution

function boredom(staff) {
    var teams = { 'accounts'      : 1,
                  'finance'       : 2 ,
                  'canteen'       : 10, 
                  'regulation'    : 3, 
                  'trading'      : 6, 
                  'change'        : 6,
                  'IS'            : 8,
                  'retail'        : 5,
                  'cleaning'      : 4,
                  'pissing about' : 25},
        score = Object.keys(staff)
                      .map(key=>teams[staff[key]])
                      .reduce((a,b) => a+b, 0);
                      
  return score <= 80 ? 'kill me now' : (score > 100 ? 'party time!!' : 'i can handle this');            
  }