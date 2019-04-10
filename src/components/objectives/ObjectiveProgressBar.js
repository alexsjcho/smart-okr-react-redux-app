import React, { Fragment } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const ObjectiveProgressBar = () => {
  let value = 60;
  return (
    <Fragment>
      <ProgressBar
        //  animated striped properties added if Objective has a Key Result with an added tool
        variant="primary"
        now={value}
        label={`${value}%`}
      />
    </Fragment>
  );
};

ObjectiveProgressBar.defaultProps = {
  value: 60
};

export default ObjectiveProgressBar;
