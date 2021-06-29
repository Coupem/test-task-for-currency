import axios from 'axios';
import { URL_CURRENCY_REQUEST } from './constants';

export const getCurrencyRequest = axios.get(URL_CURRENCY_REQUEST).then((res) =>
  res.data.map(({ base_ccy, ...currencyData }) => ({
    ...currencyData,
    baseCcy: base_ccy,
  }))
);
