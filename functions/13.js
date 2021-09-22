/* Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on. */

let str = "bootcamp";
let charCode = 0;
let result = "";

function encoder(str, n) {
  for (let i = 0; i < str.length; i++) {
    charCode = str[i].charCodeAt() + n;
    result += String.fromCharCode(charCode);
  }
  console.log(result);
}
encoder(str, 3);
