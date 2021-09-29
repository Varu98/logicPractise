/* Create a web app where I can input a text. Now, create three buttons H3, h2, h3. When I click on any of the button, the text should become h1, h2, or h3. */

const input = document.querySelector(".input");
const btnH1 = document.querySelector(".btnH1");
const btnH2 = document.querySelector(".btnH2");
const btnH3 = document.querySelector(".btnH3");
const output = document.querySelector(".output");

function toH1() {
  output.innerHTML = `<h1>${input.value}</h1>`;
}

function toH2() {
  output.innerHTML = `<h2>${input.value}</h2>`;
}

function toH3() {
  output.innerHTML = `<h3>${input.value}</h3>`;
}

btnH1.addEventListener("click", toH1);
btnH2.addEventListener("click", toH2);
btnH3.addEventListener("click", toH3);
