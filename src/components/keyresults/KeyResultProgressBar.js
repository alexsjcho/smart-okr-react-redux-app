import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const KeyResultProgressBar = () => {
  const now = 40;
  return (
    <div>
      <ProgressBar
        //   striped animated property only when attached with a tool
        variant="info"
        now={now}
        label={`${now}%`}
      />
    </div>
  );
};

export default KeyResultProgressBar;
