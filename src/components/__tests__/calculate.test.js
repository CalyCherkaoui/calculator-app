import calculate from '../logic/calculate';

describe('Calculate logic', () => {
  let data = {
    total: '',
    next: '',
    operate: '',
  };

  it('initialy assigns the number to the total', () => {
    data = calculate(data, '1');
    expect(data.total).toBe('1');
  });

  it('Calculates the sum of two numbers', () => {
    data = calculate(data, '+');
    data = calculate(data, '10');
    data = calculate(data, '=');
    expect(JSON.parse(data.total)).toBe(11);
  });
});
