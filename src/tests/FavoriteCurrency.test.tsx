import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import { Provider } from 'react-redux';
import { FavoriteCurrency } from '../components/index';
import createStore from '../redux';

describe('Favorite currency component', () => {
  const wrapper = shallow(
    <Provider store={createStore()}>
      <FavoriteCurrency />
    </Provider>
  );

  it('should render correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
