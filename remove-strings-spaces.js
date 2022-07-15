// Simple, remove the spaces from the string, then return the resultant string.

//                  solution

function noSpace(x){
    res = x.split('').filter(a => a != ' ').join('')
    return res
    }

//              solution

function noSpace(x){return x.split(' ').join('')}