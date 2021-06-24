import React from 'react';
import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import {
  FavoriteCurrencyWrapper,
  NoFavoriteCurrency,
  TitleFavoriteCurrency,
  ListGroupContainer,
} from '../../styled';

const FavoriteCurrency = ({ favoriteCurrencies }) => (
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
