import React, { ChangeEvent } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { InputValuesGroup } from '../components';
import { initialState } from '../redux/ducks/currency';
import rootReducer from '../redux/index';

describe('InputValuesGroup', () => {});
