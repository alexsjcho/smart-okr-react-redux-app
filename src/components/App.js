import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import AppNavBar from "./layouts/AppNavBar";
import Objectives from "./objectives/Objectives";
import Dashboard from "./dashboard/Dashboard";
import Plans from "./weeklyitems/Plans";
import Accomplishments from "./weeklyitems/Accomplishments";
import Challenges from "./weeklyitems/Challenges";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <AppNavBar />
          <div className="container">
            <Dashboard />
          </div>
          <Objectives />
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
