
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



//////////////////////////////////////////////////

const formEl = document.querySelector(".js-reg-form");
formEl.addEventListener('submit', onFormElSubmit);


function onFormElSubmit (event) {
    event.preventDefault();
    const login = formEl.elements.username.value;
    console.log(formEl.elements.username.value);
    const password = formEl.elements.passwordEl.value;
    const data = { password, login };
}


function onFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {};

    formData.forEach((el, key) => {
        data[key] = el;
    });

    console.log(data);

}


const inputEl = document.querySelector("#js-input-color");
inputEl.addEventListener('change', onInputElChange);

function onInputElChange(event) {
    const color = inputEl.value;
    formEl.style.backgroundColor = color;
}

const inputScale = document.querySelector("#js-input-size");
inputScale.addEventListener("input", onInputScaleChange )
function onInputScaleChange(event) {
    const scaleValue = inputScale.value;
    inputScale.style.transform = `scale ${scaleValue}`;
}