/* Write a program to delete all vowels from a string. Assume string is not more than 80 characters long */

function deleteVowelFromString(string) {
  string = string
    .split("")
    .map((char) => {
      if (/[aeiou]/.test(char)) {
        char = "";
      } else {
        return char;
      }
    })
    .join("");
  console.log(string);
}
deleteVowelFromString("hi my name is varu");
