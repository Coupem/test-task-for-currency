// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { FavoriteCurrency } from '../components';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../utils/loacalStorage';
import { favoriteCurrenciesKey, defaultCurrency } from '../constants';
import {
  ValidCourseContainer,
  TitleCourseComponent,
  ButtonBest,
  ListTableCurrency,
} from '../styled';
import { Currency, RootState, FavoriteState } from '../types';

const CoursePage = (): JSX.Element | null => {
  const [favoriteCurrencies, setFavoriteCurrencies] = useState({});

  const { isLoadingCurrency: isLoading, currency: loadedCurrency } =
    useSelector((state: RootState) => state.currency);

  const handleClickSave = ({ ccy, buy, sale }: FavoriteState) => {
    if (Object.prototype.hasOwnProperty.call(favoriteCurrencies, ccy)) {
      return;
    }

    const updatedCurrencies = {
      ...favoriteCurrencies,
      [ccy]: { ccy, buy, sale },
    };

    setFavoriteCurrencies(updatedCurrencies);

    setLocalStorageItem(favoriteCurrenciesKey, updatedCurrencies);
  };

  const filteredCurrency = loadedCurrency.filter(
    (item: Currency) => item.ccy !== defaultCurrency
  );

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
                <ButtonBest onClick={() => handleClickSave(itemCurrency)}>
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

CoursePage.propTypes = {};

export default CoursePage;
