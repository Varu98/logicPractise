/* Given an array, your function should return the length of the array.
Example:
Input: arrayLength([1,5,3,7,8]) ––> Output: 5 */
const readlineSync = require("readline-sync");
let arr = [];

arr = readlineSync.question("enter the numbers");
console.log(arr.length);
