// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//                  solution

function removeUrlAnchor(url){
    str = ''
    for(let i = 0;i < url.length; i++){
      if(url[i] != '#'){
        str += url[i]
      }else break
    }
    return str
  }

//                  solution

function removeUrlAnchor(url){
    return url.split('#')[0];
  }

//   The split() function seperates the string at a specific point(s) and returns before and after that point in an array. For example, if url = 'hello.com' and you ran url.split('.') it would take the string 'hello.com', then seperate it into an array of ['hello', 'com'] with index[0] = 'hello'. So, if url = 'www.hello.com' and split('.') was ran the returning array would be ['www', 'hello', 'com'] with index[0] = 'www'

//   So, what he is doing with the above kata is splitting the url string at '#' and returning index[0] of the new array which is everything before '#'. However, if '#' isn't found in the url string then is simple returns the entire string in the array which would still be index[0].