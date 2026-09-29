const strLit = 'Hello';

const strObj = new String('Hello');

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

// Boxing - It wraps the string literal into a new String object
console.log(strLit.toUpperCase());

// Unboxing - Returns the object into a string literal
console.log(strObj.valueOf(), typeof strObj.valueOf());

console.log(strLit.constructor);
console.log(strObj.constructor);
console.log(strLit instanceof String);
console.log(strObj instanceof String);

const funcLit = function (x) {
  return x * x;
};

console.log(funcLit, typeof funcLit);
console.log(funcLit(5));

const funcObj = new Function('x', 'return x * x');

console.log(funcObj, typeof funcObj);
console.log(funcObj(5));

const obj1 = {};
const obj2 = new Object();

console.log(obj1, typeof obj1);
console.log(obj2, typeof obj2);
