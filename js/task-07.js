// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputEl = document.querySelector("#font-size-control");
const textSpanEl = document.querySelector("#text");
const slider = document.querySelector("#font-size-control");

textSpanEl.style.fontSize = `${slider.value}px`;

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  textSpanEl.style.fontSize = `${event.currentTarget.value}px`;
}
