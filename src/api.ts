import axios, { AxiosResponse } from 'axios';
import { URL_CURRENCY_REQUEST } from './constants';
import { ResponseCurrency, Currency } from './types';

export const getCurrencyRequest = (): Promise<AxiosResponse<Array<Currency>>> =>
  axios.get(URL_CURRENCY_REQUEST).then((res) =>
    // eslint-disable-next-line camelcase
    res.data.map(({ base_ccy, ...currencyData }: ResponseCurrency) => ({
      ...currencyData,
      baseCcy: base_ccy,
    }))
  );
