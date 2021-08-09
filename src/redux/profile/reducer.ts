import { ApiError } from '../../interfaces/api';
import { ValueOf } from '../../types';
import * as actions from './actions';
import { profileTypes } from './types';
import { IUser } from './../../interfaces/models';

interface StateReducer {
  pending: boolean;
  error: ApiError | null;
  user: IUser | null;
}

const initialState: StateReducer = {
  pending: false,
  error: null,
  user: null,
};

const profileReducer = (state = initialState, action: ReturnType<ValueOf<typeof actions>>) => {
  switch (action.type) {
    case profileTypes.FETCH_GET_PROFILE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case profileTypes.FETCH_GET_PROFILE_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        user: action.payload,
      };
    case profileTypes.FETCH_GET_PROFILE_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload,
        user: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default profileReducer;
