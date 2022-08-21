import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset } from "styled-reset";
import { RecoilRoot } from "recoil";

import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    font-family: "Pretendard-Regular";
    box-sizing: border-box;
  }

  h1 {
    font-weight: 500;
    font-family : "Pretendard-Regular"
  }
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
