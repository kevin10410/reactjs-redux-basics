const initialMathState = {
  result: 1,
  lastValues: [],
};

const addActionHandler = (state, payload) => ({
  ...state,
  result: state.result + payload,
  lastValues: [...state.lastValues, payload],
});

const subtractActionHandler = (state, payload) => ({
  ...state,
  result: state.result - payload,
  lastValues: [...state.lastValues, payload],
});

const mathReducer = (state = initialMathState, action) => {
  const actionsDict = {
    ADD: addActionHandler,
    SUBTRACT: subtractActionHandler,
  };

  return action.type && action.type in actionsDict
    ? actionsDict[action.type](state, action.payload)
    : state;
}

export default mathReducer;
