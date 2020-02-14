import * as userActions from './userActions';

const initialUserState = {
  name: 'OTree',
  age: 18,
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      state = {
        ...state,
        name: action.name,
      };
      break;
    case 'SET_AGE':
      state = {
        ...state,
        age: action.age,
      }
      break;
  }
  return state;
}

export default userReducer;
