import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getFilteredCurrency } from '../../redux/ducks/selectors';
import { TableCurrencyContainer } from '../../styled';
import { CurrencyState } from '../../redux/ducks/types';

interface PropConverter {
  baseCurrency: string;
  convertedValue: number;
}

const ConvertCurrency = ({
  baseCurrency,
  convertedValue,
}: PropConverter): JSX.Element => {
  const filteredCurrency = useSelector(({ currency }: CurrencyState) =>
    getFilteredCurrency(currency, baseCurrency)
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
            <td className="p-lg-3">
              {(convertedValue / parseInt(itemCurrency.sale, 10)).toFixed(3)}
            </td>
            <td className="w-25 p-lg-2">{itemCurrency.ccy}</td>
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
