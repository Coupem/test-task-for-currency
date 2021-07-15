import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import ConverterPage from '../pages/ConverterPage';
import { RootState } from '../types';

let state: RootState;
let component: HTMLElement | Element;
let setUp;

describe('ConverterPage component', () => {
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
          <ConverterPage {...state} />
        </Provider>
      );

    const { container } = setUp(state);
    component = container;
  });

  it('html markup', () => {
    screen.debug();
  });

  it('has converter page render', () => {
    expect(screen.getByText('Converter:')).toBeInTheDocument();
  });

  it('has currency USD in converter', () => {
    expect(screen.getAllByText(/usd/i)).toHaveLength(2);
  });

  it('has currency EUR in converter', () => {
    expect(screen.getAllByText(/eur/i)).toHaveLength(2);
  });

  it('has currency RUR in converter', () => {
    expect(screen.getAllByText(/rur/i)).toHaveLength(2);
  });

  it('has currency BTC in converter', () => {
    expect(screen.getAllByText(/btc/i)).toHaveLength(2);
  });

  it('has place holder input', () => {
    expect(screen.getByPlaceholderText('input value')).toBeInTheDocument();
  });

  it('correct input', async () => {
    await screen.findByText('Converter:');
    expect(screen.queryByTestId('input')).not.toHaveValue(1);
    fireEvent.change(screen.getByTestId('input'), {
      target: { value: 10 },
    });
    expect(screen.queryByTestId('input')).toHaveValue(10);
  });
});
