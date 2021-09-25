/*Write a JavaScript program that reverses a number.

Example:

Input:  32243;
Output:  34223*/

let n,
  sum = 0,
  arr = [];

const readlineSync = require("readline-sync");

n = readlineSync.question("Enter a String Of Intergers ");
function sumOfStringOfNumbers() {
  n = n.split("").reverse().join("");

  console.log(n);
}
sumOfStringOfNumbers();
