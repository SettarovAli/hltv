import styled from "styled-components";

export const MatchItemContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background-color: var(--white);
  padding: 3px 5px;
  font-size: 11px;

  &:hover {
    background-color: #ededef;
    cursor: pointer;
  }
`;

export const TeamsContainer = styled.div`
  flex: 1 1 auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Time = styled.div`
  flex: 0 0 auto;
  text-align: right;
  align-self: center;
  color: #353535;
  font-size: 11px;
`;

export const ScoreContainer = styled.div`
  flex: 0 0 auto;
  text-align: right;
`;
