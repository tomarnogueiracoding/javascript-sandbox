let output;

// Get child elements from the parent

const parent = document.querySelector('.parent');

output = parent.children;
output = parent.children[1];
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

// Get parent elements from a child

const child = document.querySelector('.child');

output = child.parentElement;
child.parentElement.style.border = '2px solid black';
child.parentElement.style.padding = '10px';
child.parentElement.style.borderRadius = '20px';

// Sibling Elements

const secondItem = document.querySelector('.child:nth-child(2');
secondItem.style.color = 'orange';

const thirdItem = secondItem.nextElementSibling;
thirdItem.style.color = 'purple';

const firstItem = secondItem.previousElementSibling;
firstItem.style.color = 'green';

output = secondItem;
output = thirdItem;

console.log(output);
