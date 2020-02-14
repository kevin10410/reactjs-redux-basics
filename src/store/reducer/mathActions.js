export const ADD = (state, payload) => ({
  ...state,
  result: state.result + payload,
  lastValues: [...state.lastValues, payload],
});

export const SUBTRACT = (state, payload) => ({
  ...state,
  result: state.result - payload,
  lastValues: [...state.lastValues, payload],
});
