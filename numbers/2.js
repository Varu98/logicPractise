/* Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

Input: P=100, R=6%, T=2
Output: 12 */

let si, p, t, r;

const readlineSync = require("readline-sync");

p = readlineSync.question("enter principal amount ");
t = readlineSync.question("enter time in years ");
r = readlineSync.question("enter rate ");

si = (p * t * r) / 100;

console.log(si, "%");
