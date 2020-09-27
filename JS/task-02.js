const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const createIngredientsRef = (item) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = item;
  return itemRef;
};

const allIngredients = ingredients.map((item) => createIngredientsRef(item));

const liRef = document.querySelector("#ingredients");
liRef.append(...allIngredients);

console.log(liRef);
