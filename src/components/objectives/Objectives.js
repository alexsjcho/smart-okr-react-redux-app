import React, { Component } from "react";

import TextInputGroup from "../shared/TextInputGroup";
import KeyResults from "../keyresults/KeyResults";

class Objectives extends Component {
  state = {
    objectives: "",
    keyresult: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { name, type, onChange } = this.state;

    //Check for Errors
    if (name === "") {
      this.setState({ errors: { name: "Item is required" } });
    }

    return (
      <div className="card card-body mb-3">
        <h1>
          OKRs <i className="fas fa-sort-down" />
        </h1>
        <div className="card-header">
          <form onSubmit={this.onSubmit}>
            <ul className="list-group">
              <li className="list-group-item">
                <i className="fas fa-plus" />{" "}
                <input
                  type="submit"
                  value="Add Objective"
                  className="btn btn-primary btn-inline-block"
                />
              </li>
            </ul>
            <TextInputGroup
              name="objectives"
              type={type}
              placeholder="Overachieve quota this quarter!"
              value={name}
              onChange={onChange}
            />
          </form>
        </div>
        <KeyResults />
      </div>
    );
  }
}

export default Objectives;
