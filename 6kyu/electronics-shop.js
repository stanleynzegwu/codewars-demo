// A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return .

// Example
// b = 60
// keyboard = [40,50,60]
// drives = [5,8,12]


// The person can buy a 40 keyboard + 12 usb drives = 52, or a 50 keyboard and 8 usb drive = 58. Choose the latter as the more expensive option and return 58.

// Function Description

// Complete the getMoneySpent function in the editor below.

// getMoneySpent has the following parameter(s):

// int keyboards[n]: the keyboard prices
// int drives[m]: the drive prices
// int b: the budget
// Returns

// int: the maximum that can be spent, or  if it is not possible to buy both items
// Input Format

// The first line contains three space-separated integers , , and , the budget, the number of keyboard models and the number of USB drive models.
// The second line contains  space-separated integers , the prices of each keyboard model.
// The third line contains  space-separated integers , the prices of the USB drives.

// Constraints

// The price of each item is in the inclusive range .

//                  Solution

// function getMoneySpent(keyboards, drives, b) {
//     /*
//      * Write your code here.
//      */
//     let total = 0
    
//     for(let i = 0; i < keyboards.length; i++){
//         for(let j = 0; j < drives.length; j++){
//             const gadgetSum = keyboards[i] + drives[j]

//             if(gadgetSum > total && gadgetSum <= b){
//                 total = gadgetSum
//             }
//         }
//     }
//     return total || -1
// }

function getMoneySpent(keyboards, drives, b) {
    keyboards.sort((a, b) => a - b); // Sort keyboards in ascending order
    drives.sort((a, b) => b - a); // Sort drives in descending order

    let maxSpent = -1;
    let i = 0; // Pointer for keyboards
    let j = 0; // Pointer for drives

    // Use two pointers to find the maximum sum under budget
    while (i < keyboards.length && j < drives.length) {
        let sum = keyboards[i] + drives[j];
        if (sum <= b) {
            maxSpent = Math.max(maxSpent, sum);
            i++; // Move to the next keyboard (increasing sum)
        } else {
            j++; // Move to the next drive (decreasing sum)
        }
    }

    return maxSpent;
}
