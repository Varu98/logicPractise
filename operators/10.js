// Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.
const readlineSync = require("readline-sync");

const userDay = readlineSync.question("enter a day ").toLowerCase();

let weekObject = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7,
};

for (let [key, value] of Object.entries(weekObject)) {
  if (userDay === key) {
    if (value === 7 || value === 6) {
      console.log("weekend");
    } else if (value) {
      console.log("weekday");
    }
  }
}
