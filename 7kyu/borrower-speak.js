// As a result, the borrowers talk very very quietly. They find that capitals and punctuation of any sort lead them to raise their voices and put them in danger.

// The young borrowers have begged their parents to stop using caps and punctuation.

// Change the input text s to new borrower speak. Help save the next generation!

//                              solution

function borrow(s){
    let arr = s.toLowerCase().split('')
    return arr.filter(l => (l.charCodeAt(0) >= 97) && (l.charCodeAt(0) <= 122)).join('')
}