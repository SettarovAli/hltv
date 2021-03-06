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

import { selectTeamsObject } from "../../redux/teams/teamsSelectors";
import { selectPlayersObject } from "../../redux/players/playersSelectors";
import { chooseTeamStart } from "../../redux/teams/teamsActions";
import { deletePlayerFromOtherTeamStart } from "../../redux/players/playersActions";

import {
  ChooseTeamContainer,
  ChooseTeamContainerInner,
  FormContainer,
  AlertContainer,
} from "./ChooseTeamStyles";

const ChooseTeam = ({
  teams,
  players,
  chooseTeamStart,
  deletePlayerFromOtherTeamStart,
}) => {
  const [team, setTeam] = useState("");
  const [player, setPlayer] = useState("");
  const [alert, setAlert] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!team || !player) {
      setAlert(true);
    } else {
      if (team === players[player].currentTeam) {
        toast.error(
          `Player ${players[player].nickName} already in ${teams[team].name} team`
        );
        setAlert(null);
        setTeam("");
        setPlayer("");
        return;
      }

      await deletePlayerFromOtherTeamStart({ player, team });

      await chooseTeamStart({
        team: teams[team],
        player: players[player],
      });

      setAlert(null);
      toast.success(
        `Player ${players[player].nickName} added to ${teams[team].name} team`
      );
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
  teams: selectTeamsObject,
  players: selectPlayersObject,
});

export default connect(mapStateToProps, {
  chooseTeamStart,
  deletePlayerFromOtherTeamStart,
})(ChooseTeam);
