'use strict';

const x = 100;
const foo = 1;
var bar = 2;

{
  const y = 200;
  console.log(x + y);
}

{
  const a = 500;
  let b = 600;
  var c = 700;
}

console.log(c);

function varScopeCheck() {
  var d = 800;
  console.log(d);
}

varScopeCheck();

// console.log(d);
// This will throw an error. var is not block scoped, but is function scoped
