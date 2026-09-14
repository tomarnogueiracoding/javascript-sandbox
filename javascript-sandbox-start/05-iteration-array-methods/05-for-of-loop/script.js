const items = ['book', 'table', 'chair', 'kite'];
const users = [{ name: 'Miguel' }, { name: 'Pedro' }, { name: 'Joana' }];

// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

for (const item of items) {
  console.log(item);
}

for (const user of users) {
  console.log(user.name);
}

// Loop over strings

const string = 'Hello World';

for (const char of string) {
  console.log(char);
}
