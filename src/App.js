import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/globals.scss";
import Header from "./components/Header";

import "./App.scss";
import Directory from "./components/Directory";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/folders/:id">
            <Directory />
          </Route>
          <Route exact path="/folders">
            <Directory />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
