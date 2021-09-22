/* Given an array of numbers, your function should return an array in the ascending order.
Example:
Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100] */

let arr = [9, 32, 45, 61, 83, 100];

function sortArray(array) {
  array = array.sort().reverse();
  console.log(array);
}

sortArray(arr);
