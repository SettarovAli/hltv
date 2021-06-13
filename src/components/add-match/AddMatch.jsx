import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import toast from "react-hot-toast";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import TeamOptions from "../team-options/TeamOptions";

import { selectTeamsObject } from "../../redux/teams/teamsSelectors";
import { addMatch } from "../../redux/matches/matchesActions";

import {
  AddMatchContainer,
  AddMatchContainerInner,
  FormContainer,
  AlertContainer,
} from "./AddMatchStyles";

const AddMatch = ({ teams, addMatch }) => {
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [alert, setAlert] = useState(null);

  const generateId = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

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
        team1: teams[team1],
        team2: teams[team2],
        date: calculateDate(date, time),
        id: generateId(),
      });
      setAlert(null);
      toast.success(
        `Match ${teams[team1].name} - ${teams[team2].name} successfuly added`
      );
      setTeam1("");
      setTeam2("");
      setDate("");
      setTime("");
    }
  };

  return (
    <AddMatchContainer>
      <AddMatchContainerInner>
        <h2>Add match</h2>
        <FormContainer onSubmit={handleSubmit}>
          <FormControl
            style={{ marginRight: "10px", minWidth: "100px" }}
            variant="outlined"
          >
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

          <FormControl
            style={{ marginRight: "10px", minWidth: "100px" }}
            variant="outlined"
          >
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

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Add match
          </Button>
        </FormContainer>
        {alert ? (
          <AlertContainer severity="error">Incorrect inputs</AlertContainer>
        ) : null}
      </AddMatchContainerInner>
    </AddMatchContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  teams: selectTeamsObject,
});

export default connect(mapStateToProps, { addMatch })(AddMatch);
