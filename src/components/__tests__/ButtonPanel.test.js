import React from 'react';
import renderer from 'react-test-renderer';
import ButtonPanel from '../ButtonPanel';
import '@testing-library/jest-dom';

const handleClick = () => ({ total: '0', next: '0', operation: '' });
describe(
  'ButtonPanel component',
  () => {
    it(
      'rendrs sucessfully compared to its snapshot',
      () => {
        const component = renderer.create(<ButtonPanel clickHandler={handleClick} />);
        expect(component).toMatchSnapshot();
      },
    );
  },
);
