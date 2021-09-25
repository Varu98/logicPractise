/*Write a program to calculate sum of N natural digits, as input by the users?

Enter a positive integer: 100
Sum = 5050*/

let n,
  sum = 0;

const readlineSync = require("readline-sync");

n = readlineSync.question("Enter Positive Interger ");
n = parseInt(n);
function sumOfNumbers() {
  for (i = 0; i <= n; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
sumOfNumbers();
