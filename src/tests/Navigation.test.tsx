import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import { Navigation } from '../components/index';
import { NavButton } from '../styled';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/',
  }),
}));

describe('Navigation component', () => {
  const wrapper = shallow(<Navigation />);

  it('should render correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Test button component', () => {
    const mockCallBack = jest.fn();
    const button = shallow(<NavButton onClick={mockCallBack} />);
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
