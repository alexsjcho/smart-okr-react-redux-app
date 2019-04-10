import React, { Fragment } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const KeyResultProgressBar = ({ toolOption, value }) => {
  return (
    <Fragment>
      {toolOption ? (
        <ProgressBar
          striped
          animated
          variant="info"
          value={value}
          label={`${value}%`}
        />
      ) : (
        <ProgressBar variant="info" now={value} label={`${value}%`} />
      )}
    </Fragment>
  );
};

KeyResultProgressBar.defaultProps = {
  activated: false,
  value: 40
};

export default KeyResultProgressBar;
