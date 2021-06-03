import MatchesActionTypes from "./matchesTypes";

import { removeFutureMatch } from "./matchesUtils";

const INITIAL_STATE = { future: [] };

const matchesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MatchesActionTypes.ADD_MATCH:
      return { ...state, future: [...state.future, action.payload] };
    case MatchesActionTypes.REMOVE_MATCH:
      return {
        ...state,
        future: removeFutureMatch(state.future, action.payload),
      };
    default:
      return state;
  }
};
export default matchesReducer;
