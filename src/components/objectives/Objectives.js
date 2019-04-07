import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import uuid from "uuid";

import TextInputGroup from "../shared/TextInputGroup";
import KeyResults from "../keyresults/KeyResults";
import { setObjective, setKeyResult } from "../../actions/objectives.js";
import ObjectiveProgressBar from "./ObjectiveProgressBar";

const mapStateToProps = ({ objectives: { objective, objectivesList } }) => ({
  objective,
  objectivesList
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setObjective, setKeyResult }, dispatch);

class Objectives extends Component {
  state = {
    objective: "",
    keyResult: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    const {
      setObjective,
      setKeyResult,
      objective: { name }
    } = this.props;
    e.preventDefault();
    if (name) {
      setKeyResult(this.state.keyResult);
    } else {
      setObjective(this.state.objective);
    }
    this.setState({
      objective: "",
      keyResult: ""
    });
  };

  render() {
    const { name, type, keyResult, objective } = this.state;
    const {
      objectivesList,
      objective: { name: objectiveName, keyResults }
    } = this.props;

    //Check for Errors
    if (name === "") {
      this.setState({ errors: { name: "Item is required" } });
    }

    return (
      <Fragment>
        {objectivesList.map(obj => (
          <div key={uuid()} className="card card-body mb-3">
            <h1>
              <i className="fas fa-bullseye" /> KRs{" "}
              <i className="fas fa-sort-down" />
              <ObjectiveProgressBar />
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
                  name="objective"
                  type={type}
                  placeholder="Overachieve quota this quarter!"
                  value={obj.name}
                  onChange={this.onChange}
                />
              </form>
            </div>
            {obj.name ? (
              <KeyResults
                keyResults={obj.keyResults}
                keyResultValue={keyResult}
                onSubmit={this.onSubmit}
                onChange={this.onChange}
              />
            ) : null}
          </div>
        ))}

        <div className="card card-body mb-3">
          <h1>
            <i className="fas fa-bullseye" /> KRs{" "}
            <i className="fas fa-sort-down" />
            <ObjectiveProgressBar />
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
                name="objective"
                type={type}
                placeholder="Overachieve quota this quarter!"
                value={objective}
                onChange={this.onChange}
              />
            </form>
          </div>
          {objectiveName ? (
            <KeyResults
              keyResults={keyResults}
              keyResultValue={keyResult}
              onSubmit={this.onSubmit}
              onChange={this.onChange}
            />
          ) : null}
        </div>
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Objectives);
