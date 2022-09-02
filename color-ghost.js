// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

//                  solution

var Ghost = function() {
    this.color = ["white","yellow","purple","red"][Math.floor(Math.random() * 4)];
  };

//                  solution

var Ghost = function() {
    var colors = ["white", "yellow", "purple", "red"];
    var colorIndex = Math.floor(Math.random() * (colors.length));
    this.color = colors[colorIndex];
  };

//                  solution

class Ghost {
    constructor() {
      this.color = [`red`, `yellow`, `purple`, `white`][Math.random() * 4 ^ 0];
    }
  }