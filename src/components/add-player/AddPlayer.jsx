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
  AddPlayerContainer,
  AddPlayerContainerInner,
  FormContainer,
  AlertContainer,
} from "./AddPlayerStyles";

import { addNewPlayer } from "../../firebase/firebaseUtils";
import { fetchPlayersStart } from "../../redux/players/playersActions";

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

const AddPlayer = ({ fetchPlayersStart }) => {
  const [player, setPlayer] = useState("");
  const [country, setCountry] = useState("");
  const [id, setId] = useState("");
  const [logo, setLogo] = useState("");
  const [logoLink, setLogoLink] = useState("");
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    setId(generateId());
  }, []);

  const classes = useStyles();
  const storageRef = firebase.storage().ref();
  const logoPreview = document.getElementById("avatar-preview");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(id);
    if (!player || !country || !id || !logo) {
      setAlert(true);
    } else {
      const newPlayer = { name: player, country, id, logoLink };
      await addNewPlayer(newPlayer);
      fetchPlayersStart();

      toast.success(`Player ${player} successfuly added`);
      setAlert(null);
      setPlayer("");
      setCountry("");
      setId("");
      setLogo("");
      setLogoLink("");
      logoPreview.src = QuestionMark;
    }
  };

  const generateId = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  const loadLogoPreview = () => {
    logoPreview.src = URL.createObjectURL(logo);
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
    <AddPlayerContainer>
      <AddPlayerContainerInner>
        <h2>Add player</h2>
        <FormContainer className={classes.root} onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={player}
            onChange={(e) => setPlayer(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Country"
            variant="outlined"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <label htmlFor="upload-avatar">
            <input
              style={{ display: "none" }}
              id="upload-avatar"
              name="upload-avatar"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const firstFile = e.target.files[0];
                const fileRef = storageRef.child(`players/${firstFile.name}`);
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
              <AddIcon /> Upload avatar
            </Fab>
          </label>
          {logo ? loadLogoPreview() : null}
          <p>Avatar preview</p>
          <img
            id="avatar-preview"
            alt="Avatar"
            width="150px"
            height="150px"
            src={QuestionMark}
          />
          <Button type="submit" variant="contained">
            Add player
          </Button>
        </FormContainer>
        {alert ? (
          <AlertContainer variant="filled" severity="error">
            Incorrect inputs
          </AlertContainer>
        ) : null}
      </AddPlayerContainerInner>
    </AddPlayerContainer>
  );
};

export default connect(null, { fetchPlayersStart })(AddPlayer);
