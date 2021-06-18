import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';

describe(
  'Home page',
  () => {
    it('Matches Home page snapshot', () => {
      const comp = renderer.create(<Home />);
      expect(comp).toMatchSnapshot();
    });
  },
);
