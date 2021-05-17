import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  switch (buttonName) {
    case '+/-':
      total *= -1;
      next *= -1;
      break;
    case 'AC':
      total = '0';
      next = '0';
      operation = '';
      break;
    default:
      break;
  }

  const ops = ['*', '+', '-', '/', '%'];

  if (ops.includes(buttonName)) {
    total = operate(total, next, buttonName);
  }

  return { total, next, operation };
};

export default calculate;
