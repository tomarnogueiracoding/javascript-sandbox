// Falsy values:
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

// Truthy values:
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

const x = function () {};

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

console.log(Boolean(x));

// Truthy and falsy caveats

const children = 0;

// if (children !== undefined && children !== null) {
//   // podiamos substituir por children != null, null == undefined é true
//   // portanto se children for undefined, undefined != null é false,
//   // o que leva ao console de pedir para introduzir o número
//   // desta forma, introduzir 0 já não leva a comportamento inesperado
//   console.log(`You have ${children} children`);
// } else {
//   console.log('Please enter number of children');
// }

if (children != null && !isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter the number of children');
}

// empty arrays

const posts = [];

if (posts.length > 0) {
  // um array vazio é sempre avaliado como truthy
  console.log('List Posts');
} else {
  console.log('No posts to list');
}

// checking for empty objects
const user = { name: 'Miguel' };

if (Object.keys(user).length > 0) {
  console.log('List user');
} else {
  console.log('No user');
}

console.log(Object.keys(user));
