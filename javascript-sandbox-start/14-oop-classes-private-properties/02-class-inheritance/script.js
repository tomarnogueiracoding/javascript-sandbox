// Parent class
class Shape {
  constructor(name) {
    this.name = name;
  }

  logName() {
    console.log(`Shape Name: ${this.name}`);
  }
}

// Sub class
class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  logName() {
    console.log(`Circle Name: ${this.name}`);
  }
}

const rect = new Rectangle('Rect 1', 20, 30);
const circle = new Circle('Circle 1', 300);

console.log(rect);
console.log(circle);

rect.logName();
circle.logName();

console.log(rect instanceof Shape);
console.log(rect instanceof Rectangle);
console.log(rect instanceof Circle);
