// Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

// a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.
const arr = [];

arr[0] = 0;
arr[1] = 1;

for (let i = 2; i < 10; i++) {
  arr[i] = arr[i - 2] + arr[i - 1];
  console.log(arr);
}
