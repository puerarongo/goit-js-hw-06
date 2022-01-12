const inputEl = document.querySelector("input");

const stringLength = (event) => {
    if (event.currentTarget.className) {
            inputEl.classList.remove("valid") || inputEl.classList.remove("invalid")
    }
    
    if (event.currentTarget.value.length >= inputEl.dataset.length) {
        inputEl.classList.add("valid")
    }
    else {
        inputEl.classList.add("invalid")
    }        
}

inputEl.addEventListener("blur", stringLength)
