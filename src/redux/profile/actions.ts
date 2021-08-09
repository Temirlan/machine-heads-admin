import { profileTypes } from './types';
import { ApiError } from './../../interfaces/api';
import { IUser } from './../../interfaces/models';

export const fetchGetProfile = () =>
  <const>{
    type: profileTypes.FETCH_GET_PROFILE,
  };

export const fetchGetProfileRequest = () =>
  <const>{
    type: profileTypes.FETCH_GET_PROFILE_REQUEST,
  };

export const fetchGetProfileSuccess = (payload: IUser) =>
  <const>{
    type: profileTypes.FETCH_GET_PROFILE_SUCCESS,
    payload,
  };

export const fetchGetProfileFailure = (payload: ApiError) =>
  <const>{
    type: profileTypes.FETCH_GET_PROFILE_FAILURE,
    payload,
  };
