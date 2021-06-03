import styled from "styled-components";

import Alert from "@material-ui/lab/Alert";

export const AddMatchContainer = styled.div`
  padding: 15px;
  background-color: white;
`;

export const AddMatchContainerInner = styled.div`
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
