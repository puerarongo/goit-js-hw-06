//  todo need refactoring

const refs = {
    spanEl: document.querySelector("span"),
    handleIncrease: document.querySelector("button[data-action='increment']"),
    handleDecrease: document.querySelector("button[data-action='decrement']"),
}

let counterValue = 0;

refs.handleIncrease.addEventListener("click", () => {refs.spanEl.textContent = counterValue += 1});
refs.handleDecrease.addEventListener("click", () => {refs.spanEl.textContent = counterValue -= 1});



