// # Task

// Implement a function that takes a function as its first argument, a number num as its second argument, then executes the passed in function num times.

function repeat(operation, num) {
  for (let i = 0; i < num; i++) {
    operation();
  }
}

// Do not remove the line below
module.exports = repeat;
