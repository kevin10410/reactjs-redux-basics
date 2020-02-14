import * as mathActions from './mathActions';

const initialMathState = {
  result: 1,
  lastValues: [],
};

const mathReducer = (state = initialMathState, action) => action.type
  && action.type in mathActions
  ? actionsDict[action.type](state, action.payload)
  : state;

export default mathReducer;
