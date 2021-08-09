import { all, fork } from 'redux-saga/effects';
import authSaga from './auth/saga';
import profileSaga from './profile/saga';
import postsSaga from './posts/saga';
import authorsSaga from './authors/saga';
import tagsSaga from './tags/saga';

export function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(profileSaga),
    fork(postsSaga),
    fork(authorsSaga),
    fork(tagsSaga),
  ]);
}
