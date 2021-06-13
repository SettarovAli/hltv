import styled from "styled-components";
import { Link } from "react-router-dom";

export const TeamLineupContainer = styled.div`
  background-image: linear-gradient(136deg, #1b1f23, #3a4755);
  display: flex;
`;

export const TeamLineupLink = styled(Link)`
  height: 100%;
  flex: 0 0 20%;
  position: relative;

  &:hover {
    transition: 0.2s ease;
    opacity: 0.8;
  }
`;

export const PlayerInfo = styled.div`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: linear-gradient(
    90deg,
    transparent 5%,
    rgba(0, 0, 0, 0.8) 20%,
    rgba(0, 0, 0, 0.8) 50%,
    rgba(0, 0, 0, 0.8) 80%,
    transparent 95%
  );
`;

export const AvatarImage = styled.img`
  max-width: 100%;
  width: 100%;
  display: block;
`;

export const PlayerName = styled.h3`
  font-size: ${(props) => props.fontSize};
`;
