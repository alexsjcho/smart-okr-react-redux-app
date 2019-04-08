import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import AppNavBar from "./layouts/AppNavBar";
import Dashboard from "./dashboard/Dashboard";
import ObjectivesList from "./objectives/ObjectivesList";
import PlanList from "./weeklyitems/PlanList";
import ChallengeList from "./weeklyitems/ChallengeList";
import AchievementList from "./weeklyitems/AchievementList";

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
            <AchievementList />
            <ChallengeList />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
