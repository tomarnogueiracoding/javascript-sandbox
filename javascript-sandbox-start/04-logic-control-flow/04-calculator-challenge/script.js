function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
      break;
    case '-':
      return num1 - num2;
      break;
    case '*':
      return num1 * num2;
      break;
    case '/':
      return num1 / num2;
      break;
    case '&':
      return 'Calculation not allowed';
      break;
    default:
      return 'Please choose a valid operator';
  }
}

const result = calculator(5, 2, '%');

console.log(result);
