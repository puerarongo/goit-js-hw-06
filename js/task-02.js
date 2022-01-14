const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("ul#ingredients");
let arrOfItems = []

const innerEl = ingredients.map(elem => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = `${elem}`;
  arrOfItems.push(itemEl)
});

ingredientsEl.append(...arrOfItems);
console.log(ingredientsEl);