// todo доделать

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyEl: document.querySelector("body"),
  spanEl: document.querySelector("span.color"),
  buttonEl: document.querySelector("button.change-color")
}

const colorChanger = (event) => {
  refs.bodyEl.style.backgroundColor = getRandomHexColor()
  refs.spanEl.textContent = refs.bodyEl.style.backgroundColor
}

refs.bodyEl.addEventListener("click", colorChanger)