import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import uuid from "uuid";

import {
  setObjective,
  setKeyResult,
  setWeeklyPlan,
  deleteObjective
} from "../../actions/objectives.js";
import Objective from "./Objective";

const mapStateToProps = ({ objectives: { objective, objectivesList } }) => ({
  objectivesList
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { setObjective, deleteObjective, setKeyResult, setWeeklyPlan },
    dispatch
  );

class ObjectivesList extends Component {
  onSubmit = submitValue => {
    const { setObjective } = this.props;
    setObjective(submitValue);
  };

  onDelete = index => {
    const { deleteObjective } = this.props;
    deleteObjective(index);
  };

  render() {
    const { objectivesList, ...props } = this.props;
    console.log("objectivesList", objectivesList);

    return (
      <Fragment>
        {objectivesList.map((obj, i) => (
          <Objective
            objectiveId={i}
            key={uuid()}
            objective={obj}
            onSubmit={this.onSubmit}
            onDelete={this.onDelete}
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
