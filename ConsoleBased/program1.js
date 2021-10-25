function doubleAll(numbers) {
  let results = numbers.map((e) => e * 2);
  return results;
}

module.exports = doubleAll;

//   Convert the following code from a for-loop to Array#map:

//   function doubleAll(numbers) {
//     var result = []
//     for (var i = 0; i < numbers.length; i++) {
//       result.push(numbers[i] * 2)
//     }
//     return result
//   }

//   module.exports = doubleAll
