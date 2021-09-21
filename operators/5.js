// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

const input = [];
let count = 0;

for (let i = 0; i < 100; i++) {
  count++;
  if (count % 3 === 0) {
    input.push("Fizz");
  }
  if (count % 5 === 0) {
    input.push("Buzz");
  }
  if (count % 3 && count % 5 != 0) {
    input.push(count);
  }
}
console.log(input);
