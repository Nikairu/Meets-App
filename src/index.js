import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as atatus from "atatus-js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//serviceWorker.unregister();
serviceWorker.register();
atatus.config("241783d6fec64ff8a6bd6d6bd8c4611e").install();
