const categoriesEl = document.querySelector("#categories");
const itemEl = categoriesEl.querySelectorAll(".item")
console.log(`Number of categories: ${itemEl.length}`)
console.log(" ")

for (let i = 0; i < itemEl.length; i += 1) {
    let headingEl = (itemEl[i].querySelector("h2"))
    let quantityItem = (itemEl[i].querySelectorAll("li").length)
    console.log(`Category: ${headingEl.textContent}`)
    console.log(`Elements: ${quantityItem}`)
    console.log(" ")
}
