import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { string } from 'prop-types';
import { ConverterContainer, TitleConverterContainer } from '../styled';
import { InputValuesGroup, ConvertCurrency } from '../components';
import { defaultCurrency } from '../constants';
import { getConvertToNational } from '../redux/ducks/selectors';
import { Currency, CurrencyState } from '../redux/ducks/types';

const ConverterPage = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [baseCurrency, setBaseCurrency] = useState(defaultCurrency);

  const { isLoadingCurrency: isLoading } = useSelector(
    (currency: CurrencyState) => currency
  );
  const convertedValueToNational = useSelector(({ currency }: CurrencyState) =>
    getConvertToNational(currency, baseCurrency, inputValue)
  );

  const handleChangeBaseCurrency = (
    currency: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setBaseCurrency(currency.target.value);
  };

  const handleInputValue = (value: string) => {
    setInputValue(value);
  };

  if (isLoading) {
    return null as any;
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
