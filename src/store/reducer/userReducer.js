const initialUserState = {
  name: 'OTree',
  age: 18,
};

const setNameActionHandler = (state, payload) => ({
  ...state,
  name: payload,
});

const setAgeActionHandler = (state, payload) => ({
  ...state,
  age: payload,
});

const userReducer = (state = initialUserState, action) => {
  const actionsDict = {
    SET_NAME: setNameActionHandler,
    SET_AGE: setAgeActionHandler,
  };

  return action.type && action.type in actionsDict
    ? actionsDict[action.type](state, action.payload)
    : state;
}

export default userReducer;
