import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  ::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --white: #ffffff;
    --dark: #000000;

    --dark-text: #353535
  }

  html {
    font-size: 12px;
    line-height: 1.66667;
  }

  body {
    padding-top: 46px;
    font-family: Open Sans, sans-serif;
    background-color: var(--dark);
    color: var(--dark-text);
  }

  a {
    text-decoration: none;
    color: #2d6da3;
  }
`;
