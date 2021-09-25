/*Write a Program to Print N Odd Number in Descending Order.

Input : 4
Output : 7
5
3
1*/

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
