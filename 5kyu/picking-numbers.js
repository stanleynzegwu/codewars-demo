// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to .

// Example


// There are two subarrays meeting the criterion:  and . The maximum length subarray has  elements.

// Function Description

// Complete the pickingNumbers function in the editor below.

// pickingNumbers has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the length of the longest subarray that meets the criterion
// Input Format

// The first line contains a single integer , the size of the array .
// The second line contains  space-separated integers, each an .

// Constraints

// The answer will be .
// Sample Input 0

// 6
// 4 6 5 3 3 1
// Sample Output 0

// 3
// Explanation 0

// We choose the following multiset of integers from the array: . Each pair in the multiset has an absolute difference  (i.e.,  and ), so we print the number of chosen integers, , as our answer.

// Sample Input 1

// 6
// 1 2 2 3 1 2
// Sample Output 1

// 5
// Explanation 1

// We choose the following multiset of integers from the array: . Each pair in the multiset has an absolute difference  (i.e., , , and ), so we print the number of chosen integers, , as our answer. javascript, and explain every bit of it

//                      solution

function pickingNumbers(a) {
    // Create an array to store the frequency of each number
    const frequency = new Array(100).fill(0);
    
    // Count the frequency of each element in the array
    for (let num of a) {
        frequency[num]++;
    }
    
    let maxLength = 0;

    // Iterate through the frequency array and find the maximum length
    for (let i = 1; i < 100; i++) {
        maxLength = Math.max(maxLength, frequency[i] + frequency[i - 1]);
    }

    return maxLength;
}

// Example usage:
console.log(pickingNumbers([4, 6, 5, 3, 3, 1])); // Output: 3
console.log(pickingNumbers([1, 2, 2, 3, 1, 2])); // Output: 5
