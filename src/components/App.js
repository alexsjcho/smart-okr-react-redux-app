import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AppNavBar from "./layouts/AppNavBar";
import Objectives from "./objectives/Objectives";
import Dashboard from "./dashboard/Dashboard";
import Plans from "./weeklyitems/Plans";
import Accomplishments from "./weeklyitems/Accomplishments";
import Challenges from "./weeklyitems/Challenges";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppNavBar />
        <div className="container">
          <Dashboard />

          <Objectives />

          <Plans />

          <Accomplishments />

          <Challenges />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
