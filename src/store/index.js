import { createStore, combineReducers, applyMiddleware } from 'redux';
import mathReducer from './reducer/mathReducer';
import userReducer from './reducer/userReducer';
import logger from 'redux-logger';

const store = createStore(
  combineReducers({
    mathReducer,
    userReducer,
  }),
  applyMiddleware(logger),
);

export default store;
