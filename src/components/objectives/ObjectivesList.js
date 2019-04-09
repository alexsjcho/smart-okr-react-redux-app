import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import uuid from "uuid";

import {
  setObjective,
  setKeyResult,
  setWeeklyPlan
} from "../../actions/objectives.js";
import Objective from "./Objective";

const mapStateToProps = ({ objectives: { objective, objectivesList } }) => ({
  objectivesList
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setObjective, setKeyResult, setWeeklyPlan }, dispatch);

class ObjectivesList extends Component {
  onSubmit = submitValue => {
    const { setObjective } = this.props;
    //if (name) {
    // setKeyResult(submitValue);
    //} else {
    //
    //}

    setObjective(submitValue);
  };

  render() {
    const { objectivesList, ...props } = this.props;

    // //Check for Errors
    // if (name === "") {
    //   this.setState({ errors: { name: "Item is required" } });
    // }

    console.log("objectivesList", objectivesList);

    return (
      <Fragment>
        {objectivesList.map((obj, i) => (
          <Objective
            objectiveId={i}
            key={uuid()}
            objective={obj}
            onSubmit={this.onSubmit}
            {...props}
          />
        ))}

        <Objective onSubmit={this.onSubmit} {...props} />
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ObjectivesList);
