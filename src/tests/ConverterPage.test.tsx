import { mount, ReactWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import configureStore from 'redux-mock-store';

import { Provider } from 'react-redux';
import ConverterPage from '../pages/ConverterPage';
import { RootState } from '../types';

describe('Converter page', () => {
  let state: RootState;
  let setUp;
  let component: ReactWrapper;

  beforeAll(() => {
    state = {
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

    setUp = (store: RootState) =>
      mount(
        <Provider store={mockStore(store)}>
          <ConverterPage {...state} />
        </Provider>
      );

    component = setUp(state);
  });

  it('should render correctly', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
