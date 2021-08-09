import { call, all, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import Cookies from 'js-cookie';
import { authTypes } from './types';
import { fetchLoginFailure, fetchLoginSuccess, fetchLoginRequest, fetchLogin } from './actions';
import { tokenGenerate } from './api';
import { fetchGetProfile } from './../profile/actions';

function* loginFlow({ payload }: ReturnType<typeof fetchLogin>) {
  try {
    yield put(fetchLoginRequest());

    const response = yield call(tokenGenerate, payload);

    Cookies.set('accessToken', response.access_token, {
      expires: new Date(response.access_expired_at * 1000),
    });
    Cookies.set('refreshToken', response.refresh_token, {
      expires: new Date(response.refresh_expired_at * 1000),
    });

    yield put(fetchLoginSuccess());
    yield put(push('/posts'));
    yield put(fetchGetProfile());
  } catch (e) {
    yield put(fetchLoginFailure(e.response.data));
  }
}

function* authSaga() {
  yield all([takeLatest(authTypes.FETCH_GENERATE_TOKEN, loginFlow)]);
}

export default authSaga;
