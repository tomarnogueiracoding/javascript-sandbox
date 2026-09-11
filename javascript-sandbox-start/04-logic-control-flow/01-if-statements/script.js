if (true) {
  console.log('This is true');
}

const x = 10;
const y = 5;

if (x >= y) {
  console.log(`${x} is greater than or equal to ${y}`);
}

if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is NOT equal to ${y}`);
}

// Shorthand If

if (true) (console.log('This is true'), console.log('This is also true'));
