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
    .then((d) => editData(d.location, d.current));
};

function editData(dataLocation, dataCurrent) {
  let dataL;
  dataL = Object.entries(dataLocation);
  dataL.map((item) => {
    return (output.innerHTML =
      output.innerHTML + `<p>${item[0]} &nbsp&nbsp&nbsp&nbsp  ${item[1]}</p>`);
  });

  let newData;
  newData = Object.entries(dataCurrent);
  newData.map((item) => {
    return (output.innerHTML =
      output.innerHTML + `<p>${item[0]} &nbsp&nbsp&nbsp&nbsp ${item[1]}</p>`);
  });

  console.log(newData);

  // output.innerHTML = `<p>${data.name} ${data.region}</p>`;
}

btn.addEventListener("click", getData);
