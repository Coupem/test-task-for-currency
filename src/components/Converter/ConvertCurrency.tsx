import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getFilteredCurrency } from '../../redux/ducks/selectors';
import { TableCurrencyContainer } from '../../styled';
import { RootState, PropConverter } from '../../types';

const ConvertCurrency = ({
  baseCurrency,
  convertedValue,
}: PropConverter): JSX.Element => {
  const filteredCurrency = useSelector((state: RootState) =>
    getFilteredCurrency(state.currency.currency, baseCurrency)
  );

  return (
    <TableCurrencyContainer striped bordered hover>
      <thead>
        <tr>
          <th>Converted Value</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {filteredCurrency.map((itemCurrency) => (
          <tr key={itemCurrency.ccy}>
            <td id="convertedValue" className="p-lg-3">
              {(convertedValue / parseFloat(itemCurrency.sale)).toFixed(3)}
            </td>
            <td id="emblem" className="w-25 p-lg-2">
              {itemCurrency.ccy}
            </td>
          </tr>
        ))}
      </tbody>
    </TableCurrencyContainer>
  );
};

ConvertCurrency.propTypes = {
  baseCurrency: PropTypes.string,
  convertedValue: PropTypes.number,
};

export default ConvertCurrency;
