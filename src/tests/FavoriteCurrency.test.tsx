import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { FavoriteCurrency } from '../components/index';

import { FavoriteCurrencyProp, RootState } from '../types';

describe('Favorite currency component', () => {
  const props: FavoriteCurrencyProp = {
    USD: { ccy: 'USD', buy: '27.05000', sale: '27.45000' },
    EUR: { ccy: 'EUR', buy: '31.85000', sale: '32.45000' },
    RUR: { ccy: 'RUR', buy: '0.35000', sale: '0.38000' },
    BTC: { ccy: 'BTC', buy: '31125.3298', sale: '34401.6803' },
  };
  const state: RootState = {
    currency: {
      currency: [
        { ccy: 'USD', baseCcy: 'UAH', buy: '27.05000', sale: '27.45000' },
        { ccy: 'EUR', baseCcy: 'UAH', buy: '31.85000', sale: '32.45000' },
        { ccy: 'UAH', baseCcy: 'UAH', buy: '1', sale: '1' },
        { ccy: 'RUR', baseCcy: 'UAH', buy: '0.35000', sale: '0.38000' },
        { ccy: 'BTC', baseCcy: 'USD', buy: '31125.3298', sale: '34401.6803' },
      ],
      isLoadingCurrency: false,
      error: 'string',
    },
  };
  const mockStore = configureStore();
  const wrapper = shallow(
    <Provider store={mockStore(state)}>
      <FavoriteCurrency {...props} />
    </Provider>
  );

  it('should render correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('has correct values', () => {
    expect(Object.keys(wrapper.props().children.props).length).toEqual(4);
  });
});
