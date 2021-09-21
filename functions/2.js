// Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80

// formula of hexagon = ((3*sqrt(3))/2)*a*a

const areaOfHexagon = (a) => {
  let area = ((3 * Math.sqrt(3)) / 2) * a * a;
  console.log(area);
};

areaOfHexagon(10);
