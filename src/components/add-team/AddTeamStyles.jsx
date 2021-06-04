import styled from "styled-components";

import Alert from "@material-ui/lab/Alert";

export const AddTeamContainer = styled.div`
  margin-top: 15px;
  padding: 15px;
  background-color: white;
`;

export const AddTeamContainerInner = styled.div`
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
`;
