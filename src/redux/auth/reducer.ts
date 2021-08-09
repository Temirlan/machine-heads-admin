import { ApiError } from '../../interfaces/api';
import { ValueOf } from '../../types';
import * as actions from './actions';
import { authTypes } from './types';

interface StateReducer {
  pending: boolean;
  error: ApiError | null;
}

const initialState: StateReducer = {
  pending: false,
  error: null,
};

const authReducer = (state = initialState, action: ReturnType<ValueOf<typeof actions>>) => {
  switch (action.type) {
    case authTypes.FETCH_GENERATE_TOKEN_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case authTypes.FETCH_GENERATE_TOKEN_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
      };
    case authTypes.FETCH_GENERATE_TOKEN_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
