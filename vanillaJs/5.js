/* Create a CLI app which takes name, unit test marks, pre final marks, final marks of 5 students. And then print who has the highest marks. What if I ask you to print the average as well? */

const readlineSync = require("readline-sync");

let students = [
  {
    studentName: "",
  },
];
// for (let i = 0; i < 3; i++) {
//   student[0].sname.push(
//     readlineSync.question(`enter name of student ${i + 1} :`)
//   );
// }
for (let i = 0; i < 3; i++) {
  student[0].Umarks.push(
    readlineSync.question(`enter Unit Marks of student ${i + 1} :`)
  );
}
// for (let i = 0; i < 3; i++) {
//   student[0].pfMarks.push(
//     readlineSync.question(`enter Pre-Final Marks of student ${i + 1} :`)
//   );
// }
// for (let i = 0; i < 3; i++) {
//   student[0].fMarks.push(
//     readlineSync.question(`enter Final Marks of student ${i + 1} :`)
//   );
// }

let total = [];
total.push(
  student[0].Umarks.reduce((accum, current) => {
    accum = parseInt(accum) + parseInt(current);
    return accum;
  }, 0)
);
total.push(
  student[0].pfMarks.reduce((accum, current) => {
    accum = parseInt(accum) + parseInt(current);
    return accum;
  }, 0)
);
total.push(
  student[0].fMarks.reduce((accum, current) => {
    accum = parseInt(accum) + parseInt(current);
    return accum;
  }, 0)
);

let max = Math.max(...total);

console.log(max);
