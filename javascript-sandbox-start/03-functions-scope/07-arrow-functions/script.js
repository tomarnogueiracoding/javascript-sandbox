// function add(a, b) {
//   return a + b;
// }

// Arrow funcion syntax
const add = (a, b) => {
  return a + b;
};

// Implicit return
const subtract = (a, b) => a - b;

const double = (a) => a * 2;

// Returning an object
const createObj = () => ({
  name: 'Miguel',
});

const createObjWithReturn = () => {
  return {
    name: 'Claude',
  };
};

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (num) {
  console.log(num);
});

numbers.forEach((num) => console.log(num));

console.log(add(1, 2));
console.log(subtract(2, 1));
console.log(double(10));
console.log(createObj());
console.log(createObjWithReturn());
