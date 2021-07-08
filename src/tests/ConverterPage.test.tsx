import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import { Provider } from 'react-redux';
import ConverterPage from '../pages/ConverterPage';
import createStore from '../redux/index';

describe('Converter page', () => {
  const wrapper = shallow(
    <Provider store={createStore()}>
      <ConverterPage />
    </Provider>
  );

  it('should render correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
