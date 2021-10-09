// Given a string, determine if it is a palindrome, considering only alphanumeric characters

function checkPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  if (reversed === str) return true;

  return false;
}
console.log(checkPalindrome("eye"));
