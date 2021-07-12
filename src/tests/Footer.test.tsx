import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import { Footer } from '../components/index';

describe('Footer component', () => {
  const wrapper = shallow(<Footer />);

  it('should render correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1);
  });
});
