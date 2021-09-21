// Write a Program to take a number input from user and find if the number is Prime or not.

const readlineSync = require("readline-sync");

const num = parseInt(
  readlineSync.question("enter a number to verify prime or not")
);

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    console.log(false);
    break;
  } else {
    console.log(true);
    break;
  }
}
