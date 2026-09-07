'use strict';

// Default Params

function registerUser(user = 'Miguel') {
  return user + ' is registered';
}

console.log(registerUser('Carlos'));

// Rest Params

function sum(...numbers) {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  return total;
}

// console.log(sum(5, 96, 23));

// Objects as params

function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const person = {
  name: 'Miguel',
  id: 1,
};

console.log(loginUser(person));

// Arrays as params

function numFromArray(arr) {
  let ramdomIndex = Math.floor(Math.random() * arr.length);
  return arr[ramdomIndex];
}

console.log(numFromArray([3, 5, 7, 9, 10]));
