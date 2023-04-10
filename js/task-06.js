// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputEl = document.querySelector("#validation-input");

const requirement = parseInt(inputEl.getAttribute("data-length"));

function onInputBlur (event) {
    console.log(event.currentTarget.value.length === requirement);

    if (event.currentTarget.value.length === requirement) {
        return inputEl.classList.add("valid");
    } return inputEl.classList.add("invalid");   
}

inputEl.addEventListener("blur", onInputBlur);