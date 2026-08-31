let x;

const num = new Number(5);

x = num.toPrecision(2);
x = num.toExponential(2);

x = num.toString();
x = num.toFixed(2);
x = num.valueOf();

console.log(x, typeof x);
