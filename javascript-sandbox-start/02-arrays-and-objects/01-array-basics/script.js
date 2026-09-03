let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39, 102];
const mixed = [12, 'Hello', true, null];

// Array Constructor
const fruits = new Array('apple', 'grape', 'orange');

x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite food is an ${fruits[2]}`;

x = numbers.length;

fruits[3] = 'strawberry';

fruits[fruits.length] = 'watermellon';
fruits[fruits.length] = 'peach';
fruits[fruits.length] = 'banana';

x = fruits;

console.log(x);
