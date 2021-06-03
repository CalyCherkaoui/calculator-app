import Big from 'big.js';

const operate = (number0ne, numberTwo, operation) => {
  if (numberTwo === '') {
    return number0ne.toString();
  }

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
      total = (numberTwo === '0') ? 'Error: Divid by Zero' : numOne.div(numTwo);
      break;
    case '%':
      total = numOne.div(100).times(numTwo);
      break;
    default:
      total = 0;
      break;
  }

  return total.toString();
};

export default operate;
