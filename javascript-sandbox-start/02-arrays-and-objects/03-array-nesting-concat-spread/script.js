let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

// fruits.push(berries);

// x = fruits[3][1];

// const allFruits = [fruits, berries];

// x = allFruits;

x = fruits.concat(berries);

// Spread Operator

x = [...fruits, ...berries];

// Flatten Array
const newArr = [1, 2, [3, 4], 5, [6, 7], 8];

x = newArr.flat();

// Static methods on Array Object

x = Array.isArray(fruits);

x = Array.from('12345');
x = Array.from('Miguel');

const a = 1;
const b = 35;
const c = 7;

x = Array.of(a, b, c);

console.log(x);
