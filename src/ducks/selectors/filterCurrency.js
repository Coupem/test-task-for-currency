export const getFilteredCurrency = (listCurrency, baseCurrency) =>
  listCurrency.filter((itemCurrency) => itemCurrency.ccy !== baseCurrency);
