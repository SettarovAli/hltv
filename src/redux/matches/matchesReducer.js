import MatchesActionTypes from "./matchesTypes";

// const MATCHES = {
//   future: [
//     {
//       team1: TEAMS.natus_vincere,
//       team2: TEAMS.astralis,
//       date: new Date(2021, 7, 2, 17),
//     },
//     { team1: TEAMS.natus_vincere, team2: TEAMS.astralis, date: new Date() },
//     { team1: TEAMS.natus_vincere, team2: TEAMS.astralis, date: new Date() },
//   ],
// };

const INITIAL_STATE = { future: [] };

const matchesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MatchesActionTypes.ADD_MATCH:
      return { ...state, future: [...state.future, action.payload] };
    default:
      return state;
  }
};
export default matchesReducer;
