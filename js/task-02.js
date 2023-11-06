const ingredientsList = document.getElementById("ingredients");

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(ingredientName => {
  const li = document.createElement("li"); 
  li.textContent = ingredientName; 
  li.classList.add("item"); 
  ingredientsList.appendChild(li); 
});