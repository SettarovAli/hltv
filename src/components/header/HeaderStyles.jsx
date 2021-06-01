import styled from "styled-components";

export const HeaderConatiner = styled.div`
  position: fixed;
  top: 0;
  z-index: 9999;
  width: 100%;
  box-shadow: 0 1px 2px 0 rgba(50, 50, 50, 0.4);
  background-color: var(--white);
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  max-width: 975px;
  margin: 0 auto;
  font-size: 14px;
`;

export const NavLink = styled.a`
  padding: 0 11px;
  height: 46px;
  line-height: 46px;
  font-weight: 400;
  border-right: 1px solid hsla(0, 0%, 80%, 0.65);
  text-align: center;
  color: var(--dark-text);

  &.small-logo {
    flex: 0 0 auto;
    height: 46px;
    width: 46px;
    padding-left: 0;

    & .small-logo-img {
      height: 46px;
    }
  }
`;
