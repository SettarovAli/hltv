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
import Admin from "../pages/admin/Admin";
import Footer from "./footer/Footer";

import { fetchTeamsStart } from "../redux/teams/teamsActions";

import { GlobalStyle } from "../GlobalStyles";

const App = ({ teams, fetchTeamsStart }) => {
  useEffect(() => {
    // addCollectionAndDocuments("teams", teams);
    fetchTeamsStart();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/matches" component={Matches} />
          <Route path="/results" component={Results} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </MainContent>
      <Footer />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  teams: selectTeamsForPreview,
});

export default connect(mapStateToProps, { fetchTeamsStart })(App);
