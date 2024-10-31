let colors = ["red", "purple", "orange", "yellow", "blue"];
let index = 0;
index <= colors.length;

const changeColor = () => {
  document.body.style.backgroundColor = colors[index];
  document.getElementById("change").innerHTML =
    "change to" + " " + colors[index];
  index = (index + 1) % colors.length;
};

let button = document.getElementById("change");
button.addEventListener("click", changeColor);
