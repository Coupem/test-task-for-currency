import { all, fork, AllEffect, ForkEffect } from 'redux-saga/effects';
import { getCurrency } from './getCurrency';

const sagas = [getCurrency];

export default function* rootSagas(): Generator<AllEffect<ForkEffect<void>>> {
  yield all(sagas.map((saga) => fork(saga)));
}
