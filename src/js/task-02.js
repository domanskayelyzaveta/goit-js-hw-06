// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function task2() {

  const findUl = document.querySelector("#ingredients");
  console.log(findUl);

  
  ingredients.forEach(ingredients => {
    const li = document.createElement("li");
    li.textContent = ingredients;
    li.classList.add("item");
    findUl.append(li);
  });
};
task2();

