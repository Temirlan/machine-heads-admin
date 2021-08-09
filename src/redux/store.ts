import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import { rootSaga } from './rootSaga';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
