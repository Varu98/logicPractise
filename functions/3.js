/* Given a sentence, your functions should return the number of words in the sentence.
Example:
Input: noOfWords(We are neoGrammers) ––> Output: 3 */

const readlineSync = require("readline-sync");

const sentence = readlineSync.question("enter the sentence for word count ");

const calculateStringLength = (string) => {
  let newString = string.split(/\s+/);
  console.log(newString.length);
};

calculateStringLength(sentence);
