import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppProvider } from "./context/appContext";
import Directory from "./pages/Directory";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <AppProvider>
        <Router>
          <Route exact path="/">
            <Directory />
          </Route>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
