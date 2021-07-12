import { mount, ReactWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';
import React, { ChangeEvent } from 'react';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { InputValuesGroup } from '../components/index';
import { PropsInput, RootState } from '../types';

describe('Footer', () => {
  let state: RootState;
  let props: PropsInput;
  let setUp;
  let component: ReactWrapper;

  beforeAll(() => {
    props = {
      baseCurrency: 'string',
      handleChangeInput: (value) => value,
      handleChangeCurrency: (event: ChangeEvent) => event,
    };
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

    setUp = (store: RootState, propsApp: PropsInput) =>
      mount(
        <Provider store={mockStore(store)}>
          <InputValuesGroup {...state} {...propsApp} />
        </Provider>
      );

    component = setUp(state, props);
  });

  it('should render correctly', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it('has correct options', () => {
    expect(component.find('option')).toHaveLength(5);
  });

  it('has correct name options', () => {
    expect(component.find('option').at(0).text()).toEqual('USD');
  });

  it('has correct name options', () => {
    expect(component.find('option').at(1).text()).toEqual('EUR');
  });

  it('has correct name options', () => {
    expect(component.find('option').at(2).text()).toEqual('UAH');
  });

  it('has correct name options', () => {
    expect(component.find('option').at(3).text()).toEqual('RUR');
  });

  it('has correct name options', () => {
    expect(component.find('option').at(4).text()).toEqual('BTC');
  });
});
