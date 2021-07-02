import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { ConverterContainer, TitleConverterContainer } from '../styled';
import { InputValuesGroup, ConvertCurrency } from '../components';
import { defaultCurrency } from '../constants';
import { getConvertToNational } from '../redux/ducks/selectors';

const ConverterPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [baseCurrency, setBaseCurrency] = useState(defaultCurrency);

  const { isLoadingCurrency: isLoading } = useSelector(
    ({ responseData }) => responseData
  );
  const convertedValueToNational = useSelector(
    ({ responseData: { currency } }) =>
      getConvertToNational(currency, baseCurrency, inputValue)
  );

  const handleChangeBaseCurrency = (currency) => {
    setBaseCurrency(currency.target.value);
  };

  const handleInputValue = (value) => {
    setInputValue(value);
  };

  if (isLoading) {
    return null;
  }

  return (
    <ConverterContainer>
      <TitleConverterContainer>Converter:</TitleConverterContainer>
      <InputValuesGroup
        baseCurrency={baseCurrency}
        handleChangeCurrency={handleChangeBaseCurrency}
        handleChangeInput={handleInputValue}
        inputValue={inputValue}
      />
      <ConvertCurrency
        baseCurrency={baseCurrency}
        convertedValue={convertedValueToNational}
      />
    </ConverterContainer>
  );
};

ConverterPage.propTypes = {};

export default ConverterPage;
