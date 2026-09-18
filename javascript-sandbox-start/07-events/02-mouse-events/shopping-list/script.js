const logo = document.querySelector('img');

const onClick = () => console.log('click event');
const onDoubleClick = () => {
  let backgroundColor = document.body.style.backgroundColor;
  if (backgroundColor !== 'purple') {
    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }

  console.log('double click event');
};
const onRightClick = () => alert('Please use the mouse left button');
const onMouseDown = () => console.log('Mouse down event');
const onMouseUp = () => console.log('Mouse up event');
const onWheel = () => console.log('Wheeling');
const onMouseOver = () => console.log('Hello mouse');
const onMouseOut = () => console.log('Goodbye mouse');

// Event Listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
