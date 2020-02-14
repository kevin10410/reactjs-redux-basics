import { createStore, combineReducers, applyMiddleware } from 'redux';
import mathReducer from './reducer/mathReducer';
import userReducer from './reducer/userReducer';

const logger = (store) => (next) => (action) => {
  console.log('middlerware', action);
  next(action);
};

const store = createStore(
  combineReducers({
    mathReducer,
    userReducer,
  }),
  {},
  applyMiddleware(logger),
);

store.subscribe(() => {
  console.log('store update', store.getState());
});

export default store;
