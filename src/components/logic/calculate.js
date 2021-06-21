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
    case '9':
    case '8':
    case '7':
    case '6':
    case '5':
    case '4':
    case '3':
    case '2':
    case '1':
    case '0':
    case '.':
      // eslint-disable-next-line no-unused-expressions
      (operation === '' || !operation) ? total = `${total}${buttonName}` : next = `${next}${buttonName}`;
      break;
    case '=':
      // eslint-disable-next-line no-console
      console.log(operate(total, next, operation));
      total = operate(total, next, operation);
      next = '';
      operation = '';
      break;
    default:
      operation = buttonName;
      break;
  }

  return { total, next, operation };
};

export default calculate;
