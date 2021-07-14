import currencyReducer, {
  initialState,
  getCurrencySuccess,
} from '../../redux/ducks/currency';

it('Test CurrencyReducer', () => {
  const action = getCurrencySuccess([
    { baseCcy: 'string', buy: 'string', ccy: 'string', sale: 'string' },
  ]);

  const newState = currencyReducer(initialState, action);
  expect(newState.currency).toEqual(action.payload);
});
