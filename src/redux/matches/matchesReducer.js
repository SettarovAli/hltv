import MatchesActionTypes from "./matchesTypes";

const INITIAL_STATE = {
  isFetching: false,
  matches: { active: {}, future: {} },
  errorMessage: "",
};

const matchesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MatchesActionTypes.FETCH_MATCHES_START:
      return {
        ...state,
        isFetching: true,
      };
    case MatchesActionTypes.FETCH_MATCHES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        matches: { ...state.matches, future: action.payload },
      };
    case MatchesActionTypes.FETCH_MATCHES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
export default matchesReducer;
