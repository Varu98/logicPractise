/* Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
Example:
Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen */

let str = "my name is varu";
let arr = [];

function sliceString() {
  let newStr = "";
  arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    let newStr = arr[i];
    arr[i] = newStr.split("").reverse().join("");
  }
  console.log(arr);
}

sliceString();
