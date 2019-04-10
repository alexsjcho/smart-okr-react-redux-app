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
          now={value}
          label={`${value}%`}
        />
      ) : (
        <ProgressBar variant="info" now={value} label={`${value}%`} />
      )}
    </Fragment>
  );
};

KeyResultProgressBar.defaultProps = {
  value: 40
};

export default KeyResultProgressBar;
