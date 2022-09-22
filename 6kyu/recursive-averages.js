// This kata is based on the Ruby version of Recursive Averages (http://www.codewars.com/kata/recursive-averages).

// Modify the Array class to include an average method. The method give the average value of the items it contains. For example:

// [1,2,3].average()  #=> 2
// But wait, there's more! If any item in the array is also an array, the method should calculate that average first, like so:

// [1,2,[2,4]].average()  #=> 2
// The method should first average [2,4] into 3, and then average the resulting [1,2,3] into 2.

// One more caveat: the method should attempt to work with non-numbers:

// [1,2,'3 doors down'].average()  #=> 2 where "3 doors down" == 3
// [0.4, '1.6'].average()  #=> 1 where '1.6' == 1.6

//                      solution

Array.prototype.average = function(){
    
    if(this.every(a => typeof(a) == 'number')){
        return this.reduce((acc,c) => acc + c,0)/this.length
    }
  
    //recursive case
  
      let map = this.map(a => {
          if(typeof(a) == 'number'){
              return a
          }else if(typeof(a) == 'string'){
              sArr = a.split(' ')
              return Number(sArr.filter(a => Number.isFinite(+a)).join('') )
          }else{
              return a.average()
          }
      })
    return map.reduce((acc,c) => acc + c,0)/map.length
  }

//                      solution

Array.prototype.average = function () {
    return this.reduce((sum, x) => sum + (Array.isArray(x) ? x.average() : parseFloat(x)), 0) / this.length;
  };

  //                solution

  Array.prototype.average = function () {
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
      if (typeof(this[i]) === "object") {
        sum += this[i].average();
      } else if (typeof(this[i]) === "string") {
        sum += parseFloat(this[i]);
      } else {
        sum += this[i];
      }
    }
    return sum / this.length;
  }