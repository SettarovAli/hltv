import React from "react";

import Column from "../../components/column/Column";
import AddMatch from "../../components/add-match/AddMatchContainer";
import AddTeam from "../../components/add-team/AddTeam";
import AddPlayer from "../../components/add-player/AddPlayer";
import MatchesList from "../../components/matches-list/MatchesList";
import TeamsList from "../../components/teams-list/TeamsListContainer";
import PlayersList from "../../components/players-list/PlayersListContainer";
import ChooseTeam from "../../components/choose-team/ChooseTeamContainer";

import { GridContainer } from "./AdminStyles";

const Admin = () => {
  return (
    <>
      <GridContainer>
        <Column area="matches">
          <AddMatch />
        </Column>
        <Column area="matches-right">
          <MatchesList />
        </Column>
        <Column area="teams">
          <AddTeam />
        </Column>
        <Column area="teams-right">
          <TeamsList details={false} width="200px" fontSize={"12px"} />
        </Column>
        <Column area="players">
          <AddPlayer />
        </Column>
        <Column area="players-right">
          <PlayersList />
        </Column>
        <Column area="choose-team">
          <ChooseTeam />
        </Column>
        <Column area="choose-team-right"></Column>
      </GridContainer>
    </>
  );
};

export default Admin;
