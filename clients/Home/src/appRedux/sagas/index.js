import { all } from 'redux-saga/effects';
import related from './related';
import layout from './layout';

export default function* rootSaga(getState) {
  yield all([
    related(),
    layout(),
  ]);
}
