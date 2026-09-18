// Method 1

// const insert = document.querySelector('#insert');

// const onKeyPress = (e) => {
//   const divsHtml = `<div class="key">
//         ${e.key === ' ' ? 'Space' : e.key}
//         <small>e.key</small>
//       </div>

//       <div class="key">
//         ${e.keyCode}
//         <small>e.keyCode</small>
//       </div>

//       <div class="key">
//         ${e.code}
//         <small>event.code</small>
//       </div>`;
//   insert.innerHTML = divsHtml;
// };

// window.addEventListener('keypress', onKeyPress);

// Method 2
function showKeyCodes(e) {
  const insert = document.querySelector('#insert');
  insert.innerHTML = '';

  const keyCodes = {
    'e.key': e.key === ' ' ? 'Space' : e.key,
    'e.keyCode': e.keyCode,
    'e.code': e.code,
  };

  for (let key in keyCodes) {
    const div = document.createElement('div');
    div.className = 'key';
    const small = document.createElement('small');
    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);

    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);

    insert.appendChild(div);
  }
}

window.addEventListener('keydown', showKeyCodes);

const objecto = {
  name: 'Miguel',
  age: 21,
  isLoggedIn: true,
};

for (let key in objecto) {
  console.log(key);
  console.log(objecto[key]);
}
