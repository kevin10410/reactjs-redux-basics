import * as userActions from './userActions';

const initialUserState = {
  name: 'OTree',
  age: 18,
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'SET_NAME_FULFILLED':
      state = {
        ...state,
        name: action.payload,
      };
      break;
    case 'SET_AGE':
      state = {
        ...state,
        age: action.payload,
      }
      break;
  }
  return state;
}

export default userReducer;
