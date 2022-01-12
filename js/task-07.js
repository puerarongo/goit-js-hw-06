const inputEl = document.querySelector("input#font-size-control");
const spanEl = document.querySelector("span");

const sizeControl = (event) => {
    let sizeValue = event.currentTarget.value
    console.log(sizeValue)
    spanEl.style.fontSize = `${sizeValue}px`;
};

inputEl.addEventListener("input", sizeControl);
