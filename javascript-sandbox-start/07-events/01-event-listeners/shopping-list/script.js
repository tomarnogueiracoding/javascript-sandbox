// JavaScript Event Listener

function clearItems() {
  const listItems = document.querySelectorAll('li');
  listItems.forEach((item) => item.remove());
}

const clearBtn = document.querySelector('#clear');

// clearBtn.onclick = function () {
//   alert('Clear button');
// };

//clearBtn.addEventListener('click', () => alert('Clear Item'));

// setTimeout(() => clearBtn.click(), 5000);

clearBtn.addEventListener('click', clearItems);
