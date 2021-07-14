import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import ConverterPage from '../pages/ConverterPage';
import createStore from '../redux';

describe('ConverterPage', () => {
  it('correct render', () => {
    render(
      <Provider store={createStore()}>
        <ConverterPage />
      </Provider>
    );
    screen.debug();
  });
});
