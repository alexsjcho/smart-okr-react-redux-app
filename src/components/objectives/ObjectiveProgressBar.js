import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const ObjectiveProgressBar = () => {
  const now = 60;
  return (
    <div>
      <ProgressBar
        animated
        striped
        variant="primary"
        now={now}
        label={`${now}%`}
      />
    </div>
  );
};

export default ObjectiveProgressBar;
