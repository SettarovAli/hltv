import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import // addCollectionAndDocuments,
"../firebase/firebaseUtils";
import { selectTeamsForPreview } from "../redux/teams/teamsSelectors";

import Header from "./header/Header";
import MainContent from "./main-content/MainContent";
import HomePage from "../pages/homepage/HomePage";
import Matches from "../pages/matches/Matches";
import Results from "../pages/results/Results";
import Teams from "../pages/teams/Teams";
import Team from "../pages/team/Team";
import Players from "../pages/players/Players";
import Player from "../pages/player/Player";
import Admin from "../pages/admin/Admin";
import Footer from "./footer/Footer";
import { Toaster } from "react-hot-toast";

import { fetchTeamsStart } from "../redux/teams/teamsActions";
import { fetchPlayersStart } from "../redux/players/playersActions";

import { GlobalStyle } from "../GlobalStyles";

const App = ({ teams, fetchTeamsStart, fetchPlayersStart }) => {
  useEffect(() => {
    // addCollectionAndDocuments("teams", teams);
    fetchTeamsStart();
    fetchPlayersStart();
  }, [fetchTeamsStart, fetchPlayersStart]);

  return (
    <>
      <GlobalStyle />
      <Header />

      <MainContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/matches" component={Matches} />
          <Route path="/results" component={Results} />
          <Route exact path="/teams" component={Teams} />
          <Route path="/teams/:teamId" component={Team} />
          <Route exact path="/players" component={Players} />
          <Route path="/players/:playerId" component={Player} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </MainContent>
      <Footer />
      <Toaster
        position="bottom-center"
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#2d6da3",
            color: "#fff",
            fontSize: "14px",
          },
        }}
      />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  teams: selectTeamsForPreview,
});

export default connect(mapStateToProps, { fetchTeamsStart, fetchPlayersStart })(
  App
);
