import Big from 'big.js';

const operate = (number0ne, numberTwo, operation) => {
  let total = 0;
  switch (operation) {
    case '+':
      total = Big(number0ne) + Big(numberTwo);
      break;
    default:
      break;
  }

  return total;
};

export default operate;
