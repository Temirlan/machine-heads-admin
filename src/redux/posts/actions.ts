import { postsTypes } from './types';
import { ApiError } from './../../interfaces/api';
import { IPost } from '../../interfaces/models';
import { OnCompleteResult } from 'redux-saga-callback/dist/types/withCallback';
import { IPostDetail } from './../../interfaces/models';

export const fetchGetPosts = () =>
  <const>{
    type: postsTypes.FETCH_GET_POSTS,
  };

export const fetchGetPostsRequest = () =>
  <const>{
    type: postsTypes.FETCH_GET_POSTS_REQUEST,
  };

export const fetchGetPostsSuccess = (payload: IPost[]) =>
  <const>{
    type: postsTypes.FETCH_GET_POSTS_SUCCESS,
    payload,
  };

export const fetchGetPostsFailure = (payload: ApiError) =>
  <const>{
    type: postsTypes.FETCH_GET_POSTS_FAILURE,
    payload,
  };

export const fetchCreatePost = (
  payload: FormData,
  onComplete: (result: OnCompleteResult) => void,
) =>
  <const>{
    type: postsTypes.FETCH_CREATE_POST,
    payload,
    onComplete,
  };

export const fetchCreatePostRequest = () =>
  <const>{
    type: postsTypes.FETCH_CREATE_POST_REQUEST,
  };

export const fetchCreatePostSuccess = () =>
  <const>{
    type: postsTypes.FETCH_CREATE_POST_SUCCESS,
  };

export const fetchCreatePostFailure = (payload: ApiError) =>
  <const>{
    type: postsTypes.FETCH_CREATE_POST_FAILURE,
    payload,
  };

export const fetchGetPost = (id: number) =>
  <const>{
    type: postsTypes.FETCH_GET_POST_DETAIL,
    payload: id,
  };

export const fetchGetPostSuccess = (payload: IPostDetail) =>
  <const>{
    type: postsTypes.FETCH_GET_POST_DETAIL_SUCCESS,
    payload,
  };

export const fetchGetPostFailure = (payload: ApiError) =>
  <const>{
    type: postsTypes.FETCH_GET_POST_DETAIL_FAILURE,
    payload,
  };
