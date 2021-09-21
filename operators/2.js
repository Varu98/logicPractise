// Write a program to take a number input from user and determine whether the number is odd or even.

const readlineSync = require("readline-sync");

const input = [];

input[0] = readlineSync.question("enter first question");
input[1] = readlineSync.question("enter second question");

let sum = input[0] + input[1];

if (sum === 0) {
  console.log("even");
} else {
  console.log("odd");
}
