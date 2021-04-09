import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const theme = {
  main: {
    black: "#000000",
    oxfordBlue: "#14213D",
    orangeWeb: "#fca311",
    platinum: "#e5e5e5",
    white: "#ffffff",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme.main}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
