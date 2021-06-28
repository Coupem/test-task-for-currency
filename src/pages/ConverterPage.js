import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ConverterContainer, TitleConverterContainer } from '../styled';
import { InputValuesGroup, ConvertCurrency } from '../components';
import { defaultConvertedValue, defaultCurrency } from '../constants';

const ConverterPage = ({ loadedCurrency }) => {
  const [inputValue, setInputValue] = useState('');
  const [convertedValueToNational, setConvertedValueToNational] = useState(
    defaultConvertedValue
  );
  const [baseCurrency, setBaseCurrency] = useState(defaultCurrency);

  const handleChangeBaseCurrency = (currency) => {
    setBaseCurrency(currency);
  };

  const handleInputValue = (eventInput) => {
    const currentInputValue = eventInput.target.value;

    if (currentInputValue.length >= 10) {
      return;
    }

    setInputValue(currentInputValue);
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
      countValue = inputValue * buy;
    }

    loadedCurrency.forEach((itemCurrency) => {
      if (baseCurrency === itemCurrency.ccy) {
        setConvertedValueToNational(countValue * inputValue * itemCurrency.buy);
      }
    });
  });

  return (
    <ConverterContainer>
      <TitleConverterContainer>Converter:</TitleConverterContainer>
      <InputValuesGroup
        loadedCurrency={loadedCurrency}
        baseCurrency={baseCurrency}
        handleChangeCurrency={handleChangeBaseCurrency}
        handleChangeInput={handleInputValue}
        inputValue={inputValue}
      />
      <ConvertCurrency
        listCurrency={filteredCurrency}
        convertedValue={convertedValueToNational}
      />
    </ConverterContainer>
  );
};

ConverterPage.propTypes = {
  loadedCurrency: PropTypes.arrayOf(
    PropTypes.shape({
      ccy: PropTypes.string,
      baseCcy: PropTypes.string,
      buy: PropTypes.string,
      sale: PropTypes.string,
    })
  ),
};

export default ConverterPage;
