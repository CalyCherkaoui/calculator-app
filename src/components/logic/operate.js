import Big from 'big.js';

const operate = (number0ne, numberTwo, operation) => {
  let total = 0;
  const numOne = new Big(number0ne);
  const numTwo = new Big(numberTwo);

  switch (operation) {
    case '+':
      total = numOne + numTwo;
      break;
    case '-':
      total = numOne - numTwo;
      break;
    case '*':
      total = numOne * numTwo;
      break;
    case '/':
      total = (numberTwo === 0) ? 'Error' : (numOne / numTwo);
      break;
    case '%':
      total = numOne / 100;
      break;
    default:
      break;
  }

  return total;
};

export default operate;
