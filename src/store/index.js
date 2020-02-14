import { createStore, combineReducers, applyMiddleware } from 'redux';
import mathReducer from './reducer/mathReducer';
import userReducer from './reducer/userReducer';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

const store = createStore(
  combineReducers({
    mathReducer,
    userReducer,
  }),
  applyMiddleware(logger, promise),
);

export default store;
