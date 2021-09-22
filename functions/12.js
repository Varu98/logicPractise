/* Given two dates, your function should return which one comes before the other.
Example:
Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021 */

let date1 = new Date(2021, 04, 03);
let date2 = new Date(2021, 0, 25);

function compare(a, b) {
  a > b ? console.log(a) : console.log(b);
}
compare(date1, date2);
