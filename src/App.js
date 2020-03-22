import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppProvider } from "./context/appContext";
import Header from "./components/Header";
import Directory from "./components/Directory";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <AppProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/folders">
              <Directory />
            </Route>
            <Route exact path="/folders/:id">
              <Directory />
            </Route>
          </Switch>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
