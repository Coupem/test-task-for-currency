import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ConverterContainer, TitleConverterContainer } from './styledComponets';
import InputGroupComponent from './InputGroupComponent';
import ConvertCurrencyComponent from './ConvertCurrencyComponent';

function ConverterPage({ loadedCurrency }) {
  const [valueInput, setInputValue] = useState('');
  const [convertedValueToNational, setConvertedValueToNational] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState('UAH');

  const handleChangeBaseCurrency = (currency) => {
    setBaseCurrency(currency);
  };

  const handleInputValue = (event) => {
    const inputValue = Math.max(0, parseInt(event.target.value, 10))
      .toString()
      .slice(0, 10);
    setInputValue(inputValue);
  };

  const filteredCurrency = loadedCurrency.filter(
    (itemCurrency) => itemCurrency.ccy !== baseCurrency
  );

  useEffect(() => {
    let countValue = 1;

    if (baseCurrency === 'BTC') {
      // converted to USD
      const { buy } = loadedCurrency.find(
        (itemCurrency) => itemCurrency.ccy === 'USD'
      );
      countValue = valueInput * buy;
    }

    loadedCurrency.forEach((itemCurrency) => {
      if (baseCurrency === itemCurrency.ccy) {
        setConvertedValueToNational(countValue * valueInput * itemCurrency.buy);
      }
    });
  });

  return (
    <ConverterContainer>
      <TitleConverterContainer>Converter:</TitleConverterContainer>
      <InputGroupComponent
        loadedCurrency={loadedCurrency}
        baseCurrency={baseCurrency}
        handleChangeCurrency={handleChangeBaseCurrency}
        handleChangeInput={handleInputValue}
      />
      <ConvertCurrencyComponent
        listCurrency={filteredCurrency}
        convertedValue={convertedValueToNational}
      />
    </ConverterContainer>
  );
}

ConverterPage.propTypes = {
  loadedCurrency: PropTypes.arrayOf(
    PropTypes.shape({
      ccy: PropTypes.string,
      base_ccy: PropTypes.string,
      buy: PropTypes.string,
      sale: PropTypes.string,
    })
  ),
};

export default ConverterPage;
