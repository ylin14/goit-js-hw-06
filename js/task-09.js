function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");

const changeColBtn = document.querySelector(".change-color");

const colorName = document.querySelector(".color");

changeColBtn.addEventListener("click", onchangeColBtnClick);

function onchangeColBtnClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorName.textContent = `Бачиш, яка магія? Це колір: ${getRandomHexColor()}`;
}
