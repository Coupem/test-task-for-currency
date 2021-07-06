import { Currency } from '../../types';

export const getConvertToNational = (
  listCurrency: Currency[],
  baseCurrency: string,
  inputValue: number
): number => {
  let convertedValue = 1;
  let enteredNumber = inputValue;

  if (!enteredNumber) {
    enteredNumber = 0;
  }
  if (baseCurrency === 'BTC') {
    // converted to USD
    const currencyBTC = listCurrency.find(
      (itemCurrency) => itemCurrency.ccy === 'USD'
    );

    if (currencyBTC) {
      convertedValue = enteredNumber * parseFloat(currencyBTC.buy);
    }
  }

  listCurrency.forEach((itemCurrency) => {
    if (baseCurrency === itemCurrency.ccy) {
      convertedValue =
        convertedValue * enteredNumber * parseFloat(itemCurrency.buy);
    }
  });

  return convertedValue;
};

export const getFilteredCurrency = (
  listCurrency: Currency[],
  baseCurrency: string
): Currency[] =>
  listCurrency.filter((itemCurrency) => itemCurrency.ccy !== baseCurrency);
