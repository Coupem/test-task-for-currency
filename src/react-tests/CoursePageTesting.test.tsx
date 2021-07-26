import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';

import configureStore from 'redux-mock-store';
import CoursePage from '../pages/CoursePage';
import { RootState } from '../types';

let state: RootState;
let component: HTMLElement;
let setUp;

describe('Course page component', () => {
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
          <CoursePage {...state} />
        </Provider>
      );

    const { container } = setUp(state);
    component = container;
  });

  it('html markup', () => {
    screen.debug();
  });

  it('has course page render', () => {
    expect(component.innerHTML).toMatch('Course:');
  });

  it('has favorite currency container', () => {
    expect(component.innerHTML).toMatch('Favorite Currency:');
  });

  it('has currency USD', () => {
    expect(component.innerHTML).toMatch('USD');
  });
  it('has currency EUR', () => {
    expect(component.innerHTML).toMatch('EUR');
  });

  it('has currency RUR', () => {
    expect(component.innerHTML).toMatch('RUR');
  });

  it('has currency BTC', () => {
    expect(component.innerHTML).toMatch('BTC');
  });
});
