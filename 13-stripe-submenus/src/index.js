import React from "react";
import { render } from "react-dom";
import "./index.css";
import { App } from "./app";
import { AppProvider } from "./context";

render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
