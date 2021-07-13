import { ReactWrapper, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import configureStore from 'redux-mock-store';

import { Provider } from 'react-redux';
import { ConvertCurrency } from '../components/index';
import { PropConverter, RootState } from '../types';

describe('Converter page', () => {
  let state: RootState;
  let props: PropConverter;
  let setUp;
  let component: ReactWrapper;

  beforeAll(() => {
    props = { baseCurrency: 'string', convertedValue: 1 };
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

    setUp = (store: RootState, propsApp: PropConverter) =>
      mount(
        <Provider store={mockStore(store)}>
          <ConvertCurrency {...state} {...propsApp} />
        </Provider>
      );

    component = setUp(state, props);
  });

  it('should have be render correctly', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it('has correct iteration', () => {
    expect(component.find('#convertedValue')).toHaveLength(
      state.currency.currency.length
    );
  });

  it('has correct iteration', () => {
    expect(component.find('#emblem')).toHaveLength(
      state.currency.currency.length
    );
  });

  it('has correct name options in converter container', () => {
    expect(component.find('#emblem').at(0).text()).toEqual('USD');
  });

  it('has correct name options in converter container', () => {
    expect(component.find('#emblem').at(1).text()).toEqual('EUR');
  });

  it('has correct name options in converter container', () => {
    expect(component.find('#emblem').at(2).text()).toEqual('UAH');
  });

  it('has correct name options in converter container', () => {
    expect(component.find('#emblem').at(3).text()).toEqual('RUR');
  });

  it('has correct name options in converter container', () => {
    expect(component.find('#emblem').at(4).text()).toEqual('BTC');
  });
});
