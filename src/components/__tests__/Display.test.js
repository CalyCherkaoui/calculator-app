import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../Display';

describe(
  'Display component',
  () => {
    it('Matches Display snapshot', () => {
      const comp = renderer.create(<Display />);
      expect(comp).toMatchSnapshot();
    });
  },
);
