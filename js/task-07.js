// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputEl = document.querySelector('#font-size-control');
const textSpanEl = document.querySelector('#text')
// console.log(textSpanEl.style.fontSize = '100px');


inputEl.addEventListener('input', onInputChange);

function onInputChange (event) {
    console.log(textSpanEl.style.fontSize = `${event.currentTarget.value}px`);
}