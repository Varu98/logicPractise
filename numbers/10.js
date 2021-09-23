/*Write a JavaScript program to compute the sum of all digits that occur in a given string.

Input: 1234
Output: 1+2+3+4 = 10*/

let n,
  sum = 0,
  arr = [];

const readlineSync = require("readline-sync");

n = readlineSync.question("Enter a String Of Intergers ");
function sumOfStringOfNumbers() {
  for (let i = 0; i < n.length; i++) {
    arr[i] = n[i].split(i);
    arr[i] = parseInt(arr[i]);
  }
  arr.forEach((num) => {
    sum = sum + num;
  });
  console.log(sum);
}
sumOfStringOfNumbers();
