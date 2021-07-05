import {
  LOAD_CURRENCY,
  LOAD_CURRENCY_FAILED,
  LOAD_CURRENCY_SUCCESS,
} from './actionTypes';

export interface ResponseCurrency {
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string;
}

export interface Currency {
  ccy: string;
  baseCcy: string;
  buy: string;
  sale: string;
}

export interface CurrencyState {
  currency: Currency[];
  isLoadingCurrency: boolean;
  error: string | null;
}

export interface FetchCurrencyFailedPayload {
  error: string;
}

export interface FetchCurrencyRequest {
  type: typeof LOAD_CURRENCY;
}

export type FetchCurrencySuccess = {
  type: typeof LOAD_CURRENCY_SUCCESS;
  payload: Currency[];
};

export type FetchCurrencyFailed = {
  type: typeof LOAD_CURRENCY_FAILED;
  payload: FetchCurrencyFailedPayload;
};

export type CurrencyActions =
  | FetchCurrencyRequest
  | FetchCurrencySuccess
  | FetchCurrencyFailed;

export interface StoreState {
  currency: CurrencyState;
}

// export interface PropSelector {
//   listCurrency: Currency[];
//   baseCurrency: string;
//   inputValue: string;
// }
