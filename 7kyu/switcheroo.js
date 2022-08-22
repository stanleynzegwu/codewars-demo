// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

//                  solution

function switcheroo(x){
    obj = {a:'b',b:'a'}
    return x.split('').map(a => obj[a] || a).join('')
  }

//                  solution

const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")