class Test {
  constructor(name) {
    this.name = name;
  }
}

const globalTest = new Test('globalTest');
const globalString = 'globalString';

{
  const innerTest = new Test('innerTest');
  const innerString = 'globalString';

  console.log(innerTest);
  console.log(innerString);
}
