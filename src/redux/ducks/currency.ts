import { call, put, takeEvery } from 'redux-saga/effects';
import { getCurrencyRequest } from '../../api';
import { UKRAINIAN_CURRENCY } from '../../constants';
import { StateTypes } from './currencyTypes';

export const LOAD_CURRENCY_SUCCESS =
  'task-currency/currency/LOAD_CURRENCY_SUCCESS';
export const LOAD_CURRENCY = 'task-currency/currency/LOAD_CURRENCY';

export const LOAD_CURRENCY_FAILED =
  'task-currency/currency/LOAD_CURRENCY_FAILED';

const initialState: StateTypes = {
  currency: [],
  isLoadingCurrency: false,
  error: null,
};

export default (state: StateTypes = initialState, action) => {
  switch (action.type) {
    case LOAD_CURRENCY:
      return {
        ...state,
        isLoadingCurrency: true,
      };
    case LOAD_CURRENCY_SUCCESS:
      return {
        ...state,
        currency: action.payload,
        isLoadingCurrency: false,
      };
    case LOAD_CURRENCY_FAILED:
      return {
        ...state,
        isLoadingCurrency: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getCurrency = () => ({ type: LOAD_CURRENCY });

export const getCurrencySuccess = (payload) => ({
  type: LOAD_CURRENCY_SUCCESS,
  payload,
});

export const getCurrencyError = (payload) => ({
  type: LOAD_CURRENCY_FAILED,
  payload,
});

function* fetchCurrency() {
  try {
    const responseData = yield call(getCurrencyRequest);
    const currencyList = [...responseData, { ...UKRAINIAN_CURRENCY }];
    yield put(getCurrencySuccess(currencyList));
  } catch (e) {
    yield put(getCurrencyError(e));
  }
}

export function* getRequestDataCurrency() {
  yield takeEvery(LOAD_CURRENCY, fetchCurrency);
}
