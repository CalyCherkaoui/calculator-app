import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../Quote';

describe(
  'Quote page',
  () => {
    it('Matches Quote page snapshot', () => {
      const comp = renderer.create(<Quote />);
      expect(comp).toMatchSnapshot();
    });
  },
);
