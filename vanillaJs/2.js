/* Create a web app where I can input a text. Now create two buttons + and -. On clicking + increase the fontSize by 2px and vice versa. */

const input = document.querySelector(".input");
const btnadd = document.querySelector(".btnadd");
const btnsub = document.querySelector(".btnsub");

const output = document.querySelector(".output");

let count = 16;

function increment() {
  output.innerHTML = input.value;
  output.style.fontSize = `${count}px`;
  count++;
}

function decrement() {
  output.innerHTML = input.value;
  output.style.fontSize = `${count}px`;
  count--;
}
btnadd.addEventListener("click", increment);
btnsub.addEventListener("click", decrement);
