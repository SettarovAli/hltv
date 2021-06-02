import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";

import TeamOptions from "../team-options/TeamOptions";

import { selectTeamsForPreview } from "../../redux/teams/teamsSelectors";
import { addMatch } from "../../redux/matches/matchesActions";

const AddMatchContainer = styled.div`
  padding: 15px;
  background-color: white;
`;

const AddMatchContainerInner = styled.div`
  display: inline-block;
`;

const FormContainer = styled.form`
  display: flex;

  & > * {
    margin-right: 10px;
  }
`;

const AlertContainer = styled(Alert)`
  margin-top: 10px;
`;

const AddMatch = ({ teams, addMatch }) => {
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [alert, setAlert] = useState(null);

  const calculateDate = (date, time) => {
    const [y, m, d] = date.split("-");
    const [h, min] = time.split(":");
    return new Date(y, m - 1, d, h, min);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!team1 || !team2 || !date || !time) {
      setAlert(true);
    } else {
      addMatch({
        team1: teams.find((team) => team.name === team1),
        team2: teams.find((team) => team.name === team2),
        date: calculateDate(date, time),
      });
      setAlert(null);
    }
  };

  console.log(team1, team2);

  return (
    <AddMatchContainer>
      <AddMatchContainerInner>
        <h2>Add match</h2>
        <FormContainer onSubmit={handleSubmit}>
          <FormControl style={{ marginRight: "10px" }} variant="outlined">
            <InputLabel id="team-1">Team 1</InputLabel>
            <Select
              native
              value={team1}
              onChange={(e) => setTeam1(e.target.value)}
              label="Team 1"
              inputProps={{
                name: "team-1",
                id: "team-1",
              }}
            >
              <TeamOptions />
            </Select>
          </FormControl>

          <FormControl style={{ marginRight: "10px" }} variant="outlined">
            <InputLabel id="team-2">Team 2</InputLabel>
            <Select
              native
              value={team2}
              onChange={(e) => setTeam2(e.target.value)}
              label="Team 2"
              inputProps={{
                name: "team-2",
                id: "team-2",
              }}
            >
              <TeamOptions />
            </Select>
          </FormControl>

          <input type="date" onChange={(e) => setDate(e.target.value)} />
          <input type="time" onChange={(e) => setTime(e.target.value)} />
          <Button type="submit" variant="contained" color="primary">
            Add match
          </Button>
        </FormContainer>
        {alert ? (
          <AlertContainer severity="error">Incorret inputs</AlertContainer>
        ) : null}
      </AddMatchContainerInner>
    </AddMatchContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  teams: selectTeamsForPreview,
});

export default connect(mapStateToProps, { addMatch })(AddMatch);
