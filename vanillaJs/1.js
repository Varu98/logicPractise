// Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. Based on the button clicked perform the operation on the two inputs. You can do this in React or vanillaJS based on your choice.

const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");

const output = document.querySelector(".output");
const input = document.querySelectorAll(".input");

function addf(total) {
  total = Number(input[0].value) + Number(input[1].value);
  console.log(total);
  output.innerHTML = total;
}
function subf(total) {
  total = Number(input[0].value) - Number(input[1].value);
  output.innerHTML = total;
}
function multiplyf(total) {
  total = Number(input[0].value) * Number(input[1].value);
  output.innerHTML = total;
}
function dividef(total) {
  total = Number(input[0].value) / Number(input[1].value);
  output.innerHTML = total;
}

add.addEventListener("click", addf);
sub.addEventListener("click", subf);
multiply.addEventListener("click", multiplyf);
divide.addEventListener("click", dividef);
