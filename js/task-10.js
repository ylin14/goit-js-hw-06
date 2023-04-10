function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const ref = {
  divBoxesEl: document.querySelector("#boxes"),
  inputEl: document.querySelector("input"),
  createBtnEl: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  newDivka: document.createElement("div"),
};

const createBoxes = (amount) => {
  const newEl = [];
  for (let i = 0; i < amount; i += 1) {
    newEl.push(ref.newDivka);
  }
  return newEl;
};

console.log(createBoxes(3));

ref.divBoxesEl.append(...createBoxes(3));
