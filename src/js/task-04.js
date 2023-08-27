

// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


let counterValue = 0;
const span = document.querySelector('#value');
const div = document.querySelector("#counter");

const button1 = div.firstElementChild;
const button2 = div.lastElementChild;

button1.addEventListener('click', task4)
button2.addEventListener('click', task4);


function task4(event) {
    const action = event.target.dataset.action;

    if (action === "increment") {
        counterValue += 1
    } else { counterValue -= 1 }
    
    console.log(counterValue);

    span.textContent = counterValue;

};

