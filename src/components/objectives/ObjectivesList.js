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
  deleteObjective,
  deleteKeyResult,
  deleteWeeklyPlan,
  setWeeklyAchievement,
  deleteWeeklyAchievement,
  setWeeklyChallenge,
  deleteWeeklyChallenge
} from "../../actions/objectives.js";
import Objective from "./Objective";

const mapStateToProps = ({ objectives: { objective, objectivesList } }) => ({
  objectivesList
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setObjective,
      deleteObjective,
      setKeyResult,
      setWeeklyPlan,
      deleteKeyResult,
      deleteWeeklyPlan,
      setWeeklyAchievement,
      deleteWeeklyAchievement,
      setWeeklyChallenge,
      deleteWeeklyChallenge
    },
    dispatch
  );

class ObjectivesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWeeklyItems: true
    };
  }

  onSubmit = submitValue => {
    const { setObjective } = this.props;
    setObjective(submitValue);
  };

  onDelete = index => {
    const { deleteObjective } = this.props;
    deleteObjective(index);
  };

  render() {
    const {
      objectivesList,
      setWeeklyPlan,
      setWeeklyAchievement,
      setWeeklyChallenge,
      ...props
    } = this.props;
    const { showWeeklyItems } = this.state;

    return (
      <Fragment>
        {objectivesList.map((obj, i) => {
          console.log("obj", obj.weeklyItems.plans);
          return (
            <Fragment key={uuid()}>
              <Objective
                objectiveId={i}
                objective={obj}
                onSubmit={this.onSubmit}
                onDelete={this.onDelete}
                {...props}
              />

              <div className="container">
                <h5 className="d-flex justify-content-center bg-light">
                  Weekly Items
                  <i
                    className="fas fa-sort-down"
                    onClick={() =>
                      this.setState({
                        showWeeklyItems: !this.state.showWeeklyItems
                      })
                    }
                  />
                </h5>
                {showWeeklyItems ? (
                  <Fragment>
                    <PlanList
                      setWeeklyPlan={setWeeklyPlan}
                      plansList={obj.weeklyItems.plans}
                      objectiveId={i}
                      deleteWeeklyPlan={this.props.deleteWeeklyPlan}
                    />
                    <AchievementList
                      setWeeklyAchievement={setWeeklyAchievement}
                      achievementsList={obj.weeklyItems.achievements}
                      objectiveId={i}
                      deleteWeeklyAchievement={
                        this.props.deleteWeeklyAchievement
                      }
                    />
                    <ChallengeList
                      setWeeklyChallenge={setWeeklyChallenge}
                      challengesList={obj.weeklyItems.challenges}
                      objectiveId={i}
                      deleteWeeklyChallenge={this.props.deleteWeeklyChallenge}
                    />
                  </Fragment>
                ) : null}
              </div>
            </Fragment>
          );
        })}

        <Objective onSubmit={this.onSubmit} {...props} />
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ObjectivesList);
