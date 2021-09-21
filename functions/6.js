/* Given three angles of a triange, your function should return if it is a scalen, isosceles, equilateral triangle or not a triangle at all. Example:
Input: typeOfTriangle(30, 60, 90) ––> Output: Scalen Triangle */

// to find the type of triangle we will neede to find the angles or sides they make so..

//scalen = all different angles.

//isoceles triangle = two angles are equal.

//equilateral triangle = all angles are equal.

function findTriangleType(angle1, angle2, angle3) {
  if (angle1 === angle2 && angle1 === angle3) {
    console.log("equilateral");
  }
  if (angle1 === angle2 || angle1 === angle3 || angle2 === angle3) {
    console.log("isoceles");
  } else {
    console.log("scalene");
  }
}

findTriangleType(30, 30, 120);
