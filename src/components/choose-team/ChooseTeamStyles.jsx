import styled from "styled-components";

import Alert from "@material-ui/lab/Alert";

export const ChooseTeamContainer = styled.div`
  padding: 15px;
  background-color: white;
`;

export const ChooseTeamContainerInner = styled.div`
  display: inline-block;
`;

export const FormContainer = styled.form`
  display: flex;

  & > * {
    margin-right: 10px;
  }
`;

export const AlertContainer = styled(Alert)`
  margin-top: 10px;
  font-size: 14px;
`;
