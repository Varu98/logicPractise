/* Here's an API. Create a web app to call this API with your full name and print the response. This could be extended where we ask you to do something with the response. Like add a text, or capitalise etc. */

const url = "https://randomuser.me/api/";

const input = document.querySelector(".input");
const output = document.querySelector(".output");

const btn = document.querySelector(".red");

const fetchData = (data) => {
  data = fetch(url)
    .then((res) => res.json())
    .then((res) =>
      showImg(res.results[0].picture.large, res.results[0].name.first)
    );
};

function showImg(img, username) {
  console.log(username);
  output.innerHTML = `
<img src="${img}" alt="">
<p>${username}</p>
    
    `;
}

btn.addEventListener("click", fetchData);
