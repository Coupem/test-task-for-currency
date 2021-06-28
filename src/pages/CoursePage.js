import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { favoriteCurrenciesKey } from '../constants';
import {
  ValidCourseContainer,
  TitleCourseComponent,
  ButtonBest,
  ListTableCurrency,
} from '../styled';
import { FavoriteCurrency } from '../components';

import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../utils/loacalStorage';

const CoursePage = ({ loadedCurrency, isLoading }) => {
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

  if (isLoading) {
    return null;
  }

  return (
    <ValidCourseContainer>
      <TitleCourseComponent>Valid Course:</TitleCourseComponent>
      <FavoriteCurrency favoriteCurrencies={favoriteCurrencies} />
      <ListTableCurrency striped bordered hover className="p-lg-3 ">
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
              <td className="col-3 w-25">{itemCurrency.ccy}</td>
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
      </ListTableCurrency>
    </ValidCourseContainer>
  );
};

CoursePage.propTypes = {
  isLoading: PropTypes.bool,
  loadedCurrency: PropTypes.arrayOf(
    PropTypes.shape({
      ccy: PropTypes.string,
      baseCcy: PropTypes.string,
      buy: PropTypes.string,
      sale: PropTypes.string,
    })
  ),
};

export default CoursePage;
