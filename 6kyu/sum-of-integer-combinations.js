// Consider the array [3,6,9,12]. If we generate all the combinations with repetition that sum to 12, we get 5 combinations: [12], [6,6], [3,9], [3,3,6], [3,3,3,3]. The length of the sub-arrays (such as [3,3,3,3] should be less than or equal to the length of the initial array ([3,6,9,12]).

// Given an array of positive integers and a number n, count all combinations with repetition of integers that sum to n. For example:

// find([3,6,9,12],12) = 5.

//                      solution

function find(arr, target) {
    let result = 0;
    const maxLength = arr.length;
    
    // Helper function for backtracking
    function backtrack(start, currentCombination, currentSum) {
      // If the current sum equals the target, we have found a valid combination
      if (currentSum === target) {
        result++;
        return;
      }
      
      // If the current sum exceeds the target, stop further exploration
      if (currentSum > target) {
        return;
      }
      
      // Explore further by trying each number starting from 'start'
      for (let i = start; i < arr.length; i++) {
        // Include arr[i] and continue
        currentCombination.push(arr[i]);
        
        // Check if the combination length exceeds the array length
        if (currentCombination.length <= maxLength) {
          backtrack(i, currentCombination, currentSum + arr[i]);
        }
        
        // Backtrack by removing the last number
        currentCombination.pop();
      }
    }
    
    // Start backtracking from an empty combination
    backtrack(0, [], 0);
    
    return result;
  }
  
  // Example usage
  console.log(find([3, 6, 9, 12], 12)); // Output: 5
  