import {
  all, call, fork, put, takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';
import { GET_HOME_LAYOUT, SET_HOME_LAYOUT } from '../actions/actionsTypes';
import { getHomeLayout, setHomeLayout } from '../actions/index';

const getHomeLayoutAPI = async () => axios.get('/api/v1/layout/homePage').then(result => result).catch(error => error);

function* getHomeLayoutWroker() {
  try {
    const homePageLayoutsResult = yield call(getHomeLayoutAPI);
    if (homePageLayoutsResult.status === 200) {
      const { data } = homePageLayoutsResult;
      yield put(setHomeLayout(data));
    }
  } catch (error) {
    console.log(error.response);
  }
}
export function* homeLayout() {
  yield takeEvery(GET_HOME_LAYOUT, getHomeLayoutWroker);
}

export default function* layout() {
  yield all([fork(homeLayout)]);
}
