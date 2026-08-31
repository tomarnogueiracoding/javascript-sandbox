let x;

const name = 'Miguel';
const age = 50;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';

// Template literals
x = `Hello, my name is ${name} and I am ${age} years old.`;

// String Properties and Methods

const s = new String('Hello World');

x = typeof s;

// Acess value by key

x = s[0];

// String Prototype

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();
x = s.charAt(0);
x = s.indexOf('d');
x = s.substring(0, 5);
x = s.substring(7);
x = s.slice(0, 5);
x = s.valueOf();
x = s.trim();
x = s.replace('World', 'John');
x = s.includes('Helli');
x = s.valueOf();
x = s.split('');

console.log(x);
