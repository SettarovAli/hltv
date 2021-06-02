import { combineReducers } from "redux";

import matchesReducer from "./matches/matchesReducer";
import teamsReducer from "./teams/teamsReducer";

const rootReducer = combineReducers({
  matches: matchesReducer,
  teams: teamsReducer,
});

export default rootReducer;
