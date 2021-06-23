import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import {
  ValidCourseContainer,
  TitleCourseComponent,
  ButtonBest,
} from './styledComponents';
import FavoriteCurrencyComponent from './FavoriteCurrencyComponent';
import { favoriteCurrenciesKey } from '../constants';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../../../common/utils/loacalStorage';
import {
  tableStyles,
  paddingStyle,
  listStyles,
  listStylesEnd,
  listBuyStyles,
} from './styles';

function CoursePage({ loadedCurrency }) {
  const filteredCurrency = loadedCurrency.filter((item) => item.ccy !== 'UAH');
  const [favoriteCurrencies, setFavoriteCurrencies] = useState({});

  const handleClickSave = ({ ccy, buy, sale }) => {
    if (favoriteCurrencies[ccy]) {
      return;
    }

    const updatedCurrencies = {
      ...favoriteCurrencies,
      [ccy]: { ccy, buy, sale },
    };

    setFavoriteCurrencies(updatedCurrencies);
    setLocalStorageItem(favoriteCurrenciesKey, updatedCurrencies);
  };

  useEffect(() => {
    const currencies = getLocalStorageItem(favoriteCurrenciesKey);

    setFavoriteCurrencies(currencies || {});
  }, []);

  return (
    <ValidCourseContainer>
      <TitleCourseComponent>Valid Course:</TitleCourseComponent>
      <FavoriteCurrencyComponent favoriteCurrencies={favoriteCurrencies} />
      <Table striped bordered hover style={tableStyles}>
        <thead>
          <tr>
            <th style={paddingStyle}>Currency</th>
            <th style={paddingStyle}>Buy</th>
            <th style={paddingStyle}>Sale</th>
          </tr>
        </thead>
        <tbody>
          {filteredCurrency.map((itemCurrency) => (
            <tr key={itemCurrency.ccy}>
              <td style={listStyles}>{itemCurrency.ccy}</td>
              <td style={listBuyStyles}>{itemCurrency.buy}</td>
              <td style={listStylesEnd}>
                {itemCurrency.sale}
                <ButtonBest
                  onClick={() => handleClickSave(itemCurrency)}
                  variant="dark"
                >
                  best
                </ButtonBest>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ValidCourseContainer>
  );
}

CoursePage.propTypes = {
  loadedCurrency: PropTypes.arrayOf(
    PropTypes.shape({
      ccy: PropTypes.string,
      base_ccy: PropTypes.string,
      buy: PropTypes.string,
      sale: PropTypes.string,
    })
  ),
};

export default CoursePage;
