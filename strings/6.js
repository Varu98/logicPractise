/*  Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45 */

function checkNumber(string) {
  let message;
  string = string.split().map((char) => {
    if (/[1-9]/.test(char)) {
      message = true;
    } else {
      message = false;
    }
  });
  console.log(message);
}
checkNumber("batman");
