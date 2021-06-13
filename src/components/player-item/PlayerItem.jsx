import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import TouchIconComponent from "../touch-icon-component/TouchIconComponent";
import DeleteIcon from "@material-ui/icons/Delete";

import { createStructuredSelector } from "reselect";
import { selectTeamsObject } from "../../redux/teams/teamsSelectors";

import Flag from "../flag/Flag";
import {
  PlayerItemContainer,
  PlayerItemLink,
  AvatarImage,
  PlayerNickname,
  LogoImage,
} from "./PlayerItemStyles";
import { deletePlayerStart } from "../../redux/players/playersActions";
import toast from "react-hot-toast";

const DeletePlayer = ({ deletePlayerStart, id, nickName }) => {
  return (
    <div
      onClick={async () => {
        await deletePlayerStart(id);
        toast.error(`Player ${nickName} has been removed`);
      }}
    >
      <TouchIconComponent
        Icon={DeleteIcon}
        fontSize={"default"}
        color={"error"}
      />
    </div>
  );
};

const PlayerItem = ({ player, deletePlayerStart, teams }) => {
  if (!player) return null;
  const { nickName, country, id, logoLink, currentTeam } = player;
  return (
    <PlayerItemContainer>
      <PlayerItemLink to={`/players/${player.id}`}>
        <Flag code={country} />
        <AvatarImage src={logoLink} alt="Avatar" />
        <PlayerNickname>{nickName}</PlayerNickname>
      </PlayerItemLink>

      <LogoImage src={teams[currentTeam].logoLink} alt="Logo" />

      <Route
        path="/admin"
        render={() => {
          return (
            <DeletePlayer
              deletePlayerStart={deletePlayerStart}
              id={id}
              nickName={nickName}
            />
          );
        }}
      />
    </PlayerItemContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  teams: selectTeamsObject,
});

export default connect(mapStateToProps, { deletePlayerStart })(PlayerItem);
