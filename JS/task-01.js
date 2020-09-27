const allCategoriesRef = document.querySelectorAll(".item");
console.log(`В списке ${allCategoriesRef.length} категории.`);

const categoryNameAndLiRef = allCategoriesRef.forEach((element) =>
  console.log(
    `Категория: ${element.querySelector("h2").textContent}
    Количество элементов: ${element.querySelectorAll("li").length}`
  )
);
