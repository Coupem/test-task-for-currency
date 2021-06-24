import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
// import {
//   tableStylesCon,
//   paddingStyleCon,
//   lineStylesCurrency,
//   lineStylesValue,
// } from './styles';
const ConvertCurrency = ({ listCurrency, convertedValue }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Converted Value</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {listCurrency.map((itemCurrency) => (
        <tr key={itemCurrency.ccy}>
          <td>{(convertedValue / itemCurrency.sale).toFixed(3)}</td>
          <td>{itemCurrency.ccy}</td>
        </tr>
      ))}
    </tbody>
  </Table>
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
