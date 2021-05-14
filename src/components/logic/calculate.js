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

  return { total, next, operation };
};

export default calculate;
