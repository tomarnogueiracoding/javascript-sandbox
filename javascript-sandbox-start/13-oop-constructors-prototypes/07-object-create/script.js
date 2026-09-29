const rectanglePrototypes = {
  area: function () {
    return this.width * this.heigth;
  },
  perimenter: function () {
    return 2 * (this.width + this.heigth);
  },
  isSquare: function () {
    return this.width === this.heigth;
  },
};

function createRectangle(heigth, width) {
  return Object.create(rectanglePrototypes, {
    heigth: {
      value: heigth,
    },
    width: {
      value: width,
    },
  });
}

const rect = createRectangle(20, 30);

console.log(rect);

console.log(rect.area());
