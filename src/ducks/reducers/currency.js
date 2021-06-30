export const LOAD_CURRENCY_SUCCESS =
  'task-currency/currency/LOAD_CURRENCY_SUCCESS';
export const LOAD_CURRENCY = 'task-currency/currency/LOAD_CURRENCY';
export const LOAD_CURRENCY_FAILED =
  'task-currency/currency/LOAD_CURRENCY_FAILED';

const initialState = {
  currency: [],
  isLoadingCurrency: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CURRENCY:
      return {
        ...state,
        isLoadingCurrency: true,
      };
    case LOAD_CURRENCY_SUCCESS:
      return {
        ...state,
        currency: action.payload,
        isLoadingCurrency: false,
      };
    case LOAD_CURRENCY_FAILED:
      return {
        ...state,
        isLoadingCurrency: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getCurrency = () => ({ type: LOAD_CURRENCY });

export const getCurrencySuccess = (payload) => ({
  type: LOAD_CURRENCY_SUCCESS,
  payload,
});

export const getCurrencyError = (payload) => ({
  type: LOAD_CURRENCY_FAILED,
  payload,
});
