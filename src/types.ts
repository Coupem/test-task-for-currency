import { ChangeEventHandler } from 'react';
import {
  LOAD_CURRENCY_SUCCESS,
  LOAD_CURRENCY_FAILED,
  LOAD_CURRENCY,
} from './redux/ducks/actionTypes';

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

export interface RootState {
  currency: CurrencyState;
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

export interface FavoriteState {
  ccy: string;
  buy: string;
  sale: string;
}

interface FavoriteStateForProp {
  ccy?: string;
  buy?: string;
  sale?: string;
}

export interface CurrencyStorage {
  [key: string]: FavoriteState;
}

export interface FavoriteCurrencyProp {
  [key: string]: FavoriteStateForProp;
}

export interface PropConverter {
  baseCurrency: string;
  convertedValue: number;
}

export interface PropsInput {
  baseCurrency: string;
  handleChangeCurrency: ChangeEventHandler<HTMLSelectElement>;
  handleChangeInput: (value: string) => void;
}

export type ErrorsHandler = {
  amount?: string;
};
