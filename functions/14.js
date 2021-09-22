/* Given a sentence, return a sentence with first letter of all words as capital.
Example:
Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers */

function firstLetterCapitalize(str) {
  str = str.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
  console.log(str);
}

firstLetterCapitalize("my name is varu");
