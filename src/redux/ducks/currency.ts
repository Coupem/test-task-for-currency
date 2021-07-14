import { call, put, takeEvery, ForkEffect } from 'redux-saga/effects';

import { getCurrencyRequest } from '../../api';
import { UKRAINIAN_CURRENCY } from '../../constants';

import {
  LOAD_CURRENCY,
  LOAD_CURRENCY_FAILED,
  LOAD_CURRENCY_SUCCESS,
  CurrencyState,
  CurrencyActions,
  FetchCurrencyRequest,
  FetchCurrencySuccess,
  FetchCurrencyFailedPayload,
  FetchCurrencyFailed,
  Currency,
} from '../../types';

export const initialState: CurrencyState = {
  currency: [],
  isLoadingCurrency: true,
  error: '',
};

export default (
  state: CurrencyState = initialState,
  action: CurrencyActions
): CurrencyState => {
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
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export const getCurrency = (): FetchCurrencyRequest => ({
  type: LOAD_CURRENCY,
});

export const getCurrencySuccess = (
  payload: Currency[]
): FetchCurrencySuccess => ({
  type: LOAD_CURRENCY_SUCCESS,
  payload,
});

export const getCurrencyError = (
  payload: FetchCurrencyFailedPayload
): FetchCurrencyFailed => ({
  type: LOAD_CURRENCY_FAILED,
  payload,
});

function* fetchCurrency() {
  try {
    const responseData: Currency[] = yield call(getCurrencyRequest);
    const currencyList = [...responseData, { ...UKRAINIAN_CURRENCY }];
    yield put(getCurrencySuccess(currencyList));
  } catch (e) {
    yield put(
      getCurrencyError({
        error: e.message,
      })
    );
  }
}

export function* getRequestDataCurrency(): Generator<ForkEffect<never>> {
  yield takeEvery(LOAD_CURRENCY, fetchCurrency);
}
