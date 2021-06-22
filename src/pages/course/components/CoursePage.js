import React, { useState } from 'react';
import { Table, Badge } from 'react-bootstrap';
import { ValidCourseContainer } from './styledComponents';

function CoursePage({ loadedCurrency }) {
  const [bestCurrency, setBestCurrency] = useState([]);
  const filteredCurrency = loadedCurrency.filter((item) => item.ccy !== 'UAH');

  const handleClickSave = (selectedCurrency) => {
    setBestCurrency([{ ...selectedCurrency }]);
  };

  return (
    <ValidCourseContainer>
      <Table
        className="mt-5 w-75 m-auto"
        striped
        bordered
        hover
        variant="primary"
      >
        <thead>
          <tr>
            <th>Currency</th>
            <th>Buy</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody>
          {filteredCurrency.map((item) => (
            <tr key={item.ccy}>
              <td>{item.ccy}</td>
              <td>{item.buy}</td>
              <td>
                {item.sale}
                <Badge onClick={() => handleClickSave(item)} variant="dark">
                  save
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ValidCourseContainer>
  );
}

export default CoursePage;
