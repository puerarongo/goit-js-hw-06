const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("ul#ingredients");

const innerEl = ingredients.map(elem => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = `${elem}`;
  ingredientsEl.append(itemEl);
});

console.log(ingredientsEl);