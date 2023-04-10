
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
const listEl = document.querySelector("#categories");

const listItemsNumber = listEl.childElementCount;

console.log("Number of categories: ", listItemsNumber);



// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const items =  document.querySelectorAll("#categories .item");

items.forEach(function (item) {
    console.log("Category:", item.children[0].textContent);
    console.log("Elements:", item.children[1].childElementCount);
    
});




