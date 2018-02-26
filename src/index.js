import React from "react";
import ReactDOM from "react-dom";
import "gutenberg-web-type/src/style/gutenberg.css";
import "./index.css";
import { initNotifications, isPushSupported } from "./notification-setup";
import "./iubenda-setup";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App
      isPushSupported={isPushSupported}
      initNotifications={initNotifications}
    />
  </Router>,
  document.getElementById("root")
);
