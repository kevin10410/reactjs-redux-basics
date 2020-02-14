import * as userActions from './userActions';

const initialUserState = {
  name: 'OTree',
  age: 18,
};

const userReducer = (state = initialUserState, action) => action.type
  && action.type in userActions
  ? userActions[action.type](state, action.payload)
  : state;

export default userReducer;
