import TeamsActionTypes from "./teamsTypes";

const INITIAL_STATE = {
  isFetching: false,
  teams: null,
  errorMessage: "",
};

const teamsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TeamsActionTypes.FETCH_TEAMS_START:
      return {
        ...state,
        isFetching: true,
      };
    case TeamsActionTypes.FETCH_TEAMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        teams: action.payload,
      };
    case TeamsActionTypes.FETCH_TEAMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case TeamsActionTypes.DELETE_TEAM_FAILURE:
    case TeamsActionTypes.CHOOSE_TEAM_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default teamsReducer;
