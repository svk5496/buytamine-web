import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  primary: "#FE9A09",
  primaryDark: "#A5E357",
  primaryLight: "#D3E357",

  secondary: "#C7714B",
  secondaryDark: "#3A3F14",
  secondaryLight: "#307157",

  borderColor: "#DBDBDB",

  fontDarkColor: "#4E4E4E",

  fontColor: "#2c2c2c",
  bgColorLight: "#FFFAF3",
  bgColor: "#FFFAF3",
  bgColorStrong: "#FFDCA9",
  bgColorStrong2: "#FFECD0",
};

export const darkTheme = {
  fontColor: "lightgray",
  bgColor: "#2c2c2c",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        box-sizing:border-box;
    }
    input {
        all:unset
    }
    body {
        background-color: ${(props) => props.theme.bgColor};
        font-size:14px;
        font-family: 'Jost', sans-serif;
    }
`;
