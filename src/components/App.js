import React, { Component } from "react";

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

        <Dashboard />

        <Objectives />

        <Plans />

        <Accomplishments />

        <Challenges />
      </React.Fragment>
    );
  }
}

export default App;
