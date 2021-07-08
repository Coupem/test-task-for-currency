// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React, { ChangeEventHandler, useState } from 'react';
import { useSelector } from 'react-redux';

import { InputValuesGroup, ConvertCurrency } from '../components';
import { RootState } from '../types';
import { defaultCurrency } from '../constants';
import { ConverterContainer, TitleConverterContainer } from '../styled';
import { getConvertToNational } from '../redux/ducks/selectors';

const ConverterPage = (): JSX.Element | null => {
  const [inputValue, setInputValue] = useState(0);
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
    setInputValue(parseInt(value, 10));
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
