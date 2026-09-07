const x = 100;

console.log(x, 'in global');

function run() {
  console.log(innerWidth);
  console.log(x, 'in function');
}

run();

if (true) {
  console.log(x, 'in block');
}

function add() {
  const y = 50;
  console.log(x + y);
}

add();
