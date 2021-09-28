// // Now write a new function called swapCase that takes a string of words and uses .map and your newly written capitalize()
// // function to return a string where every other word is in all caps.
// // Hint: look up Array.prototype.map on MDN and see what arguments the .map callback can take.
// // ex: swapCase('hey gurl, lets javascript together sometime') // => "HEY gurl, LETS javascript TOGETHER sometime"
var swapCase = function (string) {
  capitalize("hey gurl, lets javascript together sometime");
};

function capitalize(arr) {
  arr = arr.split(" ");
  let newarr;
  newarr = arr.map((word) => word[0].toUpperCase() + word.substring(1));
  console.log(newarr);
}

swapCase();
