import React, { useEffect, useState } from 'react';
import { ConverterContainer } from './styledComponets';
import { InputGroupComponent } from './InputGroupComponent';
import { ConvertCurrencyComponent } from './ConvertCurrencyComponent';

function ConverterPage({ loadedCurrency }) {
  const [valueInput, setInputValue] = useState('');
  const [convertedValueToNational, setConvertedValueToNational] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState('UAH');

  const handleChangeBaseCurrency = (event) => {
    setBaseCurrency(event);
  };

  const handleInputValue = (e) => {
    e.target.value = Math.max(0, parseInt(e.target.value, 10))
      .toString()
      .slice(0, 10);
    setInputValue(e.target.value);
  };

  const filteredCurrency = loadedCurrency.filter(
    (itemCurrency) => itemCurrency.ccy !== baseCurrency
  );

  useEffect(() => {
    let value = 1;

    if (baseCurrency === 'BTC') {
      // converted to USD
      const { buy } = loadedCurrency.find((item) => item.ccy === 'USD');
      value = valueInput * buy;
    }

    loadedCurrency.forEach((item) => {
      if (baseCurrency === item.ccy) {
        setConvertedValueToNational(value * valueInput * item.buy);
      }
    });
  });

  return (
    <ConverterContainer>
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

export default ConverterPage;
