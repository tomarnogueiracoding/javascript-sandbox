let x;

const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  c: 3,
  d: 4,
};

const obj3 = { ...obj1, ...obj2 };

const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pick up kids from school' },
  { id: 3, name: 'Take out trash' },
];

x = todos;

console.log(x);
