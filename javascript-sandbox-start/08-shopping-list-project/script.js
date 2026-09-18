const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');

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

// Event Listeners
itemForm.addEventListener('submit', addItem);
