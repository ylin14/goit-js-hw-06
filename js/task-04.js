// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.

let counterValue = document.querySelector('#value');
counterValue.textContent = 0;

console.log(counterValue.textContent);

// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
const onDecrBtnClick = (click) => {
    return counterValue.textContent--;
};
const decrementBtn = document.querySelector('[data-action="decrement"]');
decrementBtn.addEventListener('click', onDecrBtnClick);


const onIncrBtnClick = (click) => {
    return counterValue.textContent++;
};
const incrementBtn = document.querySelector('[data-action="increment"]');
incrementBtn.addEventListener('click', onIncrBtnClick);

// Оновлюй інтерфейс новим значенням змінної counterValue.


