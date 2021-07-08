// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React from 'react';
import PropTypes from 'prop-types';

import { ListGroup } from 'react-bootstrap';
import {
  FavoriteCurrencyWrapper,
  NoFavoriteCurrency,
  TitleFavoriteCurrency,
  ListGroupContainer,
} from '../styled';
import { FavoriteCurrencyProp } from '../types';

const FavoriteCurrency = ({
  favoriteCurrencies,
}: FavoriteCurrencyProp): JSX.Element => (
  <FavoriteCurrencyWrapper>
    <TitleFavoriteCurrency>Favorite Currency:</TitleFavoriteCurrency>

    {Object.values(favoriteCurrencies).length === 0 && (
      <NoFavoriteCurrency>NO CURRENCY</NoFavoriteCurrency>
    )}

    {Object.values(favoriteCurrencies).map((breakpoint) => (
      <ListGroupContainer key={breakpoint.ccy}>
        <ListGroup.Item>Currency: {breakpoint.ccy}</ListGroup.Item>
        <ListGroup.Item>Buy: {breakpoint.buy}</ListGroup.Item>
        <ListGroup.Item>Sale: {breakpoint.sale}</ListGroup.Item>
      </ListGroupContainer>
    ))}
  </FavoriteCurrencyWrapper>
);

FavoriteCurrency.propTypes = {
  favoriteCurrencies: PropTypes.shape({
    ccy: PropTypes.string,
    buy: PropTypes.string,
    sale: PropTypes.string,
  }),
};

export default FavoriteCurrency;
