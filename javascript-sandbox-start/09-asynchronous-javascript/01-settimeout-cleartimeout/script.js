// setTimeout(changeText, 2000);

// console.log('Hello from glocal scope');

function changeText() {
  document.querySelector('h1').textContent = 'Hello from Callback';
  console.log('H1 text changed');
}

const timerId = setTimeout(changeText, 3000);

document.querySelector('#cancel').addEventListener('click', () => {
  clearTimeout(timerId);
  console.log('H1 change cancelled');
});
