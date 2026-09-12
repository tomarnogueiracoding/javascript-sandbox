// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 100; i++) {
//   let resultado = '';
//   if (i % 3 === 0) {
//     resultado += 'Fizz';
//   }
//   if (i % 5 === 0) {
//     resultado += 'Buzz';
//   }
//   if (resultado === '') {
//     resultado = i;
//   }
//   console.log(resultado);
// }

let i = 1;

while (i <= 100) {
  let resultado = '';
  if (i % 3 === 0) {
    resultado += 'Fizz';
  }
  if (i % 5 === 0) {
    resultado += 'Buzz';
  }
  if (resultado === '') {
    resultado = i;
  }
  console.log(resultado);
  i++;
}
