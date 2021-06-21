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
});
