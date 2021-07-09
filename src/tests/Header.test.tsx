import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import { Header } from '../components/index';

describe('Header component', () => {
  const wrapper = shallow(<Header />);

  it('should render correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1);
  });
});
