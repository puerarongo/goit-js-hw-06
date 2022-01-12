const refs = {
    inputEl: document.querySelector("input"),
    spanEl: document.querySelector("#name-output")
}

const fixibleString = (event) => {
    let spanContent = event.currentTarget.value !== "" ? event.currentTarget.value : "Anonymous";
    refs.spanEl.textContent = spanContent;
}

refs.inputEl.addEventListener("input", fixibleString);

