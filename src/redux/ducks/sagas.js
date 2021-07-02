import { all, fork } from 'redux-saga/effects';
import { getRequestDataCurrency } from './currency';

const sagas = [getRequestDataCurrency];

export default function* rootSagas() {
  yield all(sagas.map((saga) => fork(saga)));
}
