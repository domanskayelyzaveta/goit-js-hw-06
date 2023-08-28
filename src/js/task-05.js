
// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input), підставляє його поточне значення в 
// span#name - output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputElem = document.querySelector("#name-input");
const spanElem = document.querySelector("#name-output");

inputElem.addEventListener("input", onInputChange);

function onInputChange(event) {
    console.log(event.target.value);
    const userValue = event.target.value;
    spanElem.textContent = userValue || "Anonymous";
}
