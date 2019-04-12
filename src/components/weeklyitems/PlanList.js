import React, { Component, Fragment } from "react";
import uuid from "uuid";

import Plan from "./Plan.js";

class PlanList extends Component {
  onSubmit = (submitValue, index) => {
    const { setWeeklyPlan } = this.props;
    setWeeklyPlan(submitValue, index);
  };

  render() {
    const { plansList, objectiveId, ...props } = this.props;

    return (
      <Fragment>
        {plansList.map((plan, i) => {
          return (
            <Plan
              planId={i}
              objectiveId={objectiveId}
              key={uuid()}
              plan={plan}
              onSubmit={this.onSubmit}
              {...props}
            />
          );
        })}

        <Plan onSubmit={this.onSubmit} objectiveId={objectiveId} {...props} />
      </Fragment>
    );
  }
}

export default PlanList;
