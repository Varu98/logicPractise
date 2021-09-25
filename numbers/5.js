/* Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

Formula :

Area: a*a

Perimeter: 4*a

Surface Area: 6*a*a

Volume: a*a*a */

let a;

const readlineSync = require("readline-sync");

function calculate(area, perimeter, surfaceArea, volume) {
  a = readlineSync.question("enter Side ");

  area = a * a;
  perimeter = 4 * a;
  surfaceArea = 6 * a * a;
  volume = a * a * a;

  let obj = {
    1: `The Area is ${area}`,
    2: `The Perimeter is ${perimeter}`,
    3: `The Surface Area is ${surfaceArea}`,
    4: `The Volume is ${volume}`,
  };
  for (let value in obj) {
    console.log(obj[value]);
  }
  //   console.log(obj);
}
calculate();
