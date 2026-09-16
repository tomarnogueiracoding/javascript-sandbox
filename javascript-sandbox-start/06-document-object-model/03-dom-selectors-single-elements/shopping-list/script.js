// document.getElementById

// console.log(document.getElementById('app-title'));
// console.log(document.getElementById('app-title').id);
// console.log(document.getElementById('app-title').getAttribute('id'));

// Set attributes

document.getElementById('app-title').title = 'shopping-list';
document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title');

// Get/change content

title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<strong>Shopping List</strong>';
console.log(title.textContent);

// Change styles
title.style.color = 'red';
title.style.backgroundColor = 'yellow';
title.style.padding = '10px';
title.style.borderRadius = '30px';

// document.querySelector()
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type=text]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');

secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'orange';

// Use methods on other elements

const list = document.querySelector('ul');
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';
const allListItems = list.querySelectorAll('li');
const listItemsArray = Array.from(allListItems);
listItemsArray.map((item) => (item.style.color = 'orange'));
