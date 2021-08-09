import { authorsTypes } from './types';
import { ApiError } from './../../interfaces/api';
import { IAuthor } from './../../interfaces/models';

export const fetchGetAuthors = () =>
  <const>{
    type: authorsTypes.FETCH_GET_AUTHORS,
  };

export const fetchGetAuthorsRequest = () =>
  <const>{
    type: authorsTypes.FETCH_GET_AUTHORS_REQUEST,
  };

export const fetchGetAuthorsSuccess = (payload: IAuthor[]) =>
  <const>{
    type: authorsTypes.FETCH_GET_AUTHORS_SUCCESS,
    payload,
  };

export const fetchGetAuthorsFailure = (payload: ApiError) =>
  <const>{
    type: authorsTypes.FETCH_GET_AUTHORS_FAILURE,
    payload,
  };
