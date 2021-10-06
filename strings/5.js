/* Write a program to delete all vowels from a string. Assume string is not more than 80 characters long */

function deleteVowelFromString(string) {
  let vowels = ["a", "e", "i", "o", "u"];

  let searchArr = vowels.map((e) => {
    return string.search(e);
  });
  let newStr = searchArr.map((e) => {
    return string.replace(e, "");
  });
  //   arr = string.search("a", "e", "i", "o", "u");
  //   console.log(arr);
  console.log(newStr);
}
deleteVowelFromString("hi my name is varu");
