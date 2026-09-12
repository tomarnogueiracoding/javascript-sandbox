const age = 17;

// if (age >= 18) {
//   console.log('You can vote');
// } else {
//   console.log('You cannot vote');
// }

// Ternary operators
age >= 18 ? console.log('You can vote') : console.log('You cannot vote');

// Assigning a conditional value to a variable using a ternary
const canvote = age >= 18 ? true : false;
const canvote2 = age >= 18 ? 'You can vote' : 'You can not vote';

console.log(canvote);
console.log(canvote2);

// Multiple statements
const auth = true;
// let redirect;

// if (auth) {
//   alert('Welcome to the dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('Acess Denied');
//   redirect = '/login';
// }

// const redirect = auth
//   ? (alert('Welcome to the dashboard'), '/dashboard')
//   : (alert('Acess denied'), '/login');

// console.log(redirect);

auth && console.log('Welcome to the dashboard');
