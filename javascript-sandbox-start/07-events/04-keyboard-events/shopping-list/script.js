const inputItem = document.querySelector('#item-input');

const onKeyPress = (e) => {
  console.log('keypress');
};

const onKeyUp = (e) => {
  console.log('keyup');
};

// let text = '';

const onKeyDown = (e) => {
  console.log(e.key);
  console.log(e.keyCode);
  console.log(e.code);
  //document.querySelector('h1').textContent = text += e.key;

  if (e.repeat) {
    console.log(`You are holding down the ${e.key} key`);
  }
};

inputItem.addEventListener('keydown', onKeyDown);
