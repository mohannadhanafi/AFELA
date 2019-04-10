import {
  all, call, fork, put, takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';
import { GET_RELATED, SET_RELATED } from '../actions/actionsTypes';
import { setRelated } from '../actions/index';

const getRelatedPostsAPI = async () => axios.get('/api/v1/getRelatedPosts').then(result => result).catch(error => error);

function* getRelatedPostsWorker() {
  try {
    const signOutUser = yield call(getRelatedPostsAPI);
    if (signOutUser.status === 200) {
      const { data } = signOutUser;
      yield put(setRelated(data));
    }
  } catch (error) {
    console.log(error.response);
  }
}
export function* getRelatedPosts() {
  yield takeEvery(GET_RELATED, getRelatedPostsWorker);
}

export default function* rootSaga() {
  yield all([fork(getRelatedPosts)]);
}
