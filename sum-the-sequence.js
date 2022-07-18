// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

//              solution

const sequenceSum = (begin, end, step) => {
    sum = 0
    if(begin > end){
      return 0
    }else{
      for(let i = begin; i <= end; i += step){
        sum += i
    }
   }
    return sum
  }

//                  solution

const sequenceSumm = (begin, end, step) => {
    var sum = 0;
    for(var i=begin;i<=end;i+=step)
    {
      sum += i;
    }
    return sum;
  };