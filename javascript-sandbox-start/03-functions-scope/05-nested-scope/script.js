function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }

  //   console.log(y)
  // this will throw an error. You can reference a variable from a parent node (the funcion first), inside the child
  // node (the function second), but you can't reference a variable from the child, in the parent.

  second();
}

first();

// Blocks

if (true) {
  const x = 100;

  if (x === 100) {
    const y = 200;
    console.log(x + y);
  }
}
