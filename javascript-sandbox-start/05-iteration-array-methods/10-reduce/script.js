const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

const sum2 = numbers.reduce((acc, current) => acc + current, 0);

console.log(sum2);

// Using a for loop

let sum3 = 0;

for (let item of numbers) {
  sum3 += item;
}

console.log(sum3);

const cart = [
  { id: 1, name: 'Product 1', price: 130 },
  { id: 2, name: 'Product 2', price: 340 },
  { id: 3, name: 'Product 3', price: 212 },
];

const total = cart.reduce((acc, product) => {
  return acc + product.price;
}, 0);

console.log(total);
