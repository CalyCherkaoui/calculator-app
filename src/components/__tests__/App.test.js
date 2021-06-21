import React from 'react';
import renderer from 'react-test-renderer';
// import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

describe(
  'App component',
  () => {
    it('Matches App snapshot', () => {
      const comp = renderer.create(<App />);
      expect(comp).toMatchSnapshot();
    });
  },
);
