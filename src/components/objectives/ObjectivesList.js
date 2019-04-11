import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import uuid from "uuid";
import PlanList from "../weeklyitems/PlanList";
import ChallengeList from "../weeklyitems/ChallengeList";
import AchievementList from "../weeklyitems/AchievementList";

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
          <Fragment key={uuid()}>
            <Objective
              objectiveId={i}
              objective={obj}
              onSubmit={this.onSubmit}
              onDelete={this.onDelete}
              {...props}
            />
            <div className="container">
              <h2>Weekly Items</h2>
              <PlanList objectiveId={i} />
              <AchievementList />
              <ChallengeList />
            </div>
          </Fragment>
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
