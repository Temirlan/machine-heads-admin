import { call, all, put, takeLatest, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { profileTypes } from './types';
import { fetchGetProfileFailure, fetchGetProfileRequest, fetchGetProfileSuccess } from './actions';
import { getProfile } from './api';
import { RootState } from '../rootReducer';

function* getProfileFlow() {
  try {
    yield put(fetchGetProfileRequest());

    const response = yield call(getProfile);

    yield put(fetchGetProfileSuccess(response));
    const pathname = yield select((state: RootState) => state.router.location.pathname);

    if (pathname === '/') {
      yield put(push('/posts'));
    }
  } catch (e) {
    yield put(fetchGetProfileFailure(e.response.data));
    yield put(push('/'));
  }
}

function* profileSaga() {
  yield all([takeLatest(profileTypes.FETCH_GET_PROFILE, getProfileFlow)]);
}

export default profileSaga;
