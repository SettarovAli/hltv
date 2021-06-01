import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./header/Header";
import MainContent from "./main-content/MainContent";
import HomePage from "../pages/homepage/HomePage";
import Matches from "../pages/matches/Matches";
import Results from "../pages/results/Results";
import Admin from "../pages/admin/Admin";
import Footer from "./footer/Footer";

import { GlobalStyle } from "../GlobalStyles";

const App = () => {
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

export default App;
