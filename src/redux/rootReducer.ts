import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

import authReducer from './auth/reducer';
import profileReducer from './profile/reducer';
import postsReducer from './posts/reducer';
import authorsReducer from './authors/reducer';
import tagsReducer from './tags/reducer';

const rootReducer = (history: History<unknown>) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    profile: profileReducer,
    posts: postsReducer,
    authors: authorsReducer,
    tags: tagsReducer,
  });

export type RootState = ReturnType<ReturnType<typeof rootReducer>>;

export default rootReducer;
