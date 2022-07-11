// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.



//               solution

function correct(s){
    s = s.split('');
    for (var i = 0; i < s.length; i++) {
      if (s[i] === '5') s[i] = 'S';
      else if (s[i] === '0') s[i] = 'O';
      else if (s[i] === '1') s[i] = 'I';
      }
    return s.join('');
  }

//          solution

function correct(string) {
    const map = {
      0: "O",
      1: "I",
      5: "S"
    };
    
    return string
      .split("")
      .map(c => map.hasOwnProperty(c) ? map[c] : c)
      .join("");
  }



