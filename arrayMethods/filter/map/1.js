// Write a function capitalize that takes a string and uses .map to return the same string in all caps.
// ex. capitalize('whoop') // => 'WHOOP'
// ex. capitalize('oh hey gurl') // => "OH HEY GURL"

var capitalize = function (string) {
  let str = string.split(" ");
  let arr = str.map((e) => e.toUpperCase());
  arr = arr.join(" ");
  console.log(arr);
};

capitalize("my name is varu");
