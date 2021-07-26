import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';
import { RootState } from '../types';

import App from '../App';

let state: RootState;
let component;
let setUp;

describe('Main layout component', () => {
  beforeEach(() => {
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
      render(
        <Provider store={mockStore(store)}>
          <App {...state} />
        </Provider>
      );
    component = setUp(state);
  });

  it('html markup', () => {
    screen.debug();
  });

  it('html markup', () => {
    expect(screen.getByText('Converter:')).toBeInTheDocument();
  });

  it('has header container render', () => {
    expect(
      screen.getByText(/Best converter & valid currency course/i)
    ).toBeInTheDocument();
  });

  it('has footer container render', () => {
    expect(
      screen.getByText(/Best converter & valid currency course/i)
    ).toBeInTheDocument();
  });
});
