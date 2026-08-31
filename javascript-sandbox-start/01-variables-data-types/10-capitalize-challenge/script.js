// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';

// const firstLetter = myString.charAt(0);
// const firstLetterUppercase = firstLetter.toUpperCase();
// const remainingString = myString.substring(1);
// const myNewString = firstLetterUppercase + remainingString;

const myNewString = myString.charAt(0).toUpperCase() + myString.slice(1);

console.log(myNewString);
