// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

//                      solution

function initializeNames(name){
    let arrOfWords = name.split(' ')
    if(arrOfWords.length < 3) return arrOfWords.join(' ')
    
    let len = arrOfWords.length - 1
    return arrOfWords.map((word,i) => (i == 0 || i == len) ? word : word.charAt(0)+'.').join(' ')
  }

//                      solution

function initializeNames(name){
    var arr = name.split(' ');
     for (var i = 1; i < arr.length - 1; i++) 
        arr[i] = arr[i].charAt(0) + '.';
     return arr.join(' ');
  }