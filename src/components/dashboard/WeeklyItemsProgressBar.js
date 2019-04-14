import React, { Component, Fragment } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { connect } from "react-redux";

function mapStateToProps(state) {
  const {
    objectives: { objectivesList }
  } = state;
  const allWeeklyItemsSum = objectivesList.reduce(
    (accumulator, objective) => {
      const plansQty = objective.weeklyItems.plans.length;
      const achievementsQty = objective.weeklyItems.achievements.length;
      const challengesQty = objective.weeklyItems.challenges.length;

      accumulator.plans += plansQty;
      accumulator.achievements += achievementsQty;
      accumulator.challenges += challengesQty;
      accumulator.targetValue += plansQty + achievementsQty + challengesQty;

      return accumulator;
    },
    {
      plans: 0,
      achievements: 0,
      challenges: 0,
      targetValue: 0
    }
  );
  return {
    weeklyItemsProgress: {
      targetValue: allWeeklyItemsSum.targetValue,

      plansProgress: {
        value: allWeeklyItemsSum.plans
      },
      achievementsProgress: {
        value: allWeeklyItemsSum.achievements
      },
      challengesProgress: {
        value: allWeeklyItemsSum.challenges
      }
    }
  };
}

class WeeklyItemsProgressBar extends Component {
  // weeklyStatusEmoji = () => {
  //   const {plans, achievements, challenges, status}
  //   if (achievements > challenges) {
  //     return "😁";
  //   } else if (challenges > achievements) {
  //     return " 😰";
  //   } else if (plans > achievements){
  //     return "😱"
  //   } else {
  //     return "🤔";
  //   }
  // };

  render() {
    const {
      weeklyItemsProgress: {
        plansProgress,
        achievementsProgress,
        challengesProgress,
        targetValue
      }
    } = this.props;

    return (
      <Fragment>
        <div className="col-xl-10 col-md-12 mb-5">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                    All Weekly Items{" "}
                    <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                  </div>
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div
                        className="h5 mb-0 mr-3 "
                        style={{ fontWeight: "bold-text-gray-800" }}
                      />
                    </div>{" "}
                    {}
                    <div className="col">
                      <ProgressBar
                        variant="primary"
                        now={plansProgress.value}
                        label={`#${plansProgress.value}`}
                        max={targetValue}
                      />
                      <ProgressBar
                        variant="success"
                        now={achievementsProgress.value}
                        label={`#${achievementsProgress.value}`}
                        max={targetValue}
                      />
                      <ProgressBar
                        variant="warning"
                        now={challengesProgress.value}
                        label={`#${challengesProgress.value}`}
                        max={targetValue}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(WeeklyItemsProgressBar);
