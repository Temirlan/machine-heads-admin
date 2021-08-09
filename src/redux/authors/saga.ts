import { call, all, put, takeLatest } from 'redux-saga/effects';
import { authorsTypes } from './types';
import { fetchGetAuthorsFailure, fetchGetAuthorsRequest, fetchGetAuthorsSuccess } from './actions';
import { getAuthors } from './api';

function* getAuthorsFlow() {
  try {
    yield put(fetchGetAuthorsRequest());

    const response = yield call(getAuthors);

    yield put(fetchGetAuthorsSuccess(response));
  } catch (e) {
    yield put(fetchGetAuthorsFailure(e.response.data));
  }
}

function* authorsSaga() {
  yield all([takeLatest(authorsTypes.FETCH_GET_AUTHORS, getAuthorsFlow)]);
}

export default authorsSaga;
