import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import AppNavBar from "./layouts/AppNavBar";
import ObjectivesList from "./objectives/ObjectivesList";
import Dashboard from "./dashboard/Dashboard";
import Accomplishments from "./weeklyitems/Accomplishments";
import PlanList from "./weeklyitems/PlanList";
import ChallengeList from "./weeklyitems/ChallengeList";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <AppNavBar />
          <div className="container">
            <Dashboard />
          </div>
          <ObjectivesList />
          <div className="container">
            <PlanList />
            <Accomplishments />
            <ChallengeList />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
