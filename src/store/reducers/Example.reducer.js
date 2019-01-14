import { ACTION_CONSTANT } from '../actions/ActionTypes';

const initialState = [];

export default (state = initialState, action) => {
  const { type } = action;
  const reducer = {
    [ACTION_CONSTANT]: {
      ...state,
      // new state value
    },
  };

  return reducer[type] || { ...state };
};
