// Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the
// alphabet by one. Hint: Use Look up the JS functions String.fromCharCode() and String.CharCodeAt() and see if you can use
// Ascii code to acomplish this.
// ex. shiftLetters('hello') // => 'ifmmp'
// ex. (shiftLetters('abcxyz') // => "bcdyz{"
function shiftLetters(string) {
  string = string.split("");

  string = string.map((e, i) => e.charCodeAt() + 1);
  string = string.map((e, i) => String.fromCharCode(e));
  string = string.join("");
  console.log(string);
}

shiftLetters("hello");
