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
    data = calculate(data, '1');
    data = calculate(data, '+');
    data = calculate(data, '10');
    data = calculate(data, '=');
    expect(JSON.parse(data.total)).toEqual(11);
  });

  it('Calculates the difference of two numbers', () => {
    data = calculate(data, '-');
    data = calculate(data, '1');
    data = calculate(data, '=');
    expect(JSON.parse(data.total)).toEqual(10);
  });

  it('Calculates the multiplication of two numbers', () => {
    data = calculate(data, '*');
    data = calculate(data, '2');
    data = calculate(data, '=');
    expect(JSON.parse(data.total)).toEqual(20);
  });

  it('Calculates the division of two numbers', () => {
    data = calculate(data, '/');
    data = calculate(data, '2');
    data = calculate(data, '=');
    expect(JSON.parse(data.total)).toEqual(10);
  });

  it('Calculates the percentage', () => {
    data = calculate(data, '%');
    data = calculate(data, '100');
    data = calculate(data, '=');
    expect(JSON.parse(data.total)).toEqual(10);
  });

  it('Resets the value to 0 when AC is trigered', () => {
    data = calculate(data, 'AC');
    expect(data).toEqual({ total: '0', next: '0', operation: '' });
  });
});
