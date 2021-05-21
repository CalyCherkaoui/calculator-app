import Big from 'big.js';

const operate = (number0ne, numberTwo, operation) => {
  let total = '0';
  const numOne = new Big(number0ne);
  const numTwo = new Big(numberTwo);

  switch (operation) {
    case '+':
      total = numOne.plus(numTwo);
      break;
    case '-':
      total = numOne.minus(numTwo);
      break;
    case '*':
      total = numOne.times(numTwo);
      break;
    case '/':
      total = (numberTwo === 0) ? 'Error' : numOne.div(numTwo).toString;
      break;
    case '%':
      total = numOne.div(100).times(numTwo);
      break;
    default:
      break;
  }

  return total.toString();
};

export default operate;
