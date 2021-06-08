import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import toast from "react-hot-toast";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import TeamOptions from "../team-options/TeamOptions";
import PlayerOptions from "../player-options/PlayerOptions";

import { selectTeamsForPreview } from "../../redux/teams/teamsSelectors";
import { selectPlayersForPreview } from "../../redux/players/playersSelectors";
import { chooseTeamStart } from "../../redux/teams/teamsActions";

import {
  ChooseTeamContainer,
  ChooseTeamContainerInner,
  FormContainer,
  AlertContainer,
} from "./ChooseTeamStyles";

const ChooseTeam = ({ teams, players, chooseTeamStart }) => {
  const [team, setTeam] = useState("");
  const [player, setPlayer] = useState("");
  const [alert, setAlert] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!team || !player) {
      setAlert(true);
    } else {
      chooseTeamStart({
        team: teams.find((teamObj) => teamObj.name === team),
        player: players.find((playerObj) => playerObj.nickName === player),
      });
      setAlert(null);
      toast.success(`Player ${player} added to ${team} team`);
      setTeam("");
      setPlayer("");
    }
  };

  return (
    <ChooseTeamContainer>
      <ChooseTeamContainerInner>
        <h2>Choose team for player</h2>
        <FormContainer onSubmit={handleSubmit}>
          <FormControl
            style={{ marginRight: "10px", minWidth: "100px" }}
            variant="outlined"
          >
            <InputLabel id="team">Team</InputLabel>
            <Select
              native
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              label="Team"
              inputProps={{
                name: "team",
                id: "team",
              }}
            >
              <TeamOptions />
            </Select>
          </FormControl>

          <FormControl
            style={{ marginRight: "10px", minWidth: "100px" }}
            variant="outlined"
          >
            <InputLabel id="player">Player</InputLabel>
            <Select
              native
              value={player}
              onChange={(e) => setPlayer(e.target.value)}
              label="Player"
              inputProps={{
                name: "player",
                id: "player",
              }}
            >
              <PlayerOptions />
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Choose team
          </Button>
        </FormContainer>
        {alert ? (
          <AlertContainer severity="error">Incorrect inputs</AlertContainer>
        ) : null}
      </ChooseTeamContainerInner>
    </ChooseTeamContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  teams: selectTeamsForPreview,
  players: selectPlayersForPreview,
});

export default connect(mapStateToProps, { chooseTeamStart })(ChooseTeam);
