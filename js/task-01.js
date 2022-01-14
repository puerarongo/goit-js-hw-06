const categoriesEl = document.querySelector("#categories");
const itemEl = categoriesEl.querySelectorAll(".item")
console.log(`Number of categories: ${itemEl.length}`)
console.log(" ")


const cycle = itemEl.forEach((elem) => {
    console.log(elem.querySelector("h2").textContent);
    console.log(elem.querySelectorAll("li").length);
    console.log("")
})


