import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter as Router } from 'react-router-dom';
import Navigation from '../Navigation';

describe(
  'Navigation bar component',
  () => {
    it('Matches Navigation bar snapshot', () => {
      const comp = renderer.create(<Router><Navigation /></Router>);
      expect(comp).toMatchSnapshot();
    });
  },
);
