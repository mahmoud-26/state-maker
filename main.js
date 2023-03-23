const container = document.getElementById("container");
const input = document.getElementById("input");
const author = document.getElementById("author");
const download = document.getElementById("download");
const color = document.getElementById("color");
const range = document.getElementById("range");
const output = document.getElementById("output");
const text = document.getElementById("text");
const name = document.getElementById("name");

window.onload = () => {
  //randomColor();
  text.style.background = "#262626";
  text.style.color = "white";
  input.value = localStorage.getItem("text");
  author.value = localStorage.getItem("name");
  text.innerHTML = localStorage.getItem("text");
  name.innerHTML = localStorage.getItem("name");
}

input.addEventListener("input", () => {
  let textContent = input.value;
  text.innerHTML = textContent;
  localStorage.setItem("text", input.value);
});

author.addEventListener("input", () => {
  let nameContent = author.value;
  name.innerHTML = nameContent;
  localStorage.setItem("name", author.value);
});

download.addEventListener("click", () => {
  html2canvas(text).then(function(canvas) {
    var anchorTag = document.createElement("a");
    document.body.appendChild(anchorTag);
    anchorTag.download = "image.png";
    anchorTag.href = canvas.toDataURL();
    anchorTag.target = "_blank";
    anchorTag.click();
  });
});

color.addEventListener("click", () => {
  randomColor();
});

range.addEventListener("change", () => {
  text.style.fontSize = range.value + "px";
  name.style.fontSize = range.value / 1.5 + "px";
});

function randomColor() {
  let red = Math.floor(Math.random() * 255) + 0;
  let green = Math.floor(Math.random() * 255) + 0;
  let blue = Math.floor(Math.random() * 255) + 0;
  text.style.background = `rgb(${red}, ${green}, ${blue})`;
  name.style.background = `rgb(${red}, ${green}, ${blue})`;
}