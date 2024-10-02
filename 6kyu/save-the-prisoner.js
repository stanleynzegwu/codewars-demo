// A jail has a number of prisoners and a number of treats to pass out to them. Their jailer decides the fairest way to divide the treats is to seat the prisoners around a circular table in sequentially numbered chairs. A chair number will be drawn from a hat. Beginning with the prisoner in that chair, one candy will be handed to each prisoner sequentially around the table until all have been distributed.

// The jailer is playing a little joke, though. The last piece of candy looks like all the others, but it tastes awful. Determine the chair number occupied by the prisoner who will receive that candy.

// Example




// There are  prisoners,  pieces of candy and distribution starts at chair . The prisoners arrange themselves in seats numbered  to . Prisoners receive candy at positions . The prisoner to be warned sits in chair number .

// Function Description

// Complete the saveThePrisoner function in the editor below. It should return an integer representing the chair number of the prisoner to warn.

// saveThePrisoner has the following parameter(s):

// int n: the number of prisoners
// int m: the number of sweets
// int s: the chair number to begin passing out sweets from
// Returns

// int: the chair number of the prisoner to warn

//                  solution

// function saveThePrisoner(n, m, s) {
//     // Write your code here
//     let current = s
//     for(let i = 1; i < m; i++){
//         current <= n - 1 ? current++ : current = 1
//     }
//     return current
// }

// OPTIMAL APPROACH
function saveThePrisoner(n, m, s) {
    let result = (s - 1 + m) % n;
    return result === 0 ? n : result;
}

//Optimal Approach Reasoning
// There is a more efficient mathematical approach to this problem. Instead of simulating the candy distribution one by one, you can compute the final position of the last sweet using modular arithmetic.

// Here’s the reasoning:

// The distribution starts at seat s.
// After distributing all m sweets, the position where the last sweet will be given is (s - 1 + m) % n.
// s - 1: Because you start distributing from chair s, but the 0th sweet is already on seat s.
// + m: The number of sweets being distributed.
// % n: To wrap around the circular table after reaching the last seat (if necessary).
// Finally, add 1 to the result to account for 1-based indexing (since seats are numbered from 1 to n, not 0 to n-1).