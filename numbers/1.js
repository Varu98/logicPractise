/* Write a program to input 2 numbers and display the sum of the numbers to the console.

Input Number 1: 20
Input Number 2: 40
Sum : 60 */

const readlineSync = require("readline-sync");

let num1 = readlineSync.question("Input 1st Number ");
num1 = parseInt(num1);

let num2 = readlineSync.question("Input 2nd Number ");
num2 = parseInt(num2);

console.log("Sum Is : ", num1 + num2);
