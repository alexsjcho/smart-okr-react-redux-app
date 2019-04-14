import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import "./App.css";
import Dashboard from "./dashboard/Dashboard";

import ObjectivesList from "./objectives/ObjectivesList";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <Container>
          <div className="container">
            <div className="container">
              <Dashboard />
            </div>
            <ObjectivesList />
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
