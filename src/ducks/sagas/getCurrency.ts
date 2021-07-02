import { call, put, takeEvery } from 'redux-saga/effects';
import {
  LOAD_CURRENCY,
  getCurrencyError,
  getCurrencySuccess,
} from '../reducers/currency';
import { getCurrencyRequest } from '../../api';
import { UKRAINIAN_CURRENCY } from '../../constants';

function* fetchCurrency() {
  try {
    const responseData = yield call(getCurrencyRequest);
    const currencyList = [...responseData, { ...UKRAINIAN_CURRENCY }];
    yield put(getCurrencySuccess(currencyList));
  } catch (e) {
    yield put(getCurrencyError(e));
  }
}

export function* getCurrency() {
  yield takeEvery(LOAD_CURRENCY, fetchCurrency);
}
