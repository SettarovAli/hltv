import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import TouchIconComponent from "../touch-icon-component/TouchIconComponent";
import DeleteIcon from "@material-ui/icons/Delete";

import Flag from "../flag/Flag";
import {
  PlayerItemContainer,
  PlayerItemInner,
  AvatarImage,
  PlayerNickname,
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

const PlayerItem = ({ player, deletePlayerStart }) => {
  const { nickName, fullName, country, id, logoLink } = player;
  return (
    <PlayerItemContainer>
      <PlayerItemInner>
        <Flag code={country} />
        <AvatarImage src={logoLink} alt="Avatar" />
        <PlayerNickname>{nickName}</PlayerNickname>
      </PlayerItemInner>

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

export default connect(null, { deletePlayerStart })(PlayerItem);
