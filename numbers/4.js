/* Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: C = (F - 32) * 5/9 'F' and 'C' are the temperatures on the Fahrenheit scale and Celsius scale respectively.

Input: 56
Output: 13.33333 */

let f, c;

const readlineSync = require("readline-sync");

f = readlineSync.question("enter Farenheit ");

c = ((f - 32) * 5) / 9;

console.log("Celsius:", c);
