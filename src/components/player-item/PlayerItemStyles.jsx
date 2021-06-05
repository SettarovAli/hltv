import styled from "styled-components";

export const PlayerItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

export const PlayerItemInner = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #2d6da3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
`;

export const AvatarImage = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-right: 10px;
`;

export const PlayerNickname = styled.div`
  font-size: 13px;
  font-weight: bold;
`;
