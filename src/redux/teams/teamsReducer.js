import TeamsActionTypes from "./teamsTypes";

const INITIAL_STATE = {
  natus_vincere: {
    name: "Natus Vincere",
    country: "UA",
    id: 1,
  },
  astralis: {
    name: "Astralis",
    country: "DK",
    id: 2,
  },
  nip: {
    name: "NIP",
    country: "SE",
    id: 3,
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
