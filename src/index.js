import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ErrorBoundary from "react-error-boundary";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  rootElement
);
