const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Destructuring

const todo = {
  id: 1,
  title: 'Take out trash',
};

const { id, title } = todo;

console.log(id, title);

const numbers = [23, 67, 33, 49, 101, 34, 26];

const [first, second, bananas, ...rest] = numbers;

console.log(bananas, first, second, rest);
