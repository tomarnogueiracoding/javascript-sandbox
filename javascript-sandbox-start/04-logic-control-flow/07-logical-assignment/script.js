let a = false;

// if (!a) {
//   a = 10;
// }

// a = a || 10;

a ||= 10;

console.log(a);

let b = 10;

// if (b) {
//   b = 20;
// }

// b = b && 20;

b &&= 20;

console.log(b);

let c = null;

// if (c === null || c === undefined) {
//   c = 30;
// }

// c = c ?? 30;

c ??= 30;

console.log(c);
