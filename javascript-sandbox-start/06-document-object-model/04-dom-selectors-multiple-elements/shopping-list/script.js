// querySelectorAll

const listItems = document.querySelectorAll('li');

console.log(listItems);
console.log(listItems[1].innerText);

listItems.forEach((item) => (item.style.color = 'red'));
