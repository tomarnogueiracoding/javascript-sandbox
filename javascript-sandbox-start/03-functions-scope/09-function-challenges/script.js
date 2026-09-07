const getCelsius = (fahreinet) => ((fahreinet - 32) * 5) / 9;

console.log(`The temperature is ${getCelsius(32)} \xB0C`);

const minMax = (numbers) => {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return {
    min,
    max,
  };
};

console.log(minMax([55, 32, 43, 54, 65, 76, 87, 98, 109]));

(function area(length, width) {
  console.log(
    `The are of a rectangle with a length of ${length} and a width of ${width} is ${length * width}`,
  );
})(10, 5);
