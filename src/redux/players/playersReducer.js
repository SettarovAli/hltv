import PlayersActionTypes from "./playersTypes";

const INITIAL_STATE = {
  isFetching: false,
  players: {},
  errorMessage: "",
};

const playersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlayersActionTypes.FETCH_PLAYERS_START:
      return {
        ...state,
        isFetching: true,
      };
    case PlayersActionTypes.FETCH_PLAYERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        players: action.payload,
      };
    case PlayersActionTypes.FETCH_PLAYERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case PlayersActionTypes.DELETE_PLAYER_FAILURE:
    case PlayersActionTypes.DELETE_PLAYER_FROM_OTHER_TEAM_FAILURE:
    case PlayersActionTypes.FETCH_CURRENT_TEAM_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default playersReducer;
