import { tagsTypes } from './types';
import { ApiError } from './../../interfaces/api';
import { ITag } from '../../interfaces/models';

export const fetchGetTags = () =>
  <const>{
    type: tagsTypes.FETCH_GET_TAGS,
  };

export const fetchGetTagsRequest = () =>
  <const>{
    type: tagsTypes.FETCH_GET_TAGS_REQUEST,
  };

export const fetchGetTagsSuccess = (payload: ITag[]) =>
  <const>{
    type: tagsTypes.FETCH_GET_TAGS_SUCCESS,
    payload,
  };

export const fetchGetTagsFailure = (payload: ApiError) =>
  <const>{
    type: tagsTypes.FETCH_GET_TAGS_FAILURE,
    payload,
  };
