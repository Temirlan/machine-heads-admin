import { call, all, put, takeLatest } from 'redux-saga/effects';
import { withCallback } from 'redux-saga-callback';
import { push } from 'connected-react-router';
import { postsTypes } from './types';
import {
  fetchCreatePost,
  fetchGetPostsFailure,
  fetchGetPostsRequest,
  fetchGetPostsSuccess,
  fetchCreatePostFailure,
  fetchCreatePostRequest,
  fetchCreatePostSuccess,
  fetchGetPosts,
  fetchGetPost,
  fetchGetPostSuccess,
  fetchGetPostFailure,
} from './actions';
import { createPost, getPost, getPosts } from './api';
import { fetchGetAuthors } from '../authors/actions';
import { fetchGetTags } from './../tags/actions';

function* getPostsFlow() {
  try {
    yield put(fetchGetPostsRequest());

    const response = yield call(getPosts);

    yield put(fetchGetPostsSuccess(response));
    yield put(fetchGetAuthors());
    yield put(fetchGetTags());
  } catch (e) {
    yield put(fetchGetPostsFailure(e.response.data));
  }
}

function* createPostFlow({ payload }: ReturnType<typeof fetchCreatePost>) {
  try {
    yield put(fetchCreatePostRequest());
    const res = yield createPost(payload);
    yield put(fetchCreatePostSuccess());
    yield put(fetchGetPosts());

    return res;
  } catch (e) {
    yield put(fetchCreatePostFailure(e.response.data));

    throw e.response.data;
  }
}

function* getPostFlow({ payload }: ReturnType<typeof fetchGetPost>) {
  try {
    yield put(fetchGetPostsRequest());
    const response = yield call(getPost, payload);

    yield put(fetchGetPostSuccess(response));
  } catch (e) {
    yield put(fetchGetPostFailure(e.response.data));
    yield put(push('/posts'));
  }
}

function* postsSaga() {
  yield all([takeLatest(postsTypes.FETCH_GET_POSTS, getPostsFlow)]);
  yield all([takeLatest(postsTypes.FETCH_GET_POST_DETAIL, getPostFlow)]);
  yield all([takeLatest(postsTypes.FETCH_CREATE_POST, withCallback(createPostFlow))]);
}

export default postsSaga;
