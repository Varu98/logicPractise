// Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

const numbers = [129, 251, 336];

if (numbers[0] > numbers[1]) {
  if (numbers[0] > numbers[2]) {
    console.log(numbers[0], "Is Greater");
  }
} else if (numbers[1] > numbers[0]) {
  if (numbers[1] > numbers[2]) {
    console.log(numbers[1], "Is Greater");
  }
} else {
  console.log(numbers[2], "Is Greater");
}
