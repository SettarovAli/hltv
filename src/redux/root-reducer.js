import { combineReducers } from "redux";

import matchesReducer from "./matches/matchesReducer";
import teamsReducer from "./teams/teamsReducer";
import playersReducer from "./players/playersReducer";

const rootReducer = combineReducers({
  matches: matchesReducer,
  teams: teamsReducer,
  players: playersReducer,
});

export default rootReducer;
