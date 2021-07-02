import { all, fork, AllEffect, ForkEffect } from 'redux-saga/effects';
import { getRequestDataCurrency } from './currency';

const sagas = [getRequestDataCurrency];

export default function* rootSagas(): Generator<AllEffect<ForkEffect<void>>> {
  yield all(sagas.map((saga) => fork(saga)));
}
