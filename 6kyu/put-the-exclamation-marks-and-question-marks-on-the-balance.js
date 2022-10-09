// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

// Examples
// "!!", "??"     -->  "Right"
// "!??", "?!!"   -->  "Left"
// "!?!!", "?!?"  -->  "Left"
// "!!???!????", "??!!?!!!!!!!"  -->  "Balance"

//                      solution

function balance(left,right){
    let arr = [left,right].map(l => l.split('').reduce((acc,c) => 
      acc + (c === '!' ? 2 : 3),0))
    let [a,b] = arr
    return a > b ? "Left" : a < b ? "Right" : "Balance"
  }

//                      solution

function balance(left,right){
    l=[...left].reduce((s,a)=>s+(a=='?'?3:2),0);
    r=[...right].reduce((s,a)=>s+(a=='?'?3:2),0);
    return l==r?"Balance":l>r?"Left":"Right"
 }