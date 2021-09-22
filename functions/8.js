/* Given an array and an item, your function should return the index at which the item is present.
Example:
Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2 */
const readlineSync = require("readline-sync");
let arr = [];

arr = readlineSync.questionInt("Enter Numbers");
let n = readlineSync.questionInt(
  "enter number present in array to print index"
);

console.log(arr.indexOf(arr, n));
