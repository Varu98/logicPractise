/* Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
Example:
Input: findMin(3,5) ––> Output: 3
Input: findMin(3,5,9,1) ––> Output: 1
(Hint: Lookup rest parameters in JavaScript) */

const findMinimum = (...args) => {
  console.log(args);
  console.log(...args);
  console.log(Math.min(...args));
};

const findMaximum = (...args) => {
  console.log(args);
  console.log(...args);
  console.log(Math.max(...args));
};

findMinimum(1, 2, 3, 4, 5, 6);
findMaximum(1, 2, 3, 4, 5, 6);
