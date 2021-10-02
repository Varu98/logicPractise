const input = document.querySelector(".input");
const output = document.querySelector(".output");
const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");

blue.style.background = "blue";
red.style.background = "red";
green.style.background = "green";

function onClickRed() {
  output.style.color = "red";
  output.innerHTML = input.value;
}

function onClickBlue() {
  output.style.color = "blue";
  output.innerHTML = input.value;
}

function onClickGreen() {
  output.style.color = "green";
  output.innerHTML = input.value;
}

blue.addEventListener("click", onClickBlue);
green.addEventListener("click", onClickGreen);
red.addEventListener("click", onClickRed);
