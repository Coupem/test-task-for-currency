import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { RootState } from '../types';
import App from '../App';

let state: RootState;
let component: ReactWrapper;
let setUp;

describe('Main layout component', () => {
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
        error: '',
      },
    };
    const mockStore = configureStore();
    setUp = (store: RootState) =>
      mount(
        <Provider store={mockStore(store)}>
          <App {...state} />
        </Provider>
      );
    component = setUp(state);
  });
  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
  it('render all 4 column', () => {
    expect(component.find('Col')).toHaveLength(4);
  });
});
