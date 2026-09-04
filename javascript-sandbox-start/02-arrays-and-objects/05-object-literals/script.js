let x;

const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main St',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

x = person.name;
x = person.address.state;
x = person.hobbies[1];

person.name = 'Jane Doe';
person.isAdmin = false;

delete person.age;

x = person;

console.log(x);
