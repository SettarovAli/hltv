import React, { useState } from "react";
import { connect } from "react-redux";
import toast from "react-hot-toast";

import { addNewTeam } from "../../firebase/firebaseUtils";
import { fetchTeamsStart } from "../../redux/teams/teamsActions";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import {
  AddTeamContainer,
  AddTeamContainerInner,
  FormContainer,
  AlertContainer,
} from "./AddTeamStyles";

const AddTeam = ({ fetchTeamsStart }) => {
  const [team, setTeam] = useState("");
  const [country, setCountry] = useState("");
  const [id, setId] = useState("");
  const [alert, setAlert] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!team || !country || !id) {
      setAlert(true);
    } else {
      const newTeam = { name: team, country, id };
      await addNewTeam(newTeam);
      fetchTeamsStart();
      setAlert(null);
      toast.success(`Team ${team} successfuly added`);
      setTeam("");
      setCountry("");
      setId("");
    }
  };

  return (
    <AddTeamContainer>
      <AddTeamContainerInner>
        <h2>Add team</h2>
        <FormContainer onSubmit={handleSubmit}>
          <TextField
            style={{ marginRight: "10px" }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
          />
          <TextField
            style={{ marginRight: "10px" }}
            id="outlined-basic"
            label="Country"
            variant="outlined"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <TextField
            style={{ marginRight: "10px" }}
            id="outlined-basic"
            label="Id"
            variant="outlined"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Add team
          </Button>
        </FormContainer>
        {alert ? (
          <AlertContainer variant="filled" severity="error">
            Incorrect inputs
          </AlertContainer>
        ) : null}
      </AddTeamContainerInner>
    </AddTeamContainer>
  );
};

export default connect(null, { fetchTeamsStart })(AddTeam);
