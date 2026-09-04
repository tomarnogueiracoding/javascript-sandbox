const library = [
  {
    title: 'The Predicament',
    author: 'William Boyd',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'The Lizard',
    author: 'LJ Ross',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Dont Let Him In',
    author: 'Lisa Jewell',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0];

const str = JSON.stringify(library);

console.log(library);
console.log(firstBook);
console.log(str);
