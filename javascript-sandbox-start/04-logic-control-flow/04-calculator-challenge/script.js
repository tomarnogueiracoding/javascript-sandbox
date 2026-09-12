function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '&':
      result = 'Calculation not allowed';
      break;
    default:
      result = 'Please choose a valid operator';
  }
  console.log(result);
  return result;
}

calculator(5, 2, '+');
