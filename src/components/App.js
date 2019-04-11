import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Dashboard from "./dashboard/Dashboard";

import ObjectivesList from "./objectives/ObjectivesList";
//import PlanList from "./weeklyitems/PlanList";
//import ChallengeList from "./weeklyitems/ChallengeList";
//import AchievementList from "./weeklyitems/AchievementList";
// import KeyResult from "./keyresults/KeyResult";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="container">
            <Dashboard />
          </div>
          {/* <KeyResult /> */}
          <ObjectivesList />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
