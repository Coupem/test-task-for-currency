export const getConvertToNational = (
  listCurrency,
  baseCurrency,
  inputValue
) => {
  let convertedValue = 1;

  if (baseCurrency === 'BTC') {
    // converted to USD
    const { buy } = listCurrency.find(
      (itemCurrency) => itemCurrency.ccy === 'USD'
    );
    convertedValue = inputValue * buy;
  }

  listCurrency.forEach((itemCurrency) => {
    if (baseCurrency === itemCurrency.ccy) {
      convertedValue = convertedValue * inputValue * itemCurrency.buy;
    }
  });
  return convertedValue;
};

export const getFilteredCurrency = (listCurrency, baseCurrency) =>
  listCurrency.filter((itemCurrency) => itemCurrency.ccy !== baseCurrency);
