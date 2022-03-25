import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    box-sizing: border-box;
    font-size: 15px;
    color : black;
    min-width: 320px;
  }
  a { cursor: pointer; text-decoration: none; }
`;
