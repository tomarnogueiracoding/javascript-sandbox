let x;
let d = new Date();

x = d.toString();
x = d.getTime();
x = d.valueOf();

x = d.getFullYear();
x = d.getMonth() + 1;

x = d.getDate();
x = d.getDay();

x = d.getHours();

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('default').format(d);

console.log(x);
