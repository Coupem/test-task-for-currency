import { createStore, applyMiddleware, compose, Action } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/sagas';
import rootReducer from './reducers/reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export default function () {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
      : compose;

  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
  const store = createStore(rootReducer, {}, enhancer);
  sagaMiddleware.run(rootSaga);

  return store;
}
