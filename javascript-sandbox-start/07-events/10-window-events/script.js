// window.onload = () => {
//   document.querySelector('h1').textContent = 'Hello World';
// };

window.addEventListener('load', () => {
  console.log('page loaded');
});

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');
});

console.log('Run me');

document.querySelector('h1').textContent = 'Hello World';

window.addEventListener('resize', () => {
  document.querySelector('h1').textContent =
    `Width: ${window.innerWidth} px, Height: ${window.innerHeight} px`;
});
