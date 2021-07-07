import {
  createStore,
  applyMiddleware,
  compose,
  Store,
  combineReducers,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork, AllEffect, ForkEffect } from 'redux-saga/effects';

import { StoreState } from '../types';
import currency, { getRequestDataCurrency } from './ducks/currency';

const sagas = [getRequestDataCurrency];

function* rootSagas(): Generator<AllEffect<ForkEffect<void>>> {
  yield all(sagas.map((saga) => fork(saga)));
}

const rootReducer = combineReducers({
  currency,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export default function (): Store<StoreState> {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

  const store = createStore(rootReducer, {}, enhancer);
  sagaMiddleware.run(rootSagas);

  return store;
}
