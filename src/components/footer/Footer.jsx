import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: var(--white);
`;

const FooterInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px 0 16px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>All rights reserved. © HLTV.org</FooterInner>
    </FooterContainer>
  );
};

export default Footer;
