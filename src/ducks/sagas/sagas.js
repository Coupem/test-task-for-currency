import { all, fork } from 'redux-saga/effects';
import { getCurrency } from './getCurrency';

const sagas = [getCurrency];

export default function* rootSagas() {
  yield all(sagas.map((saga) => fork(saga)));
}
