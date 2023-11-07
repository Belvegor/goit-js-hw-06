const ingredientsList = document.getElementById("ingredients");

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = [];

ingredients.forEach(ingredientName => {
  const li = document.createElement("li"); 
  li.textContent = ingredientName; 
  li.classList.add("item"); 
  elements.push(li);
});

ingredientsList.append(...elements);
