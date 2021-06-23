import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import {
  tableStylesCon,
  paddingStyleCon,
  lineStylesCurrency,
  lineStylesValue,
} from './styles';

function ConvertCurrencyComponent({ listCurrency, convertedValue }) {
  return (
    <Table striped bordered hover style={tableStylesCon}>
      <thead>
        <tr>
          <th style={paddingStyleCon}>Converted Value</th>
          <th style={paddingStyleCon}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {listCurrency.map((itemCurrency) => (
          <tr key={itemCurrency.ccy}>
            <td style={lineStylesValue}>
              {(convertedValue / itemCurrency.sale).toFixed(3)}
            </td>
            <td style={lineStylesCurrency}>{itemCurrency.ccy}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

ConvertCurrencyComponent.propTypes = {
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

export default ConvertCurrencyComponent;
