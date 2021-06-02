import TeamsActionTypes from "./teamsTypes";

const INITIAL_STATE = {
  natus_vincere: {
    name: "Natus Vincere",
    country: "UA",
  },
  astralis: {
    name: "Astralis",
    country: "DK",
  },
  nip: {
    name: "NIP",
    country: "SE",
  },
};

const teamsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TeamsActionTypes.FETCH_TEAM:
      return { ...state };
    default:
      return state;
  }
};

export default teamsReducer;
