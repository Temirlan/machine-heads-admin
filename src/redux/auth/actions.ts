import { authTypes } from './types';
import { ApiError } from './../../interfaces/api';

export const fetchLogin = (payload: FormData) =>
  <const>{
    type: authTypes.FETCH_GENERATE_TOKEN,
    payload,
  };

export const fetchLoginRequest = () =>
  <const>{
    type: authTypes.FETCH_GENERATE_TOKEN_REQUEST,
  };

export const fetchLoginSuccess = () =>
  <const>{
    type: authTypes.FETCH_GENERATE_TOKEN_SUCCESS,
  };

export const fetchLoginFailure = (payload: ApiError) =>
  <const>{
    type: authTypes.FETCH_GENERATE_TOKEN_FAILURE,
    payload,
  };
