// We’ve all seen katas that ask for conversion from snake-case to camel-case, from camel-case to snake-case, or from camel-case to kebab-case — the possibilities are endless.

// But if we don’t know the case our inputs are in, these are not very helpful.

// Task:
// So the task here is to implement a function (called id in Ruby/Crystal/JavaScript/CoffeeScript and case_id in Python/C) that takes a string, c_str, and returns a string with the case the input is in. The possible case types are “kebab”, “camel”, and ”snake”. If none of the cases match with the input, or if there are no 'spaces' in the input (for example in snake case, spaces would be '_'s), return “none”. Inputs will only have letters (no numbers or special characters).

// Some definitions
// Kebab case: lowercase-words-separated-by-hyphens

// Camel case: lowercaseFirstWordFollowedByCapitalizedWords

// Snake case: lowercase_words_separated_by_underscores

// Examples:
// id(“hello-world”) #=> “kebab”
// id(“hello-to-the-world”) #=> “kebab”
// id(“helloWorld”) #=> “camel”
// id(“helloToTheWorld”) #=> “camel”
// id(“hello_world”) #=> “snake”
// id(“hello_to_the_world”) #=> “snake”
// id(“hello__world”) #=> “none”
// id(“hello_World”) #=> “none”
// id(“helloworld”) #=> “none”
// id(“hello-World”) #=> “none”

//                  solution

// Identify the case as camel, kebab, or snake
function id(c_str) {
    // Perform various checks of the string contents
    var anyHyphens = c_str.indexOf("-") != -1;
    var anyMultipleH = c_str.indexOf("--") != -1;
    var anyUnderscores = c_str.indexOf("_") != -1;
    var anyMultipleUS = c_str.indexOf("__") != -1;
    var anyLowerCase = anyOfThese(c_str, "abcdefghijklmnopqrstuvwxyz");
    var anyUpperCase = anyOfThese(c_str, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    
    // Apply combinations of the outcomes of the above checks
    if (anyLowerCase && anyUpperCase && !anyHyphens && !anyUnderscores){
      return "camel";
    }else if (anyLowerCase && !anyUpperCase && anyHyphens && !anyMultipleH && !anyUnderscores){
      return "kebab";
    }else if (anyLowerCase && !anyUpperCase && !anyHyphens && anyUnderscores && !anyMultipleUS){
      return "snake";
    }else{
      return "none";
    }
  }
  
  // Determine whether the first string contains any of the second string
  function anyOfThese(strToCheck, charsToFind){
    for (var i = 0; i < strToCheck.length; i++){
      var charToCheck = strToCheck.slice(i, i+1);
      if (charsToFind.indexOf(charToCheck) != -1){
        return true;
      }
    }
    return false;
  }