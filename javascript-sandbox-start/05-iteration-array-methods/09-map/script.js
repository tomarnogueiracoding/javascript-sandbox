const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map((item) => item * 2);

const prefixedNumbers = numbers.map((item) => `Number ${item}`);

console.log(doubledNumbers);
console.log(prefixedNumbers);

// Same with forEach

// Carefull, this returns untitled:

const doubleNumbers2 = numbers.forEach((item) => item * 2);

console.log(doubleNumbers2);

// This is the correct forEach implementation:

const doubleNumbers3 = [];

numbers.forEach((item) => doubleNumbers3.push(item * 2));

console.log(doubleNumbers3);

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// Create an array of company names

const companyNames = companies.map((item) => item.name);

console.log(companyNames);

// Create an array with just company and category

const companyNamesAndCategories = companies.map((item) => {
  return {
    name: item.name,
    category: item.category,
  };
});

console.log(companyNamesAndCategories);

// Create an array of the lenght of each company in years

const companyAge = companies.map((item) => {
  return {
    name: item.name,
    companyYears: item.end - item.start,
  };
});

console.log(companyAge);

// Chain map methods - the parameter in the second map refers to the result returned from the first map

const squaredAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);

console.log(squaredAndDouble);

const squaredAndDoubleMinusOne = numbers
  .map(function (number) {
    return Math.sqrt(number);
  })
  .map(function (sqrtResult) {
    return sqrtResult * 2;
  })
  .map(function (doubledNumber) {
    return doubledNumber - 1;
  });

console.log(squaredAndDoubleMinusOne);

// Chaining diferent methods

const evenDoubledNumber = numbers
  .filter((number) => number % 2 === 0)
  .map((evenNumber) => evenNumber * 2);

console.log(evenDoubledNumber);
