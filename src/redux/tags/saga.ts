import { call, all, put, takeLatest } from 'redux-saga/effects';
import { tagsTypes } from './types';
import { fetchGetTagsFailure, fetchGetTagsRequest, fetchGetTagsSuccess } from './actions';
import { getTags } from './api';

function* getTagsFlow() {
  try {
    yield put(fetchGetTagsRequest());

    const response = yield call(getTags);

    yield put(fetchGetTagsSuccess(response));
  } catch (e) {
    yield put(fetchGetTagsFailure(e.response.data));
  }
}

function* tagsSaga() {
  yield all([takeLatest(tagsTypes.FETCH_GET_TAGS, getTagsFlow)]);
}

export default tagsSaga;
