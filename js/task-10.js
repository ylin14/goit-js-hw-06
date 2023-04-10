const ref = {
  divBoxesEl: document.querySelector("#boxes"),
  inputEl: document.querySelector("input"),
  createBtnEl: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
};

const create = {
  createDiv: function () {
    const newDivka = document.createElement("div");
    newDivka.style.width = '30px';
    newDivka.style.height = '30px';
    return newDivka;
  },
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const createBoxes = (amount) => {
  const newEl = [];

  for (let i = 0; i < amount; i += 1) {
    newEl.push(create.createDiv());
    newEl[i].style.backgroundColor = getRandomHexColor();
    console.log(newEl[i]);
  };

  for (let i = 1; i < amount; i += 1) {
  newEl[i].style.width = `${30 + i * 10}px`;
  newEl[i].style.height = `${30 + i * 10}px`;
  };

  return newEl;
};

function onCreateButton () {
  return ref.divBoxesEl.append(...createBoxes(ref.inputEl.value));
};

function onDestroyButton () {
  return ref.divBoxesEl.querySelectorAll('div').forEach((el) => {
    return el.remove();
  });
};

ref.createBtnEl.addEventListener('click', onCreateButton);
ref.destroyBtn.addEventListener('click', onDestroyButton);



