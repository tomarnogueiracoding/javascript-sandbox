let intervalID;

function startChange() {
  if (intervalID) return;
  intervalID = setInterval(changeRandomColor, 1000);
}

function stopChange() {
  clearInterval(intervalID);
  intervalID === null;
}

// function changeColor() {
//   if (document.body.style.backgroundColor !== 'black') {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// }

function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}

const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');

startBtn.addEventListener('click', startChange);
stopBtn.addEventListener('click', stopChange);
