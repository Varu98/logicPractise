// Write a program which receives a string str that calculates the length of a string and return true if the length is greater than 7 without using strlen()

function countStr(str) {
  str = str.length;

  if (str >= 7) {
    console.log(true);
  } else {
    console.log(false);
  }
}

countStr("hello world");
