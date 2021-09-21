// Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

const readlineSync = require("readline-sync");

const num = [5, 13, 7, 21, 48];

let counter = 0;

for (let i = 0; i < num.length; i++) {
  counter = counter + num[i];
  console.log(counter);
}
