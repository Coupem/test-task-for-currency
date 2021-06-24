import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import {
  ValidCourseContainer,
  TitleCourseComponent,
  ButtonBest,
} from '../styled';
import { FavoriteCurrency } from '../components';
import { favoriteCurrenciesKey } from './constants';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../common/utils/loacalStorage';
// import {
//   tableStyles,
//   paddingStyle,
//   listStyles,
//   listStylesEnd,
//   listBuyStyles,
// } from './styles';

const CoursePage = ({ loadedCurrency }) => {
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
      <FavoriteCurrency favoriteCurrencies={favoriteCurrencies} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Buy</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody>
          {filteredCurrency.map((itemCurrency) => (
            <tr key={itemCurrency.ccy}>
              <td>{itemCurrency.ccy}</td>
              <td>{itemCurrency.buy}</td>
              <td>
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
};

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
