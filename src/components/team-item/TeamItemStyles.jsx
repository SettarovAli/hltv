import styled from "styled-components";

export const TeamItemContainer = styled.div`
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

export const TeamItemInner = styled.div`
  text-decoration: none;
  color: #2d6da3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 18px;
  font-size: 12px;
`;
