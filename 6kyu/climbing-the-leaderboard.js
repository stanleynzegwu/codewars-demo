// An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:

// The player with the highest score is ranked number  on the leaderboard.
// Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
// Example



// The ranked players will have ranks , , , and , respectively. If the player's scores are ,  and , their rankings after each game are ,  and . Return .

// Function Description

// Complete the climbingLeaderboard function in the editor below.

// climbingLeaderboard has the following parameter(s):

// int ranked[n]: the leaderboard scores
// int player[m]: the player's scores
// Returns

// int[m]: the player's rank after each new score
// Input Format

// The first line contains an integer , the number of players on the leaderboard.
// The next line contains  space-separated integers , the leaderboard scores in decreasing order.
// The next line contains an integer, , the number games the player plays.
// The last line contains  space-separated integers , the game scores.

//                      solution

function climbingLeaderboard(ranked, player) {
    // Step 1: Remove duplicates from ranked
    let uniqueRanked = [...new Set(ranked)];
    
    // Step 2: Initialize results array
    let result = [];
    
    // Step 3: Start from the end of uniqueRanked and move upwards
    let rankIndex = uniqueRanked.length - 1;

    // Step 4: For each score in player, find the appropriate rank
    for (let i = 0; i < player.length; i++) {
        let playerScore = player[i];

        // Move up the leaderboard while player's score is higher than or equal to the rank
        while (rankIndex >= 0 && playerScore >= uniqueRanked[rankIndex]) {
            rankIndex--;
        }

        // The player's rank is (rankIndex + 2) because rankIndex is 0-based, and we are moving down.
        result.push(rankIndex + 2);
    }

    return result;
}

// Example usage:
let ranked = [100, 90, 90, 80];
let player = [70, 80, 105];
console.log(climbingLeaderboard(ranked, player)); // Output: [4, 3, 1]
