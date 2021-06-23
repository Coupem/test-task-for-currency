import React from 'react';
import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import {
  FavoriteCurrencyComponentWrapper,
  NoFavoriteCurrency,
  TitleFavoriteCurrency,
} from './styledComponents';
import { listGroupStyles } from './styles';

function FavoriteCurrencyComponent({ favoriteCurrencies }) {
  return (
    <FavoriteCurrencyComponentWrapper>
      <TitleFavoriteCurrency>Favorite Currency:</TitleFavoriteCurrency>

      {Object.values(favoriteCurrencies).length === 0 && (
        <NoFavoriteCurrency>NO CURRENCY</NoFavoriteCurrency>
      )}

      {Object.values(favoriteCurrencies).map((breakpoint) => (
        <ListGroup key={breakpoint.ccy} style={listGroupStyles}>
          <ListGroup.Item>Currency: {breakpoint.ccy}</ListGroup.Item>
          <ListGroup.Item>Buy: {breakpoint.buy}</ListGroup.Item>
          <ListGroup.Item>Sale: {breakpoint.sale}</ListGroup.Item>
        </ListGroup>
      ))}
    </FavoriteCurrencyComponentWrapper>
  );
}

FavoriteCurrencyComponent.propTypes = {
  favoriteCurrencies: PropTypes.shape({
    ccy: PropTypes.string,
    buy: PropTypes.string,
    sale: PropTypes.string,
  }),
};

export default FavoriteCurrencyComponent;
