import { ApiError } from '../../interfaces/api';
import { ValueOf } from '../../types';
import * as actions from './actions';
import { tagsTypes } from './types';
import { ITag } from './../../interfaces/models';

interface StateReducer {
  pending: boolean;
  error: ApiError | null;
  items: ITag[];
}

const initialState: StateReducer = {
  pending: false,
  error: null,
  items: [],
};

const tagsReducer = (state = initialState, action: ReturnType<ValueOf<typeof actions>>) => {
  switch (action.type) {
    case tagsTypes.FETCH_GET_TAGS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case tagsTypes.FETCH_GET_TAGS_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        items: action.payload,
      };
    case tagsTypes.FETCH_GET_TAGS_FAILURE:
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

export default tagsReducer;
