// Write a program that takes two strings and copies smaller string into bigger string

function stringAdhesive(str1, str2) {
  let str;
  if (str1.length > str2.length) {
    str = str1.concat(str2);
  } else {
    str = str2.concat(str1);
  }
  console.log(str);
}
stringAdhesive("hello world", "I am Back!!");
