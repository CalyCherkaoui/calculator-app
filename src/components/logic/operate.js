import Big from 'big.js';

const operate = (number0ne, numberTwo, operation) => {
  let total = 0;
  switch (operation) {
    case '+':
      total = Big(number0ne) + Big(numberTwo);
      break;
    case '-':
      total = Big(number0ne) - Big(numberTwo);
      break;
    case '*':
      total = Big(number0ne) * Big(numberTwo);
      break;
    case '/':
      total = (numberTwo === 0) ? 'Error' : (Big(number0ne) / Big(numberTwo));
      break;
    case '%':
      total = Big(number0ne) / 100;
      break;
    default:
      break;
  }

  return total;
};

export default operate;
