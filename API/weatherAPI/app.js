const input = document.querySelector(".input");
const output = document.querySelector(".output");
const div = document.querySelectorAll(".div");
const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=";
const btn = document.querySelector(".btn");

const getData = () => {
  let dataArray = [];
  let fetchData = fetch(url + input.value, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      "x-rapidapi-key": "f810edfee8msh45209c7d77b9b58p190970jsn9a9984832531",
    },
  })
    .then((data) => data.json())
    .then((d) => showData(d));
};

function showData(data) {
  let dataMap = Object.entries(data.location);
  let keys = [];
  let values = [];

  for (let [key, value] of dataMap) {
    keys.push(key);
    values.push(value);
  }

  for (let i = 0; i < keys.length; i++) {
    div.innerHTML[i] = keys[i];
  }
}

btn.addEventListener("click", getData);
