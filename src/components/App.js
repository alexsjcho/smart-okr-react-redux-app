import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import AppNavBar from "./layouts/AppNavBar";
import ObjectivesList from "./objectives/ObjectivesList";
import Dashboard from "./dashboard/Dashboard";
import Plans from "./weeklyitems/Plans";
import Accomplishments from "./weeklyitems/Accomplishments";
import Challenges from "./weeklyitems/Challenges";
import KeyResult from "./keyresults/KeyResult";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <AppNavBar />
          <div className="container">
            <Dashboard />
          </div>
          <KeyResult />
          <ObjectivesList />
          <div className="container">
            <Plans />
            <Accomplishments />
            <Challenges />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
