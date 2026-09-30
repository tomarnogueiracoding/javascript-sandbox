class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  area() {
    return this.height * this.width;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  isSquare() {
    return this.width === this.height;
  }

  changeName(newName) {
    return (this.name = newName);
  }

  logArea() {
    console.log(`Rectangle area is ${this.area()}`);
  }
}

const square = new Rectangle('Square', 20, 20);
console.log(square);
console.log(square.area());
console.log(square.perimeter());
console.log(square.isSquare());
square.changeName('Bananas');
console.log(square.name);

square.logArea();
