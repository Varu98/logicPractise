// Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

const readlineSync = require("readline-sync");
let fact = 1;
let num = readlineSync.question("Enter a number ");

num = parseInt(num);

if (num === 0) {
  console.log(1);
} else if (num < 0) {
  console.log("enter numbers in positive integers");
} else {
  for (let i = 1; i <= num; i++) {
    fact = fact * i;

    console.log(fact);
  }
}
