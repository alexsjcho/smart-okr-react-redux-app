import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const KeyResultProgressBar = ({ toolOption, value, targetValue }) => {
  let labelValue = (value / targetValue) * 100 || 0;
  let progressBarProps = {
    variant: "info",
    now: value,
    label: `${labelValue.toFixed(0)}%`,
    max: targetValue
  };
  if (toolOption) {
    progressBarProps.striped = true;
    progressBarProps.animated = true;
  }
  return <ProgressBar {...progressBarProps} />;
};

KeyResultProgressBar.defaultProps = {
  value: 0
};

export default KeyResultProgressBar;
