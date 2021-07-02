import { combineReducers } from 'redux';
import currency from './currency';

export default combineReducers({
  responseData: currency,
});
