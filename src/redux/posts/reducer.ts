import { ApiError } from '../../interfaces/api';
import { ValueOf } from '../../types';
import * as actions from './actions';
import { postsTypes } from './types';
import { IPost, IPostDetail } from './../../interfaces/models';

interface StateReducer {
  pending: boolean;
  isCreatePost: boolean;
  error: ApiError | null;
  items: IPost[];
  postDetail: IPostDetail | null;
}

const initialState: StateReducer = {
  pending: false,
  isCreatePost: false,
  error: null,
  items: [],
  postDetail: null,
};

const postsReducer = (state = initialState, action: ReturnType<ValueOf<typeof actions>>) => {
  switch (action.type) {
    case postsTypes.FETCH_GET_POSTS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case postsTypes.FETCH_GET_POSTS_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        items: action.payload,
      };
    case postsTypes.FETCH_GET_POSTS_FAILURE:
      return {
        ...state,
        pending: false,
        items: [],
        error: action.payload,
      };
    case postsTypes.FETCH_CREATE_POST_REQUEST:
      return {
        ...state,
        isCreatePost: true,
      };
    case postsTypes.FETCH_CREATE_POST_SUCCESS:
      return {
        ...state,
        isCreatePost: false,
        error: null,
      };
    case postsTypes.FETCH_CREATE_POST_FAILURE:
      return {
        ...state,
        isCreatePost: false,
        error: action.payload,
      };
    case postsTypes.FETCH_GET_POST_DETAIL_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        postDetail: action.payload,
      };
    case postsTypes.FETCH_GET_POST_DETAIL_FAILURE:
      return {
        ...state,
        pending: false,
        postDetail: null,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default postsReducer;
