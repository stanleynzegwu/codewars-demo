// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

//          SOLUTION

function basicOp(operation, value1, value2)
{
  if(operation.includes('+')){
    return value1 + value2
  }else if(operation.includes('-')){
    return value1 - value2
  }else if(operation.includes('*')){
    return value1 * value2
  }else if(operation.includes('/')){
    return value1 / value2
  }
}

//          SOLUTION

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

//       solution

function basicOp(operation, value1, value2)
{
  return eval(value1 + operation + value2);
}