import React from 'react';
import shallow from 'enzyme';
import renderer from 'react-test-renderer';
import ButtonPanel from '../ButtonPanel';
import '@testing-library/jest-dom';

const handleClick = () => ({ total: '0', next: '0', operation: '' });
describe(
  'ButtonPanel component',
  () => {
    // let component;
    // beforeEach(() => { component = shallow(<ButtonPanel clickHandler={clickHandler} />); });
    it(
      'rendrs sucessfully compared to its snapshot',
      () => {
        const component = renderer.create(<ButtonPanel clickHandler={handleClick} />);
        expect(component).toMatchSnapshot();
        // eslint-disable-next-line no-unused-expressions
        // expect(component.find('.buttonsPanel')).toBeTruthy;
        // expect(component).toMatchSnapshot();
      },
    );
  },
);
