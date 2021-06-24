import React from 'react';
import PropTypes from 'prop-types';
import { TableCurrencyContainer } from '../../styled';

const ConvertCurrency = ({ listCurrency, convertedValue }) => (
  <TableCurrencyContainer striped bordered hover>
    <thead>
      <tr>
        <th>Converted Value</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {listCurrency.map((itemCurrency) => (
        <tr key={itemCurrency.ccy}>
          <td className="p-lg-3">
            {(convertedValue / itemCurrency.sale).toFixed(3)}
          </td>
          <td className="w-25 p-lg-2">{itemCurrency.ccy}</td>
        </tr>
      ))}
    </tbody>
  </TableCurrencyContainer>
);

ConvertCurrency.propTypes = {
  convertedValue: PropTypes.number,
  listCurrency: PropTypes.arrayOf(
    PropTypes.shape({
      ccy: PropTypes.string,
      base_ccy: PropTypes.string,
      buy: PropTypes.string,
      sale: PropTypes.string,
    })
  ),
};

export default ConvertCurrency;
