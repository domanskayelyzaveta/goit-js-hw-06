
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const bodyEl = document.querySelector("body");
const colorButton = document.querySelector(".change-color");
let spanEl = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

colorButton.addEventListener('click', onColorButtonClick);


function onColorButtonClick(event) { /// тут не підсвічується подія "event", не розумію чому, але все працює
  let changeBackgroundColor = getRandomHexColor();
  bodyEl.style.backgroundColor = changeBackgroundColor;
  spanEl.textContent = changeBackgroundColor;
};



