import React, { Component } from "react";

import ObjectiveProgressBar from "./ObjectiveProgressBar";
import TextInputGroup from "../shared/TextInputGroup";
import KeyResultsList from "../keyresults/KeyResultsList";

class Objective extends Component {
  constructor(props) {
    super(props);
    const {
      objective: { name },
      objectiveId
    } = this.props;
    this.state = {
      objective: name,
      id: objectiveId
    };
  }

  handleSubmit = e => {
    const { onSubmit } = this.props;
    e.preventDefault();
    onSubmit(this.state.objective);
    this.setState({
      objective: ""
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { type, keyResult, objective } = this.state;

    const {
      objective: { name: objectiveName, keyResults },
      onSubmit,
      ...props
    } = this.props;

    return (
      <div className="card card-body mb-3">
        <h1>
          <i className="fas fa-bullseye" /> KRs{" "}
          <i className="fas fa-sort-down" />
          <ObjectiveProgressBar />
        </h1>
        <div className="card-header">
          <form onSubmit={this.handleSubmit}>
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
              name="objective"
              type={type}
              placeholder="Overachieve quota this quarter!"
              value={this.state.objective}
              onChange={this.onChange}
            />
          </form>
        </div>
        {objectiveName ? (
          <KeyResultsList
            objectiveId={this.state.id}
            keyResults={keyResults}
            {...props}
          />
        ) : null}
      </div>
    );
  }
}

//Use this to give default value to props
Objective.defaultProps = {
  objective: {
    name: "",
    keyResults: [],
    id: null
  }
};

export default Objective;
