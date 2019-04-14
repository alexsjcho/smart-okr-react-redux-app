import React, { Fragment } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { connect } from "react-redux";

function mapStateToProps(state) {
  const {
    objectives: { objectivesList }
  } = state;
  const progressSum = objectivesList.reduce(
    (accumulator, objective) => {
      const objectiveSum = objective.keyResults.reduce(
        (accumulator, keyResult) => {
          accumulator.value += parseInt(keyResult.unit);
          accumulator.targetValue += parseInt(keyResult.targetUnit);
          return accumulator;
        },
        {
          value: 0,
          targetValue: 0
        }
      );

      //objectiveSum = {value: 250, targetValue: 300}
      accumulator.value += objectiveSum.value;
      accumulator.targetValue += objectiveSum.targetValue;
      return accumulator;
      // accumulator = {value: 250, targetValue: 300 }
      // objectiveSum = {value: 50, targetValue: 100}
      // accumulator = {value: 300, targetValue: 400}
      // int 2 + int 3 = int 5
      // string '2' + string '3' = '23'''0017234'
    },
    {
      value: 0,
      targetValue: 0
    }
  );
  // progressSum: {value: 300, targetValue: 400}
  return {
    value: progressSum.value,
    targetValue: progressSum.targetValue
  };
}

const AllObjectiveProgressBar = ({ value, targetValue }) => {
  let labelValue = (value / targetValue) * 100 || 0;
  let allObjectiveProgressBarProps = {
    variant: "primary",
    now: value,
    label: `${labelValue.toFixed(0)}%`,
    max: targetValue
  };

  return (
    <Fragment>
      <div className="col-xl-10 col-md-12 mb-5">
        <div className="card border-left-info shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  All <i className="fas fa-bullseye fa-2x text-gray-300" />
                  bjective Status
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
                    <ProgressBar {...allObjectiveProgressBarProps} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(mapStateToProps)(AllObjectiveProgressBar);
