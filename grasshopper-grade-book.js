// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

//          SOLUTION

function getGrade (s1, s2, s3) {
    let averageGrade = (s1 + s2 + s3) / 3
    return averageGrade >= 90 ? 'A' : averageGrade >= 80 ? 'B' : averageGrade >= 70 ? 'C' : averageGrade >= 60 ? 'D' : 'F' 
  }

//          SOLUTION

function getGrade (s1, s2, s3) {
    avg = (s1+s2+s3)/3;
    if (avg < 60)  return "F";
      else if (avg < 70) return "D";
      else if (avg < 80) return "C";
      else if (avg < 90) return "B";
      else return "A";
  }