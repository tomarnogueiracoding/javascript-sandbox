const rectagle = {
  name: 'Rectangle 1',
  width: 20,
  height: 10,
  area: function () {
    return this.width * this.height;
  },
};

console.log(rectagle.area());
