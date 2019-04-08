import React, { Fragment, Component } from "react";
import InputGroup, { FormControl } from "react-bootstrap/InputGroup";

class KeyResultMetrics extends Component {
  render() {
    return (
      <Fragment>
        <InputGroup className="mb-3">
          <InputGroup.Append>
            <InputGroup.Text>
              <FormControl placeholder="Amount" />
            </InputGroup.Text>
            <InputGroup.Text> % </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </Fragment>
    );
  }
}
export default KeyResultMetrics;
