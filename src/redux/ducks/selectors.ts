import { Currency } from './types';

export const getConvertToNational = (
  listCurrency: Currency[],
  baseCurrency: string,
  inputValue: string
): number => {
  let convertedValue = 1;

  if (baseCurrency === 'BTC') {
    // converted to USD
    const obj = listCurrency.find((itemCurrency) => itemCurrency.ccy === 'USD');

    if (obj) {
      convertedValue = parseInt(inputValue, 10) * parseInt(obj.buy, 10);
    }
  }

  listCurrency.forEach((itemCurrency) => {
    if (baseCurrency === itemCurrency.ccy) {
      convertedValue =
        convertedValue *
        parseInt(inputValue, 10) *
        parseInt(itemCurrency.buy, 10);
    }
  });

  return convertedValue;
};

export const getFilteredCurrency = (
  listCurrency: Currency[],
  baseCurrency: string
): Currency[] =>
  listCurrency.filter((itemCurrency) => itemCurrency.ccy !== baseCurrency);
