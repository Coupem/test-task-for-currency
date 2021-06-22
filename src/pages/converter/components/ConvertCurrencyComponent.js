import React from 'react';
import { Table } from 'react-bootstrap';

export function ConvertCurrencyComponent({ listCurrency, convertedValue }) {
  return (
    <Table
      className="mt-sm-5 w-75 m-auto"
      striped
      bordered
      hover
      variant="primary"
    >
      <thead>
        <tr>
          <th>Converted Value</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {listCurrency.map((item) => (
          <tr key={item.ccy}>
            <td>{(convertedValue / item.sale).toFixed(3)}</td>
            <td className="w-50">{item.ccy}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
