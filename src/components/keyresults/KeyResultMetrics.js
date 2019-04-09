import React, { Fragment, Component } from "react";
import TextInputGroup from "../shared/TextInputGroup";
import MetricMenu from "./MetricMenu";

class KeyResultMetrics extends Component {
  render() {
    const { onChange, unit, type } = this.props;
    return (
      <Fragment>
        <TextInputGroup
          name="unit"
          placeholder="Amount"
          value={unit}
          onChange={onChange}
          type={type}
        />
        <MetricMenu />
      </Fragment>
    );
  }
}
export default KeyResultMetrics;
