import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import toast from "react-hot-toast";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import firebase from "../../firebase/firebaseUtils";
import QuestionMark from "../../assets/question-mark.jpg";

import {
  AddTeamContainer,
  AddTeamContainerInner,
  FormContainer,
  AlertContainer,
} from "./AddTeamStyles";

import { addNewTeam } from "../../firebase/firebaseUtils";
import { fetchTeamsStart } from "../../redux/teams/teamsActions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginBottom: "10px",
    },
    "& > .MuiFormControl-root": {
      minWidth: "320px",
    },
    "& > .MuiButtonBase-root": {
      backgroundColor: "#2d6da3",
      color: "white",
      fontWeight: "bold",
    },
  },
}));

const AddTeam = ({ fetchTeamsStart }) => {
  const [team, setTeam] = useState("");
  const [country, setCountry] = useState("");
  const [id, setId] = useState("");
  const [logo, setLogo] = useState("");
  const [logoLink, setLogoLink] = useState("");
  const [squad, setSquad] = useState([]);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    setId(generateId());
    setSquad([]);
  }, []);

  const classes = useStyles();
  const storageRef = firebase.storage().ref();
  const logoPreview = document.getElementById("logo-preview");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!team || !country || !id || !logo || !logoLink) {
      setAlert(true);
    } else {
      const newTeam = { name: team, country, id, logoLink, squad };
      await addNewTeam(newTeam);
      fetchTeamsStart();

      toast.success(`Team ${team} successfuly added`);
      setAlert(null);
      setTeam("");
      setCountry("");
      setId(generateId());
      setLogo("");
      setLogoLink("");
      logoPreview.src = QuestionMark;
    }
  };

  const loadLogoPreview = () => {
    logoPreview.src = URL.createObjectURL(logo);
  };

  const generateId = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  const createLogoLink = (ref) => {
    ref
      .getDownloadURL()
      .then((url) => {
        setLogoLink(url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AddTeamContainer>
      <AddTeamContainerInner>
        <h2>Add team</h2>
        <FormContainer className={classes.root} onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Country"
            variant="outlined"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <label htmlFor="upload-photo">
            <input
              style={{ display: "none" }}
              id="upload-photo"
              name="upload-photo"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const firstFile = e.target.files[0];
                const fileRef = storageRef.child(`teams/${firstFile?.name}`);
                fileRef.put(firstFile);

                setLogo(e.target.files[0]);
                createLogoLink(fileRef);
              }}
            />

            <Fab
              color="secondary"
              size="small"
              component="span"
              aria-label="add"
              variant="extended"
            >
              <AddIcon /> Upload logo
            </Fab>
          </label>
          {logo ? loadLogoPreview() : null}
          <p>Logo preview</p>
          <img
            id="logo-preview"
            alt="Logo"
            width="150px"
            height="150px"
            src={QuestionMark}
          />
          <Button type="submit" variant="contained">
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
