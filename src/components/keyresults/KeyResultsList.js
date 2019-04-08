import React, { Component, Fragment } from "react";
import uuid from "uuid";

import KeyResult from "./KeyResult";

class KeyResultsList extends Component {
  render() {
    const { onChange, keyResults, setKeyResult, ...props } = this.props;
    return (
      <Fragment>
        {keyResults.map(keyResult => (
          <KeyResult
            key={uuid()}
            onSubmit={setKeyResult}
            keyResult={keyResult}
            {...props}
          />
        ))}
        <KeyResult {...props} onSubmit={setKeyResult} />
      </Fragment>
    );
  }
}
export default KeyResultsList;
