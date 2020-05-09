import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/globals.scss";
import Directory from "./components/Directory";
import Login from "./components/Login";

import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/folders/:id">
          <Directory />
        </Route>
        <Route exact path="/folders">
          <Directory />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
