import { createStore, combineReducers, applyMiddleware } from 'redux';
import mathReducer from './reducer/mathReducer';
import userReducer from './reducer/userReducer';

const store = createStore(
  combineReducers({
    mathReducer,
    userReducer,
  }),
);

store.subscribe(() => {
  console.log('store update', store.getState());
});

export default store;
