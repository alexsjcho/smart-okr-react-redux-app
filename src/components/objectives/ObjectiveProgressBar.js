import React, { Fragment } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const ObjectiveProgressBar = ({ value, targetValue }) => {
  let labelValue = (value / targetValue) * 100 || 0;
  let objectiveBarProps = {
    variant: "primary",
    now: value,
    label: `${labelValue.toFixed(2)}%`,
    max: targetValue
  };

  return (
    <Fragment>
      <ProgressBar {...objectiveBarProps} />
    </Fragment>
  );
};

ObjectiveProgressBar.defaultProps = {
  value: 0
};

export default ObjectiveProgressBar;
