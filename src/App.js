import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Single from "./Single";
import "gutenberg-web-type/src/style/gutenberg.css";
import "./index.css";

class App extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "//cdn.iubenda.com/iubenda.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <Fragment>
        <Route path="/:id" component={Single} />
        <Route exact path="/" component={Home} />
      </Fragment>
    );
  }
}

export default App;
