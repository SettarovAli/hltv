import styled from "styled-components";
import Flag from "../flag/Flag";
import { Link } from "react-router-dom";

export const MatchHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 1px 2px 0 rgba(50, 50, 50, 0.4);
  background-color: #fff;
`;

export const TeamContainer = styled.div`
  position: relative;
  flex: 1 0 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
`;

export const DateContainer = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  max-width: 33%;
`;

export const Time = styled.div`
  font-weight: 700;
  font-size: 36px;
  max-width: 100%;
  color: #292929;
`;

export const Date = styled.div`
  font-size: 10px;
  max-width: 100%;
`;

export const TeamCountry = styled(Flag)`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.2;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  transform: translateY(-50%);
`;

export const TeamLogoLink = styled(Link)`
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${(props) =>
    props.gradient === "right"
      ? "linear-gradient(90deg, hsla(0, 0%, 100%, 0) 50%, #fff)"
      : "linear-gradient(-90deg, hsla(0, 0%, 100%, 0) 50%, #fff)"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
`;

export const TeamName = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
