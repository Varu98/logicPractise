/* Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.

Formula : 0.5 * m * v * v */

let m, v, ke;

const readlineSync = require("readline-sync");

m = readlineSync.question("enter Mass ");
v = readlineSync.question("enter Velocity ");

ke = 0.5 * m * v * v;

console.log("kinetic energy = ", ke, "Joules");
