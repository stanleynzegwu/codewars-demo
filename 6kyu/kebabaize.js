// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters

//                  solution

function kebabize(str) {
    string = ''
    for(letter of str){
      if(isFinite(letter)){
        string += ''
      }else if(letter === letter.toUpperCase()){
        string += `-${letter}`
      }else string += letter
    }
    return string.toLowerCase().split('-').filter(a => a != '').join('-')
  }