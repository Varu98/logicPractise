// A program that counts number of vowels and consonants in a String?

function countF(string) {
  let vowelCounter = 0;
  let consonantCounter = 0;

  string = string.split("").map((e) => {
    if (/[aeiou]/.test(e)) {
      vowelCounter++;
    } else {
      consonantCounter++;
    }
  });
  console.log(vowelCounter, consonantCounter);
}
countF("hello world");
