function removeClearButton() {
  const clearBtn = document.querySelector('#clear');
  clearBtn.remove();
}

function removeFirstItem() {
  const ul = document.querySelector('ul');
  const firstItem = document.querySelector('li:first-child');
  ul.removeChild(firstItem);
}

// function removeItem(itemNumber) {
//   const itemToRemove = document.querySelector(`li:nth-child(${itemNumber})`);
//   itemToRemove.remove();
// }

// function removeItem(itemNumber) {
//   const itemToRemove = document.querySelectorAll('li')[itemNumber - 1];
//   itemToRemove.remove();
// }

// function removeItem(itemNumber) {
//   const li = document.querySelectorAll('li');
//   li[itemNumber - 1].remove();
// }

const removeItem = (itemNumber) =>
  document.querySelectorAll('li')[itemNumber - 1].remove();

// removeClearButton();
// removeFirstItem();

removeItem(1);
