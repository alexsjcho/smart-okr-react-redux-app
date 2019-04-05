import React, { Component } from "react";

import TextInputGroup from "../shared/TextInputGroup";

class Objectives extends Component {
  state = {
    objectives: "",
    keyresult: ""
  };

  render() {
    const { name, type } = this.state;
    return (
      <div className="card mb-3">
        <h1>OKRs</h1>
        <div className="card-header">
          {" "}
          <input
            type="submit"
            value="Add Objective"
            className="btn btn-primary btn-inline-block"
          />
          <form>
            <TextInputGroup
              name="objectives"
              type={type}
              placeholder="Overachieve quota this quarter!"
              value={name}
            />
          </form>
        </div>
        <div className="card-body">
          <input
            type="submit"
            value="Add Key Result"
            className="btn btn-info"
          />
          <form>
            <TextInputGroup
              name="keyresults"
              placeholder="Complete 10 customer demos per week!"
              value={name}
              type={type}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Objectives;
