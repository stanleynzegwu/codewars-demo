// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

//                  solution

function remove (string) {  
    string = string.split('')
    while(string[string.length - 1] == '!'){
      string.pop()
    }
    return string.join('')
  }

//                  solution

function remove(s){
    //coding and coding....
    while (s[s.length - 1] === '!') {
      s = s.slice(0, -1);
    }
    return s;
  }

//                solution

function remove(s){
    let res = s;
     for(let i = s.length-1; i >= 0; i-- ){
       if(s[i] == "!"){res = res.slice(0, -1)}
       else{break;}
     }
     return res;  
   }