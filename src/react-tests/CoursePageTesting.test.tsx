import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import React, { ChangeEvent } from 'react';
import { createMemoryHistory } from 'history';
import { Router, Switch } from 'react-router-dom';
import createStore from '../redux';
import ConverterPage from '../pages/ConverterPage';
import CoursePage from '../pages/CoursePage';
import App from '../App';
import { InputValuesGroup } from '../components';
import { PropConverter } from '../types';

describe('CoursePage', () => {
  const { container, getByText } = render(
    <Provider store={createStore()}>
      <CoursePage />
    </Provider>
  );

  it('correct render', () => {
    screen.debug();
  });

  it('correct name', () => {
    expect(container.firstChild);
  });
});
