import React, { ChangeEventHandler, useState } from 'react';
import { useSelector } from 'react-redux';

import { InputValuesGroup, ConvertCurrency } from '../components';
import { defaultCurrency, availableCurrency } from '../constants';

import { getConvertToNational } from '../redux/ducks/selectors';
import { RootState } from '../types';

import { ConverterContainer, TitleConverterContainer } from '../styled';

const ConverterPage = (): JSX.Element | null => {
  const [inputValue, setInputValue] = useState<number>(0);
  const [baseCurrency, setBaseCurrency] = useState(defaultCurrency);

  const { isLoadingCurrency: isLoading } = useSelector(
    (state: RootState) => state.currency
  );

  const convertedValueToNational = useSelector((state: RootState) =>
    getConvertToNational(state.currency.currency, baseCurrency, inputValue)
  );

  const handleChangeBaseCurrency: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setBaseCurrency(event.target.value);
  };

  const handleInputValue = (value: string) => {
    if (value.includes('in')) {
      const stringParse = value.split('in')[0];
      const currencyFromString = stringParse.split(' ')[1].substring(0, 3);
      const valueFromString = stringParse.split(' ')[0].substring(1);

      if (availableCurrency.includes(currencyFromString)) {
        setBaseCurrency(currencyFromString.toUpperCase());
        setInputValue(+valueFromString);
      }

      return;
    }

    setInputValue(+value);
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
