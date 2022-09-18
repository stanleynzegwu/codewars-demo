// To participate in a prize draw each one gives his/her firstname.

// Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.

// The length of the firstname is added to the sum of these ranks hence a number som.

// An array of random weights is linked to the firstnames and each som is multiplied by its corresponding weight to get what they call a winning number.

// Example:
// names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
// weights: [1, 4, 4, 5, 2, 1]

// PauL -> som = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54
// The *weight* associated with PauL is 2 so PauL's *winning number* is 54 * 2 = 108.
// Now one can sort the firstnames in decreasing order of the winning numbers. When two people have the same winning number sort them alphabetically by their firstnames.

// Task:
// parameters: st a string of firstnames, we an array of weights, n a rank

// return: the firstname of the participant whose rank is n (ranks are numbered from 1)

// Example:
// names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
// weights: [1, 4, 4, 5, 2, 1]
// n: 4

// The function should return: "PauL"
// Notes:
// The weight array is at least as long as the number of names, it may be longer.

// If st is empty return "No participants".

// If n is greater than the number of participants then return "Not enough participants".



//                  solution

function rank(st, we, n) {
  
    if (!hasParticipants(st)) {
      return 'No participants';
    }
    
    let firstnames = st.split(',');
    
    let computedWinningNumbers =  firstnames.map(function(firstname, index) {
      const rankOfName = computeRankOfFirstname(firstname);
      const winningNumber = we[index] * rankOfName;
      
      return {
        firstname: firstname,
        winningNumber: winningNumber
      };
    });
    
    const sorted = sortByWinningNumbers(computedWinningNumbers);
    
    if (n > firstnames.length) {
      return 'Not enough participants';
    }
    
    return sorted[n-1].firstname;
  }
  
  function sortByWinningNumbers(computedWinningNumbers) {
    return computedWinningNumbers.sort(function(a, b){
        if (a.winningNumber > b.winningNumber) {
          return -1 
        } else if (a.winningNumber < b.winningNumber) {
          return 1;
        } else {
          if (a.firstname < b.firstname) {
            return -1;
          } else if (a.firstname > b.firstname){
            return 1;
          } else {
            return 0;
          }
        }
    });
  }
  
  function getLetterValue(letter) {
    // Use the ASCII value to get the order position of letter.
    return letter.toLowerCase().charCodeAt(0) - 96;
  }
  
  function computeRankOfFirstname(firstname) {
    return firstname.length + firstname.split('').reduce(function(acc, letter) {
      return acc + getLetterValue(letter);
    }, 0);
  }
  
  function hasParticipants(st) {
    const participants = st.split(',');
    return participants.length === 1 && participants[0] === '' ? false : true;
  }