const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');
const clearBtn = document.querySelector('#clear');
const itemFilter = document.querySelector('#filter');

function onAddItemSubmit(e) {
  e.preventDefault();

  let newItem = itemInput.value;

  // Validate input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  newItem = newItem[0].toUpperCase() + newItem.slice(1, newItem.length);

  addItemToDOM(newItem);
  addItemToStorage(newItem);

  checkUI();

  itemInput.value = '';

  filterItems();
}

function addItemToDOM(item) {
  // Create list item
  const listItem = document.createElement('li');
  listItem.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');
  listItem.appendChild(button);

  // Add li (item) to the DOM
  itemList.appendChild(listItem);
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

function addItemToStorage(item) {
  const itemsFromStorage = getItemsFromStorage();

  // Add new item to array
  itemsFromStorage.push(item);

  // Convert to JSON string and set to local storage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage() {
  let itemsFromStorage;
  if (localStorage.getItem('items') === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem('items'));
  }

  return itemsFromStorage;
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    if (confirm('Confirma que quer remover o artigo?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
  checkUI();
}

function clearItems(e) {
  const items = itemList.querySelectorAll('li');
  if (confirm('Tem a certeza que quer apagar todos os artigos?')) {
    items.forEach((item) => item.remove());
  }
  checkUI();
}

function filterItems(e) {
  const items = itemList.querySelectorAll('li');
  const text = itemFilter.value.toLowerCase();

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();

    if (itemName.includes(text)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

function checkUI() {
  const items = itemList.querySelectorAll('li');
  if (items.length === 0) {
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearBtn.style.display = '';
    itemFilter.style.display = '';
  }
}

function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item) => {
    addItemToDOM(item);
  });
  checkUI();
}

// Event Listeners
itemForm.addEventListener('submit', onAddItemSubmit);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);
document.addEventListener('DOMContentLoaded', displayItems);

checkUI();
