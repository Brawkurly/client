import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset } from "styled-reset";
import { RecoilRoot } from "recoil";

import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  ${reset}
  box-sizing: border-box;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </>
);
