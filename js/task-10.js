const inputEl = document.querySelector("input");
const createEl = document.querySelector("button[data-create]");
const destroyEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

let amount = null;
let size = 20;


// todo Function
const inputFunc = (event) => {
  amount = event.currentTarget.value;
};

const createBoxes = (event, amount) => {
  for (let i = 1; i <= amount; i += 1) {
    size += 10;
    const markup = `<div style="width:${size}px; 
    height:${size + 10}px; background:${getRandomHexColor()}"></div>`

    boxesEl.insertAdjacentHTML("beforeend", markup);
  }
};

const destroyBoxes = () => {
  size = 20;
  boxesEl.innerHTML = "";
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};


// todo Handler
inputEl.addEventListener("input", inputFunc);
createEl.addEventListener("click", (event) => createBoxes(event, amount));
destroyEl.addEventListener("click", destroyBoxes);

