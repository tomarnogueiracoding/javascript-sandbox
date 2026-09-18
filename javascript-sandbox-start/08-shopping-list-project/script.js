const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');
const clearBtn = document.querySelector('#clear');
const itemFilter = document.querySelector('#filter');
const items = itemList.querySelectorAll('li');

function addItem(e) {
  e.preventDefault();

  let newItem = itemInput.value;
  newItem = newItem[0].toUpperCase() + newItem.slice(1, newItem.length);

  // Validate input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  // Create list item
  const listItem = document.createElement('li');
  listItem.appendChild(document.createTextNode(newItem));

  const button = createButton('remove-item btn-link text-red');
  listItem.appendChild(button);
  itemList.appendChild(listItem);

  itemInput.value = '';
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    e.target.parentElement.parentElement.remove();
  }
}

function clearItems(e) {
  const items = itemList.querySelectorAll('li');
  items.forEach((item) => item.remove());
}

function checkUI() {
  if (items.length === 0) {
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  }
}

// Event Listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);

checkUI();
