import { ApiError } from '../../interfaces/api';
import { ValueOf } from '../../types';
import * as actions from './actions';
import { authorsTypes } from './types';
import { IAuthor } from './../../interfaces/models';

interface StateReducer {
  pending: boolean;
  error: ApiError | null;
  items: IAuthor[];
}

const initialState: StateReducer = {
  pending: false,
  error: null,
  items: [],
};

const authorsReducer = (state = initialState, action: ReturnType<ValueOf<typeof actions>>) => {
  switch (action.type) {
    case authorsTypes.FETCH_GET_AUTHORS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case authorsTypes.FETCH_GET_AUTHORS_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        items: action.payload,
      };
    case authorsTypes.FETCH_GET_AUTHORS_FAILURE:
      return {
        ...state,
        pending: false,
        items: [],
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authorsReducer;
